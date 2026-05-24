import Link from 'next/link';
import Image from 'next/image';

export default function CTA() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="relative rounded-4xl overflow-hidden h-[600px]">

          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/State-secretariat-4.png"
              alt="Contemporary Group Limited"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/65" />
          </div>
          {/* Content */}
          <div className="relative z-10 p-12 md:p-24 text-white flex flex-col justify-center w-full h-full">
            <h2 className="font-gotham text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Ready to Shape <br/> the Future?
            </h2>
            <p className="font-sans text-lg md:text-xl text-white/90 font-medium leading-relaxed">
              Partner with Contemporary Group Limited for unique solutions and exceptional architectural projects.
            </p>
            <div className="flex flex-col sm:flex-row  gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-block bg-white text-brand-primary px-10 py-5 rounded-full font-gotham text-sm uppercase tracking-widest font-bold"
              >
                Start Your Project
              </Link>
              <a
                href="/Contemporary-Brochure-2023.pdf"
                download="Contemporary-Group-Brochure-2023.pdf"
                className="inline-flex items-center gap-2 bg-brand-dark text-white px-10 py-5 rounded-full font-gotham text-sm uppercase tracking-widest font-bold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Brochure
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
