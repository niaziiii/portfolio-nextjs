import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { getAdminSession } from "@/lib/auth";
import Project from "@/models/Project";

type Params = { params: Promise<{ id: string }> };

// GET /api/projects/[id] - public
export async function GET(_req: NextRequest, { params }: Params) {
  const { id } = await params;
  await connectDB();
  const project = await Project.findById(id, { "images.data": 0 }).lean();
  if (!project) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json({
    ...project,
    _id: project._id!.toString(),
    images: (project.images ?? []).map((img: { _id?: unknown; contentType: string; filename: string }) => ({
      _id: img._id?.toString(),
      contentType: img.contentType,
      filename: img.filename,
    })),
  });
}

// PUT /api/projects/[id] - admin, multipart/form-data
export async function PUT(req: NextRequest, { params }: Params) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
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
  const removeImages = formData.get("removeImages") as string | null;

  const tags = tagsRaw ? tagsRaw.split(",").map((t) => t.trim()).filter(Boolean) : [];
  const highlights = highlightsRaw ? highlightsRaw.split("\n").map((h) => h.trim()).filter(Boolean) : [];

  const project = await Project.findById(id);
  if (!project) return NextResponse.json({ error: "Not found" }, { status: 404 });

  // Remove specified images by index
  if (removeImages) {
    const indicesToRemove = removeImages.split(",").map(Number).sort((a, b) => b - a);
    indicesToRemove.forEach((idx) => {
      if (idx >= 0 && idx < project.images.length) {
        project.images.splice(idx, 1);
      }
    });
  }

  // Add new images
  const imageFiles = formData.getAll("images") as File[];
  for (const file of imageFiles) {
    const buffer = Buffer.from(await file.arrayBuffer());
    project.images.push({
      data: buffer,
      contentType: file.type,
      filename: file.name,
    });
  }

  project.name = name;
  project.description = description;
  project.tags = tags;
  project.highlights = highlights;
  project.link = link || undefined;
  project.company = company || undefined;
  project.featured = featured;
  project.order = order;

  await project.save();

  return NextResponse.json({ ok: true });
}

// DELETE /api/projects/[id] - admin
export async function DELETE(_req: NextRequest, { params }: Params) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  await connectDB();
  await Project.findByIdAndDelete(id);
  return NextResponse.json({ ok: true });
}
