import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { useState } from "react";
import { z } from "zod";
import { MapPin, Mail, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-creek.jpg";
import { SITE, mapEmbedSrc, mapDirectionsUrl } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Terrace Kilifi" },
      {
        name: "description",
        content:
          "Visit The Terrace Kilifi on Bandari Road, Mnarani, Kilifi, Kenya. Apply for a residency, propose a project, or send us a message.",
      },
      { property: "og:title", content: "Contact — The Terrace Kilifi" },
      {
        property: "og:description",
        content:
          "Get in touch with The Terrace Kilifi — artist-led arts space and residency on Kilifi Creek, Kenya.",
      },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: SITE.name,
          email: SITE.email,
          url: SITE.url,
          address: {
            "@type": "PostalAddress",
            streetAddress: SITE.address.street,
            addressLocality: SITE.address.locality,
            addressCountry: SITE.address.country,
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: SITE.geo.lat,
            longitude: SITE.geo.lng,
          },
          sameAs: [SITE.social.instagram, SITE.social.facebook],
        }),
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  firstName: z.string().trim().min(1, "Please enter your first name").max(80),
  lastName: z.string().trim().min(1, "Please enter your last name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(1, "Please add a subject").max(120),
  message: z.string().trim().min(10, "Tell us a little more").max(2000),
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const result = schema.safeParse({
      firstName: form.get("firstName"),
      lastName: form.get("lastName"),
      email: form.get("email"),
      subject: form.get("subject"),
      message: form.get("message"),
    });
    if (!result.success) {
      setStatus("error");
      setError(result.error.issues[0]?.message ?? "Please review the form.");
      return;
    }
    setStatus("ok");
    setError(null);
    e.currentTarget.reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's begin a conversation."
        description="Whether it's a residency, a proposal, or a question — we read every message."
        image={heroImg}
      />

      <section className="container-editorial py-24 md:py-32 grid md:grid-cols-12 gap-12 md:gap-20">
        <Reveal className="md:col-span-5 space-y-10">
          <div>
            <p className="eyebrow">Visit</p>
            <a
              href={mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-start gap-3 group"
            >
              <MapPin size={20} className="mt-1 text-primary shrink-0 group-hover:scale-110 transition-transform" />
              <span className="font-serif text-2xl leading-snug group-hover:text-primary transition-colors">
                {SITE.address.street}<br />{SITE.address.locality}, {SITE.address.country}
              </span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground italic max-w-sm">
              {SITE.address.note}
            </p>
          </div>

          <div className="space-y-4">
            <p className="eyebrow">Reach us</p>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-3 link-underline w-fit text-foreground/80 hover:text-foreground transition-colors"
            >
              <Mail size={16} className="text-primary" /> {SITE.email}
            </a>

            <div className="flex gap-3 pt-2">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on Instagram"
                className="p-3 rounded-full border border-border hover:bg-foreground hover:text-background hover:-translate-y-0.5 transition-all duration-300"
              >
                <Instagram size={16} />
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on Facebook"
                className="p-3 rounded-full border border-border hover:bg-foreground hover:text-background hover:-translate-y-0.5 transition-all duration-300"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="eyebrow">For</p>
            <ul className="mt-4 space-y-2 text-foreground/80">
              <li>— Residency applications</li>
              <li>— Exhibition & programme proposals</li>
              <li>— Press & partnerships</li>
              <li>— Visits and general enquiries</li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={150} className="md:col-span-7">
          <form onSubmit={onSubmit} className="space-y-6" noValidate>
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="First name" name="firstName" required />
              <Field label="Last name" name="lastName" required />
            </div>
            <Field label="Email" name="email" type="email" required />
            <Field label="Subject" name="subject" required placeholder="Residency · Proposal · Visit" />
            <div>
              <label className="eyebrow block mb-3" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                maxLength={2000}
                className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-foreground placeholder:text-muted-foreground transition-colors resize-none"
                placeholder="Tell us about your practice, your idea, or your question."
              />
            </div>

            {status === "error" && error && (
              <p className="text-sm text-destructive">{error}</p>
            )}
            {status === "ok" && (
              <p className="text-sm text-mangrove">Thank you — we'll be in touch soon.</p>
            )}

            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-xs uppercase tracking-[0.22em] text-background hover:bg-primary transition-all duration-500 hover:-translate-y-0.5"
            >
              Send message
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </form>
        </Reveal>
      </section>

      {/* Map */}
      <section className="container-editorial pb-24 md:pb-32">
        <Reveal className="space-y-6">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="eyebrow">Find us</p>
              <h2 className="font-serif text-3xl md:text-4xl mt-2">On Kilifi Creek</h2>
            </div>
            <a
              href={mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm link-underline text-foreground/80 hover:text-foreground"
            >
              Get directions <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-elegant aspect-[16/10] md:aspect-[21/9] bg-muted">
            <iframe
              title="The Terrace Kilifi location map"
              src={mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="eyebrow block mb-3" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={255}
        className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-foreground placeholder:text-muted-foreground transition-colors"
      />
    </div>
  );
}
