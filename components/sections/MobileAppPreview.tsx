import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { APP_FEATURES } from "@/lib/content";
import { IMAGES } from "@/lib/images";

export function MobileAppPreview() {
  return (
    <section id="app" className="grain bg-ink py-24 text-cream md:py-36">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="flex items-center gap-3">
              <span className="eyebrow text-gold-light before:bg-gold-light/60">
                The Mobile App
              </span>
              <Badge tone="gold">Coming Soon</Badge>
            </div>
            <h2 className="mt-6 font-serif text-display-md text-cream md:text-display-lg">
              Daily leadership rhythms, in your pocket.
            </h2>
            <p className="mt-8 max-w-prose text-lg leading-relaxed text-cream/70">
              Formation delivered daily — small deposits that compound into a
              lifetime of impact. The Collective lives between the summit and the
              roundtable, every single day.
            </p>

            <RevealGroup className="mt-12 grid grid-cols-2 gap-x-8 gap-y-4">
              {APP_FEATURES.map((f) => (
                <RevealItem key={f}>
                  <div className="flex items-center gap-3 border-b border-cream/10 pb-3 text-sm text-cream/80">
                    <span className="h-1.5 w-1.5 shrink-0 bg-gold-light" />
                    {f}
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <Reveal>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-6 bg-gold/10 blur-2xl" aria-hidden />
              <Media
                src={IMAGES.phone}
                alt="The Talking to Titans mobile app"
                ratio="tall"
                className="relative border border-cream/10 shadow-lift"
                sizes="(max-width: 1024px) 80vw, 30vw"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
