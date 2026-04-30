import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import exchangeImg from "@/assets/exchange.jpg";

export const Route = createFileRoute("/exchange")({
  head: () => ({
    meta: [
      { title: "Artists' Exchange — The Terrace Kilifi" },
      {
        name: "description",
        content:
          "A bridge between cultures, disciplines and communities. Cross-cultural dialogue and collaborative creation.",
      },
      { property: "og:title", content: "Artists' Exchange — The Terrace Kilifi" },
      { property: "og:image", content: exchangeImg },
    ],
  }),
  component: ExchangePage,
});

const PILLARS = [
  { n: "01", title: "Cross-cultural dialogue", body: "Hosted conversations between artists working across geographies, languages and traditions." },
  { n: "02", title: "Community partnerships", body: "Long-term collaborations with neighbours, schools and cultural organisations along the creek." },
  { n: "03", title: "Knowledge exchange", body: "Reciprocal learning — skills, methods, and stories travel in both directions." },
  { n: "04", title: "Collaborative creation", body: "Co-authored works that could only exist because two practices met here." },
  { n: "05", title: "Local & international networks", body: "A growing constellation of artists, curators and institutions linked by The Terrace." },
];

function ExchangePage() {
  return (
    <>
      <PageHero
        eyebrow="Artists' Exchange"
        title="A bridge between cultures, disciplines, and communities."
        description="The Artists' Exchange weaves connections — between local and international artists, between disciplines, between Kilifi and the world."
        image={exchangeImg}
      />

      <section className="container-editorial py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">Five threads</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Exchange as practice, not transaction.
            </h2>
          </Reveal>
          <Reveal delay={150} className="md:col-span-6 md:col-start-7 text-lg leading-relaxed text-foreground/80">
            <p>
              We believe meaningful exchange takes time. Our programmes are designed for
              depth — slow conversations, shared studios, and projects that reward patience
              with new ways of seeing.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 space-y-px bg-border border border-border">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="bg-background grid md:grid-cols-12 gap-6 p-8 md:p-12 group hover:bg-secondary/40 transition-colors duration-500">
                <div className="md:col-span-2 font-serif text-3xl text-primary">{p.n}</div>
                <h3 className="md:col-span-4 font-serif text-2xl md:text-3xl leading-tight">{p.title}</h3>
                <p className="md:col-span-6 text-foreground/75 leading-relaxed text-lg">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative py-28 md:py-36 overflow-hidden">
        <img src={exchangeImg} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative container-editorial text-ivory text-center">
          <Reveal>
            <p className="eyebrow text-ivory/70">Partner with us</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05] max-w-3xl mx-auto text-balance">
              Build something with The Terrace.
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-xl mx-auto text-ivory/80 leading-relaxed">
              Institutions, collectives and individuals — we welcome conversations about
              residencies, exhibitions, exchanges and collaborations.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <a
              href="/contact"
              className="mt-10 inline-flex items-center rounded-full bg-ivory px-8 py-4 text-xs uppercase tracking-[0.22em] text-charcoal hover:bg-clay transition-colors duration-500"
            >
              Start a conversation
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
