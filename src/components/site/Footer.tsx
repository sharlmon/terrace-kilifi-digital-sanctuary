import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-charcoal text-ivory mt-32">
      <div className="container-editorial py-20 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5 space-y-6">
          <div>
            <p className="eyebrow text-ivory/60">Kilifi Creek · Kenya</p>
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

        <div className="md:col-span-4 space-y-4 text-sm">
          <p className="eyebrow text-ivory/60">Visit</p>
          <p className="text-ivory/80 leading-relaxed">
            The Terrace Kilifi<br />
            Kilifi Creek, Kilifi County<br />
            Kenya
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="p-2 rounded-full border border-ivory/20 hover:bg-ivory hover:text-charcoal transition-colors">
              <Instagram size={16} />
            </a>
            <a href="mailto:hello@terracekilifi.com" className="p-2 rounded-full border border-ivory/20 hover:bg-ivory hover:text-charcoal transition-colors">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-editorial py-6 flex flex-col sm:flex-row gap-3 justify-between text-xs text-ivory/50">
          <p>© {new Date().getFullYear()} The Terrace Kilifi. All rights reserved.</p>
          <p>Independent · Artist-led · Coastal Kenya</p>
        </div>
      </div>
    </footer>
  );
}
