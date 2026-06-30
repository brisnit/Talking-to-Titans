import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FOOTER_NAV } from "@/lib/nav";
import { Container } from "@/components/ui/Container";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";

export function Footer() {
  return (
    <footer id="newsletter" className="grain bg-ink text-cream">
      <Container className="py-20 md:py-28">
        {/* Newsletter band */}
        <div className="grid gap-12 border-b border-cream/15 pb-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-[0.65rem] uppercase tracking-widest text-gold-light">
              The Conversation
            </p>
            <h2 className="mt-4 font-serif text-display-md text-cream">
              Stay close to the movement.
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-cream/70">
              Receive leadership writing, formation rhythms, and early access as
              the Kingdom Leadership Collective grows. For pastors and the leaders
              they shepherd.
            </p>
            <NewsletterSignup theme="light" className="mt-6 max-w-md" />
          </div>
        </div>

        {/* Link columns */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <p className="font-serif text-2xl text-cream">Talking to Titans</p>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Helping pastors disciple the leaders shaping tomorrow. We never
              replace the local church. We strengthen it.
            </p>
          </div>

          {Object.entries(FOOTER_NAV).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-[0.65rem] uppercase tracking-widest text-gold-light">
                {heading}
              </p>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/70 transition-colors hover:text-cream link-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA + legal */}
        <div className="flex flex-col gap-8 border-t border-cream/15 pt-10 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl font-serif text-xl text-cream/90">
            Every church has leaders quietly carrying extraordinary influence.{" "}
            <span className="text-gold-light">They need to be discipled.</span>
          </p>
          <Link
            href="/kingdom-leadership-collective#join"
            className="inline-flex items-center gap-2 bg-cream px-6 py-4 text-sm font-medium text-ink transition-colors duration-500 ease-editorial hover:bg-gold"
          >
            Become a Founding Member
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 flex flex-col gap-4 text-xs text-cream/40 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Talking to Titans. Building Kingdom
            Builders.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-cream">
              Contact
            </Link>
            <Link href="/about" className="hover:text-cream">
              About
            </Link>
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
