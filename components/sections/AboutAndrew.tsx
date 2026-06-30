import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ANDREW_STATS } from "@/lib/content";
import { IMAGES } from "@/lib/images";

export function AboutAndrew() {
  return (
    <section id="andrew" className="bg-cream-deep py-24 md:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <Media
                src={IMAGES.andrew}
                alt="Andrew Hartman, founder of Talking to Titans"
                ratio="portrait"
                className="shadow-editorial"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <span className="eyebrow mb-6">About Andrew</span>
            <h2 className="font-serif text-display-md text-ink md:text-display-lg">
              Andrew Hartman
            </h2>
            <p className="mt-4 text-lg text-gold-deep">
              Founder, Talking to Titans · Pastor of Advancement, Wellspring Church
            </p>

            <p className="mt-8 max-w-prose text-lg leading-relaxed text-charcoal">
              Andrew has spent more than three decades helping pastors pastor
              business leaders well. His ministry has spanned 70 countries and all
              50 states — including years with Life.Church and leadership through
              more than seventy church mergers.
            </p>

            <RevealGroup className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-4">
              {ANDREW_STATS.map((stat) => (
                <RevealItem key={stat.label}>
                  <div className="bg-cream-deep p-6">
                    <p className="font-serif text-4xl text-ink md:text-5xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-widest text-stone">
                      {stat.label}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>

            <blockquote className="mt-12 border-l-2 border-gold pl-6">
              <p className="font-serif text-2xl leading-snug text-ink">
                &ldquo;My mission is simple: helping pastors pastor business
                leaders well.&rdquo;
              </p>
            </blockquote>

            <div className="mt-10">
              <Button href="/about" variant="secondary">
                Read the full story
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
