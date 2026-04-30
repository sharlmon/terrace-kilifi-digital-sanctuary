import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Quote } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import heroImg from "@/assets/hero-creek.jpg";
import artImg from "@/assets/art-space.jpg";
import residencyImg from "@/assets/residency.jpg";
import exchangeImg from "@/assets/exchange.jpg";
import weaveImg from "@/assets/texture-weave.jpg";
import mangroveImg from "@/assets/mangrove.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Terrace Kilifi — Where Art, Community & Coast Converge" },
      {
        name: "description",
        content:
          "An artist-led independent arts space and residency on Kilifi Creek, Kenya. Exhibitions, residencies, and cross-cultural exchange.",
      },
      { property: "og:title", content: "The Terrace Kilifi" },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const PILLARS = [
  {
    label: "01 — Art Space",
    title: "A platform for community voice",
    body: "Exhibitions, performances, screenings, workshops and talks that connect, inspire and amplify.",
    image: artImg,
    href: "/art-space" as const,
  },
  {
    label: "02 — Residency",
    title: "Time, space and the creek",
    body: "Professional and emerging residencies set in creekside seclusion. From a week to three months.",
    image: residencyImg,
    href: "/residency" as const,
  },
  {
    label: "03 — Artists' Exchange",
    title: "A bridge between cultures",
    body: "Cross-cultural dialogue, knowledge exchange and collaborative creation across disciplines.",
    image: exchangeImg,
    href: "/exchange" as const,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "The Terrace is rare — a place where the rhythm of the creek shapes the work, and the work in turn shapes a community.",
    name: "Jackie Lebo",
    role: "Writer & Filmmaker",
  },
  {
    quote:
      "An honest, generous space. The kind of residency that quietly changes how you see your own practice.",
    name: "Visiting Artist",
    role: "Professional Residency, 2025",
  },
  {
    quote:
      "Mentorship here isn't a programme — it's a way of being together. I left with skills, friends, and a body of work.",
    name: "Emerging Resident",
    role: "Kilifi, 2025",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Mangroves at sunrise on Kilifi Creek"
          className="absolute inset-0 h-full w-full object-cover ken-burns"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/15 to-charcoal/70" />

        <div className="relative z-10 container-editorial h-full flex flex-col justify-end pb-20 md:pb-28 text-ivory">
          <p className="eyebrow text-ivory/70 reveal">Kilifi Creek · Coastal Kenya</p>
          <h1 className="reveal reveal-delay-1 mt-6 font-serif text-[3.4rem] sm:text-7xl md:text-[6rem] lg:text-[7.5rem] leading-[0.95] max-w-5xl text-balance">
            An artist-led <em className="not-italic text-clay">sanctuary</em><br className="hidden sm:block" />
            on the East African coast.
          </h1>
          <div className="reveal reveal-delay-2 mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
            <Link
              to="/residency"
              className="group inline-flex items-center gap-3 rounded-full bg-ivory px-7 py-4 text-xs uppercase tracking-[0.22em] text-charcoal hover:bg-clay transition-colors duration-500"
            >
              Discover the residency
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/art-space"
              className="inline-flex items-center gap-3 px-2 py-4 text-xs uppercase tracking-[0.22em] text-ivory/90 link-underline"
            >
              Explore the art space
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 right-6 md:right-12 z-10 text-ivory/60 text-[10px] uppercase tracking-[0.3em] writing-vertical hidden md:block">
          <span>Est. on the creek</span>
        </div>
      </section>

      {/* INTRO / STORY */}
      <section className="container-editorial py-28 md:py-40">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">A creekside ethos</p>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Independent. Artist-led. Rooted in place.
            </h2>
          </Reveal>
          <Reveal delay={150} className="md:col-span-6 md:col-start-7 space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              The Terrace is a creative sanctuary on Kilifi Creek — a meeting point for
              artists, thinkers, and communities. We make room for slow work and bold
              ideas, for experimentation grounded in the rhythms of the coast.
            </p>
            <p>
              Three intertwined programmes — an art space, a residency, and an artists'
              exchange — form a single ecosystem where local and international voices meet,
              collaborate, and create.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-secondary/40 py-28 md:py-36">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow">Three pillars</p>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.02] max-w-3xl text-balance">
              One ecosystem of art, residency and exchange.
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-10 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <Link
                  to={p.href}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                    <img
                      src={p.image}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                    <div className="absolute top-5 left-5 text-ivory eyebrow opacity-90">{p.label}</div>
                    <div className="absolute bottom-5 right-5 rounded-full bg-ivory/95 p-3 text-charcoal opacity-0 -translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                  <h3 className="mt-7 font-serif text-2xl md:text-3xl leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-foreground/70 leading-relaxed">{p.body}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL SPLIT */}
      <section className="container-editorial py-28 md:py-40">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <Reveal className="md:col-span-6 order-2 md:order-1">
            <p className="eyebrow">The place</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Where the mangroves meet the morning tide.
            </h2>
            <div className="mt-7 space-y-5 text-foreground/80 leading-relaxed">
              <p>
                Kilifi Creek is a slow, generous landscape — silver water at dawn,
                mangrove forests stitched with dhows, the call of birds at dusk. It
                shapes the way we work and the way we host.
              </p>
              <p>
                Our spaces are designed for conversation and quiet alike: open studios,
                a screening room, a music studio, a kitchen that becomes a gathering place.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-foreground link-underline"
            >
              Read our story
              <ArrowUpRight size={14} />
            </Link>
          </Reveal>
          <Reveal delay={200} className="md:col-span-6 order-1 md:order-2">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img src={mangroveImg} alt="Mangrove roots in still water" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-40 aspect-square overflow-hidden rounded-sm border-8 border-background hidden md:block float-slow">
                <img src={weaveImg} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-charcoal text-ivory py-28 md:py-36">
        <div className="container-editorial">
          <Reveal>
            <Quote className="text-clay" size={36} />
          </Reveal>
          <div className="mt-10 grid gap-12 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 150}>
                <blockquote className="font-serif text-2xl md:text-[1.7rem] leading-[1.25] text-ivory/95 text-pretty">
                  "{t.quote}"
                </blockquote>
                <footer className="mt-7">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-ivory/55 mt-1">{t.role}</p>
                </footer>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS PREVIEW */}
      <section className="container-editorial py-28 md:py-36">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <Reveal>
            <p className="eyebrow">Programmes & opportunities</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Apply, propose, participate.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <Link to="/contact" className="text-sm font-medium link-underline">
              View all open calls →
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-3 border border-border">
          {[
            { tag: "Open call", title: "Professional Residency · Spring 2026", body: "8 fellowships for mid-career artists across disciplines. Stays from one week to three months." },
            { tag: "Now accepting", title: "Emerging Residency · Cohort 04", body: "Mentorship, studio time, and community participation for early-career Kenyan artists." },
            { tag: "Proposal", title: "Exhibitions & Public Programmes", body: "Curators, performers, and collectives invited to propose exhibitions and live events." },
          ].map((p, i) => (
            <Reveal key={p.title} delay={i * 120} className="bg-background p-10 group">
              <p className="eyebrow text-primary">{p.tag}</p>
              <h3 className="mt-6 font-serif text-2xl leading-tight">{p.title}</h3>
              <p className="mt-4 text-foreground/70 leading-relaxed">{p.body}</p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium link-underline">
                Learn more <ArrowUpRight size={14} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <img src={heroImg} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="relative container-editorial text-center text-ivory">
          <Reveal>
            <p className="eyebrow text-ivory/70">An invitation</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.98] max-w-4xl mx-auto text-balance">
              Ready to create with us?
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 text-lg text-ivory/80 max-w-xl mx-auto leading-relaxed">
              Whether you are an artist, a collaborator, or simply curious — we'd love to hear from you.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-ivory px-8 py-4 text-xs uppercase tracking-[0.22em] text-charcoal hover:bg-clay transition-colors duration-500">
                Get in touch <ArrowUpRight size={16} />
              </Link>
              <Link to="/residency" className="inline-flex items-center gap-3 px-2 py-4 text-xs uppercase tracking-[0.22em] text-ivory link-underline">
                Apply for residency
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
