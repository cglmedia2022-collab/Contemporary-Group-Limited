import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { Blog } from "@/lib/models";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    
    // Auto-generate slug from title if not provided
    if (!body.slug) {
      body.slug = body.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
    }
    
    // Default date if not provided
    if (!body.date) {
      body.date = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    }

    const blog = await Blog.create(body);
    return NextResponse.json(blog, { status: 201 });
  } catch (error: any) {
    console.error("Failed to create blog:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return NextResponse.json(blogs);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
