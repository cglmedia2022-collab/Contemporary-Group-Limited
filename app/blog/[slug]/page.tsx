import { blogPosts } from "@/lib/blogData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1 pt-32 pb-24">
        <article className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Back Link */}
        <Link 
          href="/#blog" 
          className="inline-flex items-center gap-2 text-sm font-sans text-brand-primary hover:text-brand-dark transition-colors mb-12 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1">
            <path d="m12 19-7-7 7-7"/>
            <path d="M19 12H5"/>
          </svg>
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-xs font-sans text-foreground/50 uppercase tracking-widest font-bold mb-6">
            <span className="text-brand-primary">{post.category}</span>
            <span>&bull;</span>
            <span>{post.date}</span>
          </div>
          <h1 className="font-gotham text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-8">
            {post.title}
          </h1>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-neutral-500">
              {post.author.charAt(0)}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm font-sans">{post.author}</span>
              <span className="text-xs text-foreground/50 font-sans">Author</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-16 bg-neutral-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none font-sans text-justify">
          {post.content}
        </div>
        
        </article>
      </main>
      <CTA />
      <Footer />
    </div>
  );
}
