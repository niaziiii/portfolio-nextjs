import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";

type Params = { params: Promise<{ id: string; index: string }> };

export async function GET(_req: NextRequest, { params }: Params) {
  const { id, index } = await params;
  await connectDB();

  const project = await Project.findById(id);
  if (!project) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const idx = parseInt(index);
  const image = project.images[idx];
  if (!image) return NextResponse.json({ error: "Image not found" }, { status: 404 });

  return new NextResponse(image.data, {
    headers: {
      "Content-Type": image.contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
