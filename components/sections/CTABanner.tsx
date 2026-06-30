import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function CTABanner({
  eyebrow = "The Next Step",
  title,
  body,
  primary = { href: "/kingdom-leadership-collective#join", label: "Become a Founding Member" },
  secondary = { href: "/refer", label: "Refer a Leader" },
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="bg-cream py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="grain flex flex-col items-start justify-between gap-10 bg-ink p-10 text-cream md:flex-row md:items-center md:p-16">
            <div className="max-w-2xl">
              <span className="eyebrow text-gold-light before:bg-gold-light/60">
                {eyebrow}
              </span>
              <h2 className="mt-5 font-serif text-display-md text-cream">{title}</h2>
              {body && <p className="mt-4 text-cream/70">{body}</p>}
            </div>
            <div className="flex shrink-0 flex-col gap-4 sm:flex-row md:flex-col lg:flex-row">
              <Button href={primary.href} variant="primary" className="bg-cream text-ink hover:bg-gold">
                {primary.label}
              </Button>
              <Button href={secondary.href} variant="light">
                {secondary.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
