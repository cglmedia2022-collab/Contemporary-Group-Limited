"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    company: "Leo Consult Associates",
    name: "Engr. Lucky Osare Iyare",
    photo: "/Technical Partners/Engr. Lucky Osare Iyare.jpeg",
    bio: "A registered Civil/Structural Engineer with over 22 years of experience. FNICE, MNSE, COREN registered.",
  },
  {
    company: "NED & Partners",
    name: "Engr. Nnaeto",
    photo: "/Technical Partners/Engr. Nnaeto.jpeg",
    bio: "Founding partner of an indigenous Civil & Structural Engineering firm with over 27 years of experience. COREN registered, MNSE.",
  },
  {
    company: "Prime Associates",
    name: "Engr. Abaegbu Okoro Ijioma",
    photo: "/Technical Partners/Engr. Abaegbu Okoro Ijioma.jpeg",
    bio: "Holds HND, PGD, MIEEE, MNIEEE. Over 30 years of experience as an Electrical Engineer. COREN registered, MNSE.",
  },
  {
    company: "Prime Associates",
    name: "Engr. Yemi Akintode",
    photo: "/Technical Partners/Engr. Yemi Akintode.jpeg",
    bio: "Certified Mechanical Engineer with over 30 years of experience. COREN registered, MNSE.",
  },
];

export default function TechnicalPartnersHero() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-background">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <span className="font-gotham text-base md:text-lg uppercase tracking-[0.25em] text-foreground/80 font-light block mb-2">
                Technical Partners
              </span>
              <h1 className="font-gotham text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
                Collaborating for<br />Excellence.
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-5/12 font-sans text-base text-foreground/70 leading-relaxed"
            >
              Contemporary Group Limited collaborates with leading technical partners to deliver comprehensive, world-class engineering solutions across Civil, Structural, Electrical, and Mechanical disciplines.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, idx) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col space-y-6"
              >
                {/* Photo */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-neutral-100 group">
                  <Image
                    src={partner.photo}
                    alt={partner.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Info */}
                <div className="space-y-3">
                  <div>
                    <h3 className="font-gotham text-lg font-bold text-foreground leading-tight">
                      {partner.name}
                    </h3>
                    <p className="font-sans text-xs text-brand-primary font-bold uppercase tracking-widest mt-1">
                      {partner.company}
                    </p>
                  </div>
                  
                  <div className="w-8 h-px bg-brand-primary/40" />

                  <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                    {partner.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
