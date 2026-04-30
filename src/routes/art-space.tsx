import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import artImg from "@/assets/art-space.webp";
import collabImg from "@/assets/art-space-interior.webp";

export const Route = createFileRoute("/art-space")({
  head: () => ({
    meta: [
      { title: "The Art Space — The Terrace Kilifi" },
      {
        name: "description",
        content:
          "Exhibitions, performances, screenings, workshops and talks. A vibrant cultural platform on Kilifi Creek.",
      },
      { property: "og:title", content: "The Art Space — The Terrace Kilifi" },
      { property: "og:image", content: artImg },
    ],
  }),
  component: ArtSpacePage,
});

const PROGRAMS = [
  { title: "Exhibitions", body: "Solo and group shows, curated with care, that travel between local rootedness and international dialogue." },
  { title: "Performances", body: "Music, dance, and live art that breathe with the rhythms of the coast." },
  { title: "Screenings", body: "Independent cinema, artist film, and documentary nights under open skies." },
  { title: "Workshops", body: "Hands-on sessions in craft, sound, writing and image-making, led by practising artists." },
  { title: "Talks", body: "Conversations between artists, curators and communities — slow, generous, public." },
  { title: "Collaborations", body: "Long-form partnerships with collectives, institutions and neighbours along the creek." },
];

function ArtSpacePage() {
  return (
    <>
      <PageHero
        eyebrow="The Art Space"
        title="A platform that connects, inspires, and amplifies."
        description="The Terrace Art Space is a vibrant cultural platform — a place where contemporary practice meets community life on Kilifi Creek."
        image={artImg}
      />

      <section className="container-editorial py-24 md:py-36 grid md:grid-cols-12 gap-12">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">Our approach</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
            A space shaped by the people who use it.
          </h2>
        </Reveal>
        <Reveal delay={150} className="md:col-span-6 md:col-start-7 space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>
            The Art Space is open, modular, and artist-driven. We host exhibitions and live
            programmes that prioritise depth over spectacle, and that hold room for the
            voices of the coast alongside artists from across the world.
          </p>
          <p>
            Whether you're attending a screening, joining a workshop, or proposing a project,
            you become part of a creative community that values experiment, conversation
            and care.
          </p>
        </Reveal>
      </section>

      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow">Programmes</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] max-w-2xl text-balance">
              Six ways to gather, see and make.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border">
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="bg-background p-10">
                <h3 className="font-serif text-2xl">{p.title}</h3>
                <p className="mt-4 text-foreground/70 leading-relaxed">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-editorial py-28 md:py-36 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <Reveal className="md:col-span-6">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img src={collabImg} alt="Artists in collaborative conversation at The Terrace" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={150} className="md:col-span-6">
          <p className="eyebrow">Propose a project</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
            Bring your work to the creek.
          </h2>
          <p className="mt-6 text-foreground/80 leading-relaxed text-lg">
            We welcome proposals from artists, curators, collectives, and partners.
            Tell us what you'd like to make and how the Art Space can support it.
          </p>
          <a
            href="/contact"
            className="mt-9 inline-flex items-center rounded-full bg-foreground px-7 py-4 text-xs uppercase tracking-[0.22em] text-background hover:bg-primary transition-colors duration-500"
          >
            Submit a proposal
          </a>
        </Reveal>
      </section>
    </>
  );
}
