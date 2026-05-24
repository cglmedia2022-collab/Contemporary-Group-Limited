"use client";

import { motion } from "framer-motion";

const leftAwards = [
  {
    title: "Distinguished Customer Award",
    year: "2015",
    awardedBy: "Fidelity Bank",
    highlight: false
  },
  {
    title: "Africa Week Leadership Award",
    year: "2010",
    awardedBy: "Africa Week",
    highlight: true
  },
  {
    title: "Excellence in Property Dev. & Engineering Services",
    year: "2008",
    awardedBy: "African Direct Marketing Merit Award",
    highlight: false
  },
  {
    title: "Excellence in Property Dev. & Engineering Services",
    year: "2007",
    awardedBy: "African Direct Marketing Merit Award",
    highlight: false
  }
];

const rightAwards = [
  {
    title: "World Class Architectural Design Consultants of the Year",
    year: "2008",
    awardedBy: "Nigeria",
    highlight: true
  },
  {
    title: "Construction Industry Certificate of Recognition",
    year: "N/A",
    awardedBy: "CED Construction Industry",
    highlight: false
  },
  {
    title: "Certificate of Recognition",
    year: "2006",
    awardedBy: "Nigeria Real Estate Awards (NIREA)",
    highlight: false
  },
  {
    title: "Most Iconic Corporate Building in Nigeria",
    year: "2024",
    awardedBy: "Certificate of Recognition",
    highlight: false
  }
];

const featuredAward = {
  title: "Most Iconic Corporate Design",
  year: "2024",
  awardedBy: "Nigerian Institute of Architects",
  highlight: false
};

const TrophyIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
  </svg>
);

const AwardCard = ({ award }: { award: typeof leftAwards[0] }) => (
  <div className={`p-6 rounded-md border flex items-start gap-4 transition-transform duration-300 ${
    award.highlight
      ? "bg-brand-primary border-brand-primary"
      : "border-neutral-100"
  }`}>
    <div className={`mt-1 p-2 rounded-full shrink-0 ${
      award.highlight ? "bg-white/20 text-white" : "bg-brand-primary/10 text-brand-primary"
    }`}>
      <TrophyIcon />
    </div>
    <div className="space-y-1">
      <h3 className={`font-gotham text-base font-bold leading-snug ${award.highlight ? "text-white" : "text-foreground"}`}>
        {award.title}
      </h3>
      {award.year !== "N/A" && (
        <p className={`font-sans text-xs ${award.highlight ? "text-white/80" : "text-foreground/50"}`}>
          Year: {award.year}
        </p>
      )}
      <p className={`font-sans text-xs ${award.highlight ? "text-white/80" : "text-foreground/50"}`}>
        Award by: {award.awardedBy}
      </p>
    </div>
  </div>
);

const BigTrophy = () => (
  <svg viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Cup body */}
    <path d="M55 20 H145 V110 C145 155 110 175 100 178 C90 175 55 155 55 110 Z" fill="#d2ae6d" opacity="0.15"/>
    <path d="M58 20 H142 V108 C142 152 108 172 100 175 C92 172 58 152 58 108 Z" fill="url(#goldGrad)" stroke="#d2ae6d" strokeWidth="3"/>
    {/* Star in center */}
    <path d="M100 70 L104 82 H117 L107 89 L111 101 L100 94 L89 101 L93 89 L83 82 H96 Z" fill="#fff" opacity="0.85"/>
    {/* Handles */}
    <path d="M58 50 H43 C34 50 30 57 30 65 C30 73 34 80 43 80 H58" stroke="#d2ae6d" strokeWidth="5" strokeLinecap="round" fill="none"/>
    <path d="M142 50 H157 C166 50 170 57 170 65 C170 73 166 80 157 80 H142" stroke="#d2ae6d" strokeWidth="5" strokeLinecap="round" fill="none"/>
    {/* Neck */}
    <rect x="88" y="175" width="24" height="28" rx="4" fill="#d2ae6d" opacity="0.7"/>
    {/* Base */}
    <rect x="68" y="200" width="64" height="14" rx="6" fill="#d2ae6d"/>
    <rect x="60" y="212" width="80" height="10" rx="5" fill="#a98548"/>
    <defs>
      <linearGradient id="goldGrad" x1="55" y1="20" x2="145" y2="178" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#f2d9a6"/>
        <stop offset="50%" stopColor="#d2ae6d"/>
        <stop offset="100%" stopColor="#a98548"/>
      </linearGradient>
    </defs>
  </svg>
);

export default function Awards() {
  return (
    <section className="py-24 bg-neutral-50/40">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-gotham text-xs uppercase tracking-[0.2em] text-brand-primary font-bold mb-4">
            OUR EXCELLENCE
          </span>
          <h2 className="font-gotham text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Awards & Major Achievements
          </h2>
        </div>

        {/* 3-column layout: left awards | trophy | right awards */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-center">

          {/* Left Awards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {leftAwards.map((award, idx) => (
              <AwardCard key={idx} award={award} />
            ))}
          </motion.div>

          {/* Center Trophy */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-48 md:w-56 lg:w-64 mx-auto"
          >
            <BigTrophy />
          </motion.div>

          {/* Right Awards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {rightAwards.map((award, idx) => (
              <AwardCard key={idx} award={award} />
            ))}
          </motion.div>

        </div>

        {/* Full-width 9th Award */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 p-6 rounded-2xl border border-neutral-100 flex items-center gap-6 w-full"
        >
          <div className="p-2 rounded-full shrink-0 bg-brand-primary/10 text-brand-primary">
            <TrophyIcon />
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2">
            <h3 className="font-gotham text-base font-bold text-foreground">
              {featuredAward.title}
            </h3>
            <div className="flex gap-6">
              <p className="font-sans text-xs text-foreground/50">Year: {featuredAward.year}</p>
              <p className="font-sans text-xs text-foreground/50">Award by: {featuredAward.awardedBy}</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
