"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const members = [
  {
    name: "Contemporary Design Associates",
    abbr: "CDA",
    logo: "/MemeberGroup Logo/Contemporary-Design-Associate-Logo-2.png",
    role: "Architectural Consultancy",
    website: "https://www.contemporarygroupng.com",
    description:
      "The consultancy arm of the group, handling architectural and specialist consultancies for private, government, and corporate clients. CDA plays supervisory roles in the management and execution of the Group's projects, and served as sole consultant for the Federal Government in 2007 for monitoring and evaluation of all MDG debt relief-funded projects in Delta State.",
    notableProjects: [
      "Asaba International Airport",
      "Delta State Secretariat",
      "Nigerian Law School — Enugu",
      "Appeal Court — Enugu",
      "Governor's Lodge — Gombe",
      "Standard Organisation of Nigeria HQ — Lagos & Ekiti",
    ],
    image: "/HeroCarousel/asabaAirport.webp",
  },
  {
    name: "Contemporary Properties Limited",
    abbr: "CPL",
    logo: "/MemeberGroup Logo/CPL-2.png",
    role: "Property Development",
    website: "https://www.contemporarygroupng.com",
    description:
      "Incorporated in 1990, CPL began as an architectural consultancy and evolved into a full-spectrum property development company. With over 32 years of experience, CPL has been involved in the construction and development of top-class properties across Nigeria, becoming a foremost player in the building industry.",
    notableProjects: [
      "Hilton Garden Inn — Lagos",
      "Orchid Hotel — Asaba & Lagos",
      "Zenith Bank branches — Nationwide",
      "Block of Luxury Flats — Queens Drive, Ikoyi",
      "Ebeano Mall — Lekki",
    ],
    image: "/HeroCarousel/Orchid-Hotels.jpg",
  },
  {
    name: "Contemporary Ventures & Resources Limited",
    abbr: "CVR",
    logo: "/MemeberGroup Logo/CVRp-Logos.png",
    role: "Real Estate & Energy Solutions",
    website: "https://www.contemporarygroupng.com",
    description:
      "CVR offers a multitude of professional services including residential and commercial development, sales, leasing, energy solutions, alternative backup power, and joint venture partnerships and financing. As a Design and Build subsidiary, CVR bridges the gap between development and resource management.",
    notableProjects: [
      "Residential & Commercial Development",
      "Sales & Leasing Portfolio",
      "Energy & Alternative Power Solutions",
      "Joint Venture Financing",
    ],
    image: "/HeroCarousel/v1-Copy-2.png",
  },
  {
    name: "Conwave Ventures Limited",
    abbr: "CVL",
    logo: "/MemeberGroup Logo/Conwave-bw-Logos.png",
    role: "Investment & Trade",
    website: "https://www.contemporarygroupng.com",
    description:
      "The investment and trade outfit of the group, operating with foreign business partners globally. Conwave's activities span import and export trade and strategic investment in the agro-allied industry, extending Contemporary Group's reach into international commerce.",
    notableProjects: [
      "Import & Export Trade",
      "Agro-Allied Industry Investments",
      "International Business Partnerships",
    ],
    image: "/HeroCarousel/ICC-1.png",
  },
  {
    name: "Contemporary Properties Inc.",
    abbr: "CPI",
    logo: null,
    role: "Offshore Investments — Canada",
    website: "https://www.contemporarygroupng.com",
    description:
      "The foreign affiliate of the group, responsible for offshore investments and architectural projects in Canada. Managed by Anita Ifeadi, who brings expertise in institutional, high-rise residential, and mixed-use architectural design with a background in working with the City of Toronto's Housing Secretariat Division.",
    notableProjects: [
      "Offshore Real Estate Investment",
      "Mixed-Use Architectural Design",
      "International Master Planning",
    ],
    image: "/HeroCarousel/image-46.png",
  },
];

export default function MembersHero() {
  return (
    <>
      {/* Page Hero */}
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
              Members of Group
            </span>
              <h1 className="font-gotham text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
                Five Companies.<br />One Vision.
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-5/12 font-sans text-base text-foreground/70 leading-relaxed"
            >
              Contemporary Group Limited&apos;s strength lies in its five distinct subsidiaries, each contributing specialized expertise across architecture, property development, investment, and international operations — united under a single pursuit of excellence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Members List */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="divide-y divide-neutral-100">
            {members.map((member, idx) => (
              <motion.div
                key={member.abbr}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${
                  idx % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Text Side */}
                <div className="flex flex-col space-y-6">
                  <div>
                    {member.logo ? (
                      <div className="relative h-12 w-40 mb-4">
                        <Image
                          src={member.logo}
                          alt={`${member.name} logo`}
                          fill
                          className="object-contain object-left"
                          sizes="160px"
                        />
                      </div>
                    ) : (
                      <span className="font-gotham text-xs uppercase tracking-[0.2em] text-brand-primary font-bold block mb-4">
                        {member.abbr}
                      </span>
                    )}
                    <h2 className="font-gotham text-3xl md:text-4xl font-extrabold text-foreground mt-2 leading-snug">
                      {member.name}
                    </h2>
                    <p className="font-sans text-sm text-foreground/50 mt-1 tracking-wide">
                      {member.role}
                    </p>
                  </div>

                  <p className="font-sans text-base text-foreground/75 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Notable Projects */}
                  <div>
                    <p className="font-gotham text-xs uppercase tracking-[0.15em] text-foreground/40 font-semibold mb-4">
                      Notable Work
                    </p>
                    <ul className="space-y-2">
                      {member.notableProjects.map((project) => (
                        <li
                          key={project}
                          className="flex items-start gap-3 font-sans text-sm text-foreground/70"
                        >
                          <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visit Website */}
                  <Link
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-foreground hover:text-brand-primary transition-colors group w-fit pt-2"
                  >
                    Visit Website
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </Link>
                </div>

                {/* Image Side */}
                <div className="relative h-[380px] md:h-[500px] w-full rounded-4xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
