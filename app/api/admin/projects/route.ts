import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { Project } from "@/lib/models";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const { title, slug, client, category, image, content, gallery } = body;
    
    // Auto-generate slug from title if not provided
    const finalSlug = slug || title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

    const project = await Project.create({
      title,
      slug: finalSlug,
      client,
      category,
      image,
      content,
      gallery,
    });
    return NextResponse.json(project, { status: 201 });
  } catch (error: any) {
    console.error("Failed to create project:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find({}).sort({ createdAt: -1 });
    return NextResponse.json(projects);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
