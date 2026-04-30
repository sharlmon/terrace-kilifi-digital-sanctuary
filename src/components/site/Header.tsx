import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Instagram, Facebook, Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/art-space", label: "Art Space" },
  { to: "/residency", label: "Residency" },
  { to: "/exchange", label: "Exchange" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-editorial flex items-center justify-between">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-serif text-2xl tracking-tight text-foreground">
            The Terrace
          </span>
          <span className="eyebrow hidden sm:inline">Kilifi</span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="link-underline text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-background hover:bg-primary transition-colors duration-500"
        >
          Apply
        </Link>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <div className="container-editorial py-8 flex flex-col gap-5">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-serif text-2xl text-foreground"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-4 pt-6 border-t border-border/60 space-y-3 text-sm text-foreground/75">
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 hover:text-foreground transition-colors">
                <Mail size={15} className="text-primary" /> {SITE.email}
              </a>
              <p className="flex items-start gap-3">
                <MapPin size={15} className="text-primary mt-0.5 shrink-0" />
                <span>{SITE.address.street}, {SITE.address.locality}</span>
              </p>
              <div className="flex gap-3 pt-2">
                <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  className="p-2.5 rounded-full border border-border hover:bg-foreground hover:text-background transition-all">
                  <Instagram size={15} />
                </a>
                <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                  className="p-2.5 rounded-full border border-border hover:bg-foreground hover:text-background transition-all">
                  <Facebook size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
