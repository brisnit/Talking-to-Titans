import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { IMAGES } from "@/lib/images";

const NEEDS = [
  "They don't need to be admired from a distance.",
  "They need to be discipled.",
  "They need brotherhood.",
  "They need spiritual formation.",
  "They need pastors.",
];

export function Closing() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 text-cream md:py-40">
      <Image
        src={IMAGES.closing}
        alt="Light breaking over a gathering of leaders"
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="eyebrow justify-center text-gold-light before:bg-gold-light/60">
              The Conversation That Changes Everything
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-8 font-serif text-display-lg text-cream md:text-display-xl">
              They don&rsquo;t need to be admired. They need to be discipled.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream/70">
              Every church has men and women quietly carrying extraordinary
              influence. They build companies. They create jobs. They steward
              remarkable resources.
            </p>
          </Reveal>

          <ul className="mx-auto mt-12 max-w-xl space-y-3">
            {NEEDS.map((need, i) => (
              <Reveal as="li" key={need} delay={i * 0.07}>
                <p className="font-serif text-2xl text-cream/90 md:text-3xl">
                  {need}
                </p>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-14 max-w-2xl text-lg leading-relaxed text-cream/70">
              When pastors and marketplace leaders walk together, churches become
              stronger, communities flourish, and the Gospel advances. What begins
              as Talking to Titans ultimately becomes something much larger.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-10 font-serif text-4xl text-gold-light md:text-5xl">
              Building Kingdom Builders.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href="/kingdom-leadership-collective#join"
                variant="primary"
                className="bg-cream text-ink hover:bg-gold"
              >
                Become a Founding Member
              </Button>
              <Button href="/refer" variant="light">
                Refer a Business Leader
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
