"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const pillars = [
  {
    label: "Human Rights",
    icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  },
  {
    label: "Labour",
    icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z",
  },
  {
    label: "Environment",
    icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
  },
  {
    label: "Anti-Corruption",
    icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const services = [
  "Sustainability Solutions — Energy, Water & Waste Management",
  "Sustainable Interior Design & Fit-Out Solutions",
  "Sustainable Procurement & Logistics Management",
  "Corporate Sustainability Advocacy",
];

export default function GlobalCompact() {
  return (
    <section className="py-24 bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="rounded-4xl overflow-hidden border border-brand-primary/20"
        >
          {/* Top banner */}
          <div className="bg-brand-primary/5 px-8 md:px-12 py-10 flex flex-col md:flex-row items-center gap-8 border-b border-brand-primary/10">
            <div className="relative w-24 h-24 shrink-0">
              <Image
                src="/WildCardPictures/UGC_logo.png"
                alt="United Nations Global Compact"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-1">
              <span className="font-gotham text-xs uppercase tracking-widest text-brand-primary font-semibold block">
                A New Milestone
              </span>
              <h2 className="font-gotham text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
                Contemporary Group Ltd Joins the{" "}
                <span className="text-brand-primary">United Nations Global Compact</span>
              </h2>
              <p className="font-sans text-xs uppercase tracking-widest text-foreground/50 font-medium pt-1">
                The World&apos;s Largest Corporate Sustainability Initiative
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="px-8 md:px-12 py-10 space-y-10">
            {/* Commitment statement */}
            <div className="space-y-4 max-w-4xl">
              <p className="font-sans text-sm text-foreground/70 leading-relaxed text-justify">
                Contemporary Group Ltd has officially joined the United Nations Global Compact, the
                World&apos;s largest Corporate Sustainability initiative. By becoming a participant,
                Contemporary Group Ltd is committing to uphold and advance{" "}
                <strong className="text-foreground font-semibold">
                  The Ten Principles of the United Nations Global Compact
                </strong>
                , covering Human Rights, Labour, Environment, and Anti-Corruption.
              </p>
              <blockquote className="font-sans text-sm italic text-foreground/75 leading-relaxed border-l-4 border-brand-primary pl-5 py-1">
                &ldquo;This milestone reflects our belief that responsible business is the foundation
                of lasting success, and we look forward to playing our part in building a more
                sustainable, ethical, and inclusive future for all.&rdquo;
              </blockquote>
              <p className="font-sans text-[11px] text-foreground/45 font-medium tracking-wide">
                — Arc. Kester Ifeadi
              </p>
            </div>

            {/* Four pillars */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center gap-3 p-5 rounded-3xl bg-brand-primary/5 border border-brand-primary/10 hover:bg-brand-primary/10 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-2xl bg-brand-primary flex items-center justify-center text-white shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={pillar.icon} />
                    </svg>
                  </div>
                  <span className="font-gotham text-[11px] uppercase tracking-wider text-foreground font-bold leading-tight">
                    {pillar.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CVR Sustainability subsidiary spotlight */}
            <div className="rounded-3xl bg-white border border-neutral-100 p-8 space-y-5">
              <div className="space-y-1">
                <span className="font-gotham text-xs uppercase tracking-widest text-brand-primary font-semibold block">
                  Our Sustainability Subsidiary
                </span>
                <h3 className="font-gotham text-xl md:text-2xl font-extrabold tracking-tight">
                  Contemporary Ventures &amp; Resources Ltd
                </h3>
                <p className="font-sans text-xs text-foreground/50 uppercase tracking-wider font-medium">
                  A Sustainability Solutions Company
                </p>
              </div>
              <p className="font-sans text-sm text-foreground/65 leading-relaxed text-justify max-w-3xl">
                Offering a comprehensive range of services within the construction value chain,
                providing clients with a single point of responsibility for Sustainability Solutions
                for improved operational efficiency.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                {services.map((service, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-brand-primary/5 border border-brand-primary/10"
                  >
                    <div className="w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-3 h-3 text-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="font-sans text-[11px] text-foreground/70 leading-relaxed">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
