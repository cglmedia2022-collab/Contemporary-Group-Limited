"use client";

import Image from "next/image";

export default function Clients() {
  // We extracted 24 logos. Split them into two rows of 12.
  const allLogos = Array.from({ length: 24 }, (_, i) => `/clients/client-${i + 1}.png`);
  const topRowLogos = allLogos.slice(0, 12);
  const bottomRowLogos = allLogos.slice(12, 24);

  return (
    <section className="py-24 bg-neutral-50 overflow-hidden relative border-t border-neutral-200/50">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="font-gotham text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900">
          Some of our valuable clients
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex flex-col gap-6 select-none">
        
        {/* Left Gradient Fade */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
        
        {/* Right Gradient Fade */}
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />

        {/* Row 1: Scrolling Left to Right (animate-marquee-right) */}
        <div className="flex w-[200%] animate-marquee-right hover:[animation-play-state:paused]">
          <div className="flex w-1/2 justify-around items-center px-4">
            {topRowLogos.map((logo, idx) => (
              <div 
                key={`top1-${idx}`} 
                className="w-40 h-24 bg-white border border-neutral-200/60 rounded-2xl shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow duration-300 flex-shrink-0 mx-3"
              >
                <Image
                  src={logo}
                  alt={`Client Logo ${idx + 1}`}
                  width={120}
                  height={80}
                  className="object-contain w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
          <div className="flex w-1/2 justify-around items-center px-4">
            {topRowLogos.map((logo, idx) => (
              <div 
                key={`top2-${idx}`} 
                className="w-40 h-24 bg-white border border-neutral-200/60 rounded-2xl shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow duration-300 flex-shrink-0 mx-3"
              >
                <Image
                  src={logo}
                  alt={`Client Logo ${idx + 1}`}
                  width={120}
                  height={80}
                  className="object-contain w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right to Left (animate-marquee-left) */}
        <div className="flex w-[200%] animate-marquee-left hover:[animation-play-state:paused]">
          <div className="flex w-1/2 justify-around items-center px-4">
            {bottomRowLogos.map((logo, idx) => (
              <div 
                key={`bottom1-${idx}`} 
                className="w-40 h-24 bg-white border border-neutral-200/60 rounded-2xl shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow duration-300 flex-shrink-0 mx-3"
              >
                <Image
                  src={logo}
                  alt={`Client Logo ${idx + 13}`}
                  width={120}
                  height={80}
                  className="object-contain w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
          <div className="flex w-1/2 justify-around items-center px-4">
            {bottomRowLogos.map((logo, idx) => (
              <div 
                key={`bottom2-${idx}`} 
                className="w-40 h-24 bg-white border border-neutral-200/60 rounded-2xl shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow duration-300 flex-shrink-0 mx-3"
              >
                <Image
                  src={logo}
                  alt={`Client Logo ${idx + 13}`}
                  width={120}
                  height={80}
                  className="object-contain w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
