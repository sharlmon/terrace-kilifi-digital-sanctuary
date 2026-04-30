interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}

export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover ken-burns"
      />
      <div className="absolute inset-0 bg-[var(--gradient-dusk)]" />
      <div className="absolute inset-0 bg-charcoal/30" />
      <div className="relative z-10 container-editorial h-full flex flex-col justify-end pb-20 md:pb-28 text-ivory">
        <p className="eyebrow text-ivory/70 reveal">{eyebrow}</p>
        <h1 className="reveal reveal-delay-1 mt-5 font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.98] max-w-4xl text-balance">
          {title}
        </h1>
        <p className="reveal reveal-delay-2 mt-7 max-w-xl text-base md:text-lg text-ivory/85 leading-relaxed text-pretty">
          {description}
        </p>
      </div>
    </section>
  );
}
