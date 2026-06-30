import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { BELIEFS } from "@/lib/content";

export function CoreBeliefs() {
  return (
    <section id="beliefs" className="grain bg-ink py-24 text-cream md:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow text-gold-light before:bg-gold-light/60">
                Core Beliefs
              </span>
              <h2 className="mt-6 font-serif text-display-md text-cream">
                The convictions beneath everything we do.
              </h2>
            </div>
          </div>

          <div className="lg:col-span-8">
            <RevealGroup className="divide-y divide-cream/15 border-t border-cream/15">
              {BELIEFS.map((belief, i) => (
                <RevealItem key={belief}>
                  <div className="group flex items-baseline gap-8 py-8">
                    <span className="font-serif text-xl text-gold-light/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-serif text-2xl leading-snug text-cream transition-colors group-hover:text-gold-light md:text-4xl">
                      {belief}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Container>
    </section>
  );
}
