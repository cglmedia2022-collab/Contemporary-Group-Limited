import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { getProjects } from "@/lib/fetchData";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dbProjects = await getProjects();
  const project = dbProjects.find((p: any) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1 pt-32 pb-24">
        <article className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Back Link */}
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-sm font-sans text-brand-primary hover:text-brand-dark transition-colors mb-12 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1">
            <path d="m12 19-7-7 7-7"/>
            <path d="M19 12H5"/>
          </svg>
          Back to Projects
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-xs font-sans text-foreground/50 uppercase tracking-widest font-bold mb-6">
            <span className="text-brand-primary">{project.category}</span>
          </div>
          <h1 className="font-gotham text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-8">
            {project.title}
          </h1>
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-bold text-sm font-sans">{project.client}</span>
              <span className="text-xs text-foreground/50 font-sans">Client</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-16 bg-neutral-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>

        {/* Content */}
        {project.content && (
          <div className="prose prose-lg dark:prose-invert max-w-none font-sans text-justify mb-16" dangerouslySetInnerHTML={{ __html: project.content }} />
        )}

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-16">
            <h3 className="font-gotham text-2xl font-extrabold mb-8">Project Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px]">
              {project.gallery.map((src: string, index: number) => {
                let classes = "relative rounded-3xl overflow-hidden group";
                if (index % 5 === 0) classes += " col-span-2 row-span-2"; // Make some images larger for a masonry feel
                else classes += " col-span-1 row-span-1";
                
                return (
                  <div key={index} className={classes}>
                    <Image
                      src={src}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
        
        </article>
      </main>
      <CTA />
      <Footer />
    </div>
  );
}
