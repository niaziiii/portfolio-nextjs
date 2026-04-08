import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { getAdminSession } from "@/lib/auth";
import Project from "@/models/Project";

// GET /api/projects - public, returns all projects (without image binary data)
export async function GET() {
  await connectDB();
  const projects = await Project.find({}, { "images.data": 0 })
    .sort({ order: 1, createdAt: -1 })
    .lean();

  const serialized = projects.map((p) => ({
    ...p,
    _id: p._id!.toString(),
    images: (p.images ?? []).map((img: { _id?: unknown; contentType: string; filename: string }) => ({
      _id: img._id?.toString(),
      contentType: img.contentType,
      filename: img.filename,
    })),
    createdAt: (p.createdAt as Date).toISOString(),
    updatedAt: (p.updatedAt as Date).toISOString(),
  }));

  return NextResponse.json(serialized);
}

// POST /api/projects - admin only, multipart/form-data
export async function POST(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await connectDB();

  const formData = await req.formData();
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const tagsRaw = formData.get("tags") as string;
  const highlightsRaw = formData.get("highlights") as string;
  const link = formData.get("link") as string | null;
  const company = formData.get("company") as string | null;
  const featured = formData.get("featured") === "true";
  const order = parseInt(formData.get("order") as string) || 0;

  const tags = tagsRaw ? tagsRaw.split(",").map((t) => t.trim()).filter(Boolean) : [];
  const highlights = highlightsRaw ? highlightsRaw.split("\n").map((h) => h.trim()).filter(Boolean) : [];

  const imageFiles = formData.getAll("images") as File[];
  const images = await Promise.all(
    imageFiles.map(async (file) => {
      const buffer = Buffer.from(await file.arrayBuffer());
      return {
        data: buffer,
        contentType: file.type,
        filename: file.name,
      };
    })
  );

  const project = await Project.create({
    name,
    description,
    tags,
    highlights,
    images,
    link: link || undefined,
    company: company || undefined,
    featured,
    order,
  });

  return NextResponse.json({ _id: project._id.toString() }, { status: 201 });
}
