import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { APP_FEATURES } from "@/lib/content";

export function MobileAppPreview() {
  return (
    <section id="app" className="grain bg-ink py-24 text-cream md:py-36">
      <Container>
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <span className="eyebrow text-gold-light before:bg-gold-light/60">
              The Mobile App
            </span>
            <Badge tone="gold">Coming Soon</Badge>
          </div>

          {/* Real text retained for accessibility & SEO — the poster image below
              carries the same headline, intro, and feature set visually. */}
          <h2 className="sr-only">Daily leadership rhythms, in your pocket.</h2>
          <p className="sr-only">
            Formation delivered daily — small deposits that compound into a
            lifetime of impact. The Collective lives between the summit and the
            roundtable, every single day. Features include:{" "}
            {APP_FEATURES.join(", ")}.
          </p>
        </div>

        <Reveal className="mt-12">
          <div className="relative mx-auto max-w-2xl">
            <div className="absolute -inset-8 bg-gold/10 blur-3xl" aria-hidden />
            <Image
              src="/brand/badges.png"
              alt="The Talking to Titans mobile app: daily leadership rhythms in your pocket — featuring daily rhythms, Bible reading and study Bible, leadership resources, events, community, courses, prayer, media library, live Bible studies, and reading plans."
              width={1024}
              height={1536}
              sizes="(max-width: 768px) 100vw, 672px"
              className="relative h-auto w-full border border-cream/10 shadow-lift"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
