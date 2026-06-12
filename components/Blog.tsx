import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blogData";
import { getBlogs } from "@/lib/fetchData";

export default async function Blog() {
  const dbBlogs = await getBlogs();
  const allPosts = [...dbBlogs, ...blogPosts];
  const featuredPost = allPosts[0];
  const otherPosts = allPosts.slice(1, 5); // Limit to 4 other posts for the layout

  return (
    <section className="py-24 bg-background text-foreground transition-colors duration-300" id="blog">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-xl space-y-4">
            <span className="font-gotham text-xs uppercase tracking-widest text-brand-primary font-semibold">
              Insights &amp; Updates
            </span>
            <h2 className="font-gotham text-3xl md:text-4xl font-extrabold tracking-tight">
              Our Recent Blog Entries
            </h2>
            <p className="font-sans text-xs text-foreground/60 leading-relaxed">
              The latest trends and cutting-edge technologies to practical tips and inspiring success stories, our blog is designed to inform.
            </p>
          </div>
          
          {/* View All Button */}
          <Link 
            href="/media" 
            className="px-8 py-3 rounded-full bg-brand-primary hover:bg-brand-dark text-white font-gotham text-[10px] uppercase tracking-widest font-bold shadow-md transition-all duration-300 select-none shrink-0"
          >
            View All
          </Link>
        </div>

        {/* Blog Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Featured Large Post */}
          <Link 
            href={`/blog/${featuredPost.slug}`}
            className="lg:col-span-7 group cursor-pointer space-y-6 block"
          >
            {/* Featured Image */}
            <div className="relative aspect-16/10 w-full rounded-3xl overflow-hidden bg-neutral-100">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>
            
            {/* Title & Info */}
            <div className="space-y-4">
              <h3 className="font-gotham text-xl md:text-2xl font-bold tracking-tight text-foreground group-hover:text-brand-primary transition-colors duration-300 leading-tight">
                {featuredPost.title}
              </h3>
              <p className="font-sans text-xs text-foreground/60 leading-relaxed text-justify max-w-2xl">
                {featuredPost.excerpt}
              </p>
              
              {/* Bottom Row info */}
              <div className="flex justify-between items-center pt-2 border-t border-neutral-200/50">
                <span className="font-sans text-xs text-foreground/80 font-medium">
                  {featuredPost.date}
                </span>
                
                <span className="font-sans text-[10px] uppercase tracking-wider text-foreground/40 font-bold">
                  {featuredPost.category}
                </span>
              </div>
            </div>
          </Link>

          {/* RIGHT COLUMN: Smaller Stacked Posts */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {otherPosts.map((post) => (
              <Link 
                href={`/blog/${post.slug}`}
                key={post.id}
                className="group cursor-pointer flex gap-6 pb-6 border-b border-neutral-200/60 last:border-0 last:pb-0"
              >
                {/* Small Image */}
                <div className="relative aspect-4/3 w-28 md:w-36 rounded-2xl overflow-hidden bg-neutral-100 shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 120px, 200px"
                  />
                </div>
                
                {/* Post details */}
                <div className="flex flex-col justify-between py-1 grow">
                  <h4 className="font-gotham text-xs md:text-sm font-bold tracking-tight text-foreground group-hover:text-brand-primary transition-colors duration-300 leading-snug">
                    {post.title}
                  </h4>
                  
                  {/* Footer Row */}
                  <div className="flex justify-between items-center text-[10px] font-sans text-foreground/50 mt-4">
                    {/* Date */}
                    <span className="font-medium text-foreground/75">{post.date}</span>
                    
                    {/* Tag */}
                    <span className="uppercase tracking-wider font-bold text-foreground/40">{post.category}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
