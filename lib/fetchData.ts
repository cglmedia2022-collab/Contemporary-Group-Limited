import connectDB from "@/lib/mongodb";
import { Blog, Career, Project } from "@/lib/models";

export async function getBlogs() {
  try {
    await connectDB();
    const dbBlogs = await Blog.find({}).sort({ createdAt: -1 }).lean();
    return dbBlogs.map((b: any) => ({
      id: b._id.toString(),
      slug: b.slug,
      title: b.title,
      excerpt: b.excerpt,
      content: b.content,
      date: b.date,
      author: b.author,
      image: b.image,
      category: b.category,
    }));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export async function getCareers() {
  try {
    await connectDB();
    const dbCareers = await Career.find({}).sort({ createdAt: -1 }).lean();
    return dbCareers.map((c: any) => ({
      id: c._id.toString(),
      title: c.title,
      location: c.location,
      workModel: c.workModel,
      description: c.description,
    }));
  } catch (error) {
    console.error("Error fetching careers:", error);
    return [];
  }
}

export async function getProjects() {
  try {
    await connectDB();
    const dbProjects = await Project.find({}).sort({ createdAt: -1 }).lean();
    return dbProjects.map((p: any) => ({
      id: p._id.toString(),
      title: p.title,
      slug: p.slug,
      client: p.client,
      category: p.category,
      image: p.image,
    }));
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}
