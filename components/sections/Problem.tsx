import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { IMAGES } from "@/lib/images";

const SUNDAY = ["Worship", "Church", "Family", "Rest"];
const MONDAY = [
  "Hundreds of employees",
  "Millions of dollars",
  "High-stakes decisions",
  "Pressure & isolation",
];

export function Problem() {
  return (
    <section className="bg-cream py-24 md:py-36">
      <Container>
        <SectionHeader
          eyebrow="The Problem"
          title="Business leaders often live in two different worlds."
          intro="Most churches disciple people well. Few have a practical strategy for discipling the people carrying extraordinary influence."
        />

        <div className="mt-16 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:mt-20 md:grid-cols-2">
          {/* Sunday */}
          <div className="bg-cream-soft p-8 md:p-12">
            <div className="flex items-center justify-between">
              <span className="eyebrow">Sunday</span>
              <span className="font-serif text-5xl text-ink/10">07</span>
            </div>
            <Media
              src={IMAGES.worship}
              alt="A congregation in worship"
              ratio="landscape"
              className="mt-8"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <ul className="mt-8 space-y-4">
              {SUNDAY.map((item) => (
                <Reveal as="li" key={item} className="flex items-center gap-4 text-lg text-charcoal">
                  <span className="h-1.5 w-1.5 bg-gold" />
                  {item}
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Monday */}
          <div className="grain bg-ink p-8 text-cream md:p-12">
            <div className="flex items-center justify-between">
              <span className="eyebrow text-gold-light before:bg-gold-light/60">Monday</span>
              <span className="font-serif text-5xl text-cream/10">08</span>
            </div>
            <Media
              src={IMAGES.boardroom}
              alt="An executive in a high-stakes boardroom"
              ratio="landscape"
              className="mt-8"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <ul className="mt-8 space-y-4">
              {MONDAY.map((item) => (
                <Reveal as="li" key={item} className="flex items-center gap-4 text-lg text-cream/85">
                  <span className="h-1.5 w-1.5 bg-gold-light" />
                  {item}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <Reveal className="mx-auto mt-16 max-w-3xl text-center">
          <p className="font-serif text-2xl leading-snug text-ink md:text-3xl">
            The weight they carry on Monday is rarely shepherded on Sunday.{" "}
            <span className="text-gold-deep">
              Talking to Titans exists to close that gap.
            </span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
