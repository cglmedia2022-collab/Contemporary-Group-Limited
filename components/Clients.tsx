"use client";

import Image from "next/image";

export default function Clients() {
  // Use the actual file names from the public/clients directory
  const allLogos = [
    "9mobile.webp",
    "Bayesa state.jpg",
    "Chevron.png",
    "Conoil.png",
    "Council Of Lagel Education.webp",
    "Ecobank.png",
    "Enugu_state.jpg",
    "Equitorial Trust Bank.jpg",
    "Fedral Government Nigeria.jpg",
    "FirstBank.png",
    "GT Bank.png",
    "Glo.png",
    "Gombe-state.jpg",
    "Lagos.png",
    "Leventis-Logo.png",
    "Mainstreet Microfinance bank.avif",
    "NSIA-Insurance.png",
    "Northwest.png",
    "Ogun state.png",
    "Sterling_Bank_Logo.png",
    "Vodafone.png",
    "Zenith-Bank-logo.png",
    "cakasa-logo.png",
    "delta-state-government.png"
  ].map(file => `/clients/${file}`);
  const topRowLogos = allLogos.slice(0, 12);
  const bottomRowLogos = allLogos.slice(12, 24);

  return (
    <section className="py-24 bg-neutral-50 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="font-gotham text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900">
          Some of our valuable clients
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex flex-col gap-6 select-none">
        
        {/* Left Gradient Fade */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-linear-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
        
        {/* Right Gradient Fade */}
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-linear-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />

        {/* Row 1: Scrolling Left to Right (animate-marquee-right) */}
        <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused]">
          <div className="flex items-center gap-6 pr-6">
            {topRowLogos.map((logo, idx) => (
              <div 
                key={`top1-${idx}`} 
                className="w-40 h-24 bg-white border border-neutral-200/60 rounded-2xl shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow duration-300 shrink-0"
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
          <div className="flex items-center gap-6 pr-6">
            {topRowLogos.map((logo, idx) => (
              <div 
                key={`top2-${idx}`} 
                className="w-40 h-24 bg-white border border-neutral-200/60 rounded-2xl shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow duration-300 shrink-0"
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
        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]">
          <div className="flex items-center gap-6 pr-6">
            {bottomRowLogos.map((logo, idx) => (
              <div 
                key={`bottom1-${idx}`} 
                className="w-40 h-24 bg-white border border-neutral-200/60 rounded-2xl shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow duration-300 shrink-0"
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
          <div className="flex items-center gap-6 pr-6">
            {bottomRowLogos.map((logo, idx) => (
              <div 
                key={`bottom2-${idx}`} 
                className="w-40 h-24 bg-white border border-neutral-200/60 rounded-2xl shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow duration-300 shrink-0"
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
