import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import mangroveImg from "@/assets/mangrove.jpg";
import weaveImg from "@/assets/texture-weave.jpg";
import artImg from "@/assets/art-space.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Terrace Kilifi" },
      {
        name: "description",
        content:
          "An artist-led, independent arts space and residency on Kilifi Creek, Kenya. Our story, our team, our place.",
      },
      { property: "og:title", content: "About — The Terrace Kilifi" },
      { property: "og:image", content: mangroveImg },
    ],
  }),
  component: AboutPage,
});

const TEAM = [
  { name: "Artistic Direction", role: "Curatorial vision and programming", img: artImg },
  { name: "Residency Team", role: "Hosting, mentorship and care", img: weaveImg },
  { name: "Community Partners", role: "Neighbours, collaborators, friends", img: mangroveImg },
];

const VALUES = [
  { title: "Creative but grounded", body: "Bold ideas held by daily rituals and place." },
  { title: "Elegant but welcoming", body: "Refined spaces that remain open and generous." },
  { title: "Experimental but accessible", body: "Risk-taking work that invites the public in." },
  { title: "Local and international", body: "Deeply rooted in Kilifi, in conversation with the world." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="An artist-led house on Kilifi Creek."
        description="The Terrace was founded as an independent platform for art, community and exchange — created by artists, for artists, in the heart of coastal Kenya."
        image={mangroveImg}
      />

      <section className="container-editorial py-24 md:py-36 grid md:grid-cols-12 gap-12">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">Our story</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
            Built slowly, by hand, on the creek.
          </h2>
        </Reveal>
        <Reveal delay={150} className="md:col-span-6 md:col-start-7 space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>
            The Terrace began as a question: what could an arts space look like if it
            was shaped entirely by the people making the work? The answer became a
            small ecosystem — an art space, a residency, an exchange — held together
            by the rhythms of Kilifi Creek.
          </p>
          <p>
            We are independent and artist-led. We commission, host, exhibit, and
            collaborate. We move at the pace of the tide.
          </p>
        </Reveal>
      </section>

      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow">Values</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] max-w-2xl text-balance">
              Four tensions we hold with care.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2 border border-border">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100} className="bg-background p-10">
                <h3 className="font-serif text-2xl">{v.title}</h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-editorial py-24 md:py-32">
        <Reveal>
          <p className="eyebrow">The team</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] max-w-2xl text-balance">
            People who hold the space.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {TEAM.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                <img src={t.img} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-6 font-serif text-2xl">{t.name}</h3>
              <p className="mt-2 text-foreground/65 text-sm">{t.role}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
