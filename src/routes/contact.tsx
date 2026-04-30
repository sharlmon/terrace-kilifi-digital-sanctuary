import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { useState } from "react";
import { z } from "zod";
import { MapPin, Mail, Instagram } from "lucide-react";
import heroImg from "@/assets/hero-creek.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Terrace Kilifi" },
      {
        name: "description",
        content:
          "Get in touch with The Terrace Kilifi. Apply for a residency, propose a project, or visit the creek.",
      },
      { property: "og:title", content: "Contact — The Terrace Kilifi" },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email").max(255),
  topic: z.string().trim().max(80).optional(),
  message: z.string().trim().min(10, "Tell us a little more").max(2000),
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const result = schema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      topic: form.get("topic"),
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
            <p className="mt-4 font-serif text-2xl leading-snug">
              Kilifi Creek<br />Kilifi County, Kenya
            </p>
          </div>

          <div className="space-y-5 text-foreground/80">
            <a href="mailto:hello@terracekilifi.com" className="flex items-center gap-3 link-underline w-fit">
              <Mail size={16} className="text-primary" /> hello@terracekilifi.com
            </a>
            <a href="#" className="flex items-center gap-3 link-underline w-fit">
              <Instagram size={16} className="text-primary" /> @terracekilifi
            </a>
            <p className="flex items-center gap-3">
              <MapPin size={16} className="text-primary" /> By appointment & open programmes
            </p>
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
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Topic (optional)" name="topic" placeholder="Residency · Proposal · Visit" />
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
              className="inline-flex items-center rounded-full bg-foreground px-8 py-4 text-xs uppercase tracking-[0.22em] text-background hover:bg-primary transition-colors duration-500"
            >
              Send message
            </button>
          </form>
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
