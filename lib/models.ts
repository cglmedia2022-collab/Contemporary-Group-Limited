import mongoose, { Schema, model, models } from "mongoose";

// Blog Schema
const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

// Career Schema
const CareerSchema = new Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    workModel: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

// Project Schema
const ProjectSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    client: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    content: { type: String, required: false },
    gallery: { type: [String], default: [] },
  },
  { timestamps: true }
);

export const Blog = models.Blog || model("Blog", BlogSchema);
export const Career = models.Career || model("Career", CareerSchema);
export const Project = models.Project || model("Project", ProjectSchema);
