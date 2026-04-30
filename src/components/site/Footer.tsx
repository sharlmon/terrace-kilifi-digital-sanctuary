import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";
import { SITE, mapDirectionsUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative bg-charcoal text-ivory mt-32">
      <div className="container-editorial py-20 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5 space-y-6">
          <div>
            <p className="eyebrow text-ivory/60">Kilifi · Kenya</p>
            <h3 className="font-serif text-4xl mt-3 leading-[1.05]">
              An artist-led sanctuary on the East African coast.
            </h3>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex max-w-md border-b border-ivory/30 focus-within:border-ivory transition-colors"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              aria-label="Email address"
              className="flex-1 bg-transparent py-3 text-sm placeholder:text-ivory/50 outline-none"
            />
            <button
              type="submit"
              className="text-xs uppercase tracking-[0.22em] py-3 hover:text-clay transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="md:col-span-3 space-y-4 text-sm">
          <p className="eyebrow text-ivory/60">Explore</p>
          <ul className="space-y-3">
            <li><Link to="/art-space" className="link-underline">Art Space</Link></li>
            <li><Link to="/residency" className="link-underline">Residency</Link></li>
            <li><Link to="/exchange" className="link-underline">Artists' Exchange</Link></li>
            <li><Link to="/about" className="link-underline">About</Link></li>
            <li><Link to="/contact" className="link-underline">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4 space-y-5 text-sm">
          <p className="eyebrow text-ivory/60">Visit & Connect</p>
          <a
            href={mapDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 text-ivory/80 hover:text-ivory transition-colors group"
          >
            <MapPin size={16} className="mt-1 shrink-0 text-clay group-hover:scale-110 transition-transform" />
            <span className="leading-relaxed">
              {SITE.address.street}<br />
              {SITE.address.locality}, {SITE.address.country}
            </span>
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-3 text-ivory/80 hover:text-ivory transition-colors group"
          >
            <Mail size={16} className="text-clay group-hover:scale-110 transition-transform" />
            {SITE.email}
          </a>
          <div className="flex gap-3 pt-2">
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow The Terrace Kilifi on Instagram"
              className="p-2.5 rounded-full border border-ivory/20 hover:bg-ivory hover:text-charcoal hover:-translate-y-0.5 hover:border-ivory transition-all duration-300"
            >
              <Instagram size={16} />
            </a>
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow The Terrace Kilifi on Facebook"
              className="p-2.5 rounded-full border border-ivory/20 hover:bg-ivory hover:text-charcoal hover:-translate-y-0.5 hover:border-ivory transition-all duration-300"
            >
              <Facebook size={16} />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              aria-label="Email The Terrace Kilifi"
              className="p-2.5 rounded-full border border-ivory/20 hover:bg-ivory hover:text-charcoal hover:-translate-y-0.5 hover:border-ivory transition-all duration-300"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-editorial py-6 flex flex-col sm:flex-row gap-3 justify-between text-xs text-ivory/50">
          <p>© 2026 The Terrace Kilifi. All rights reserved.</p>
          <p>Independent · Artist-led · Coastal Kenya</p>
        </div>
      </div>
    </footer>
  );
}
