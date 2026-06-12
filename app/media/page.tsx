import React from "react";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import MediaContent from "@/components/MediaContent";
import { blogPosts } from "@/lib/blogData";
import { getBlogs } from "@/lib/fetchData";

export default async function MediaPage() {
  const dbBlogs = await getBlogs();
  const allPosts = [...dbBlogs, ...blogPosts];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <MediaContent allPosts={allPosts} />
      <CTA />
      <Footer />
    </div>
  );
}
