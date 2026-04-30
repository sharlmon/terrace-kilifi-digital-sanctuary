import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Check } from "lucide-react";
import residencyImg from "@/assets/residency.jpg";
import mangroveImg from "@/assets/mangrove.jpg";

export const Route = createFileRoute("/residency")({
  head: () => ({
    meta: [
      { title: "Residency — The Terrace Kilifi" },
      {
        name: "description",
        content:
          "Professional and emerging residencies on Kilifi Creek. Reflection, experimentation, and deep creative work.",
      },
      { property: "og:title", content: "Residency — The Terrace Kilifi" },
      { property: "og:image", content: residencyImg },
    ],
  }),
  component: ResidencyPage,
});

const PROFESSIONAL = [
  "Reflection, experimentation, and deep creative work",
  "Creekside seclusion and natural beauty",
  "Interdisciplinary practice across mediums",
  "Eco-conscious living and slow rhythms",
  "Flexible stays from one week to three months",
  "Private living spaces, studios, and shared amenities",
];

const EMERGING = [
  "Mentorship from established artists and practitioners",
  "Skill development across mediums and methods",
  "Active community participation",
  "Music studio and creative production facilities",
  "Performance and screening spaces",
  "Collaboration opportunities and market access",
];

function ResidencyPage() {
  return (
    <>
      <PageHero
        eyebrow="The Residency"
        title="Time to reflect, room to risk, a creek to listen to."
        description="Two distinct residencies — Professional and Emerging — held in a creekside setting designed for deep, generous work."
        image={residencyImg}
      />

      <section className="container-editorial py-24 md:py-32 grid md:grid-cols-12 gap-12">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">Two paths</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
            One sanctuary. Two ways in.
          </h2>
        </Reveal>
        <Reveal delay={150} className="md:col-span-6 md:col-start-7 text-lg leading-relaxed text-foreground/80">
          <p>
            The Terrace Residency holds space for both established and emerging
            voices. Each programme is shaped around the artist — their practice,
            their pace, their questions.
          </p>
        </Reveal>
      </section>

      {/* Professional */}
      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="container-editorial grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <Reveal className="md:col-span-5 md:sticky md:top-32">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img src={residencyImg} alt="Creekside villa at twilight" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={150} className="md:col-span-7">
            <p className="eyebrow text-primary">Professional Residency</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Deep work. Open horizons.
            </h2>
            <p className="mt-6 text-foreground/80 leading-relaxed text-lg">
              For mid-career and established artists across disciplines. The
              Professional Residency is a quiet container for ambitious projects
              — interdisciplinary, intentional, and rooted in place.
            </p>
            <ul className="mt-10 space-y-4">
              {PROFESSIONAL.map((item) => (
                <li key={item} className="flex gap-4 text-foreground/85">
                  <Check size={18} className="mt-1 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center rounded-full bg-foreground px-7 py-4 text-xs uppercase tracking-[0.22em] text-background hover:bg-primary transition-colors duration-500"
            >
              Apply for Professional Residency
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Emerging */}
      <section className="py-24 md:py-32">
        <div className="container-editorial grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <Reveal className="md:col-span-7 order-2 md:order-1">
            <p className="eyebrow text-accent">Emerging Residency</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Mentorship, momentum, community.
            </h2>
            <p className="mt-6 text-foreground/80 leading-relaxed text-lg">
              For early-career artists, particularly from coastal Kenya and the
              wider region. The Emerging Residency pairs studio time with
              mentorship, mentorship with community, and community with the
              skills to sustain a practice.
            </p>
            <ul className="mt-10 space-y-4">
              {EMERGING.map((item) => (
                <li key={item} className="flex gap-4 text-foreground/85">
                  <Check size={18} className="mt-1 text-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center rounded-full bg-foreground px-7 py-4 text-xs uppercase tracking-[0.22em] text-background hover:bg-primary transition-colors duration-500"
            >
              Apply for Emerging Residency
            </Link>
          </Reveal>
          <Reveal delay={150} className="md:col-span-5 order-1 md:order-2 md:sticky md:top-32">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img src={mangroveImg} alt="Mangroves at dawn" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
