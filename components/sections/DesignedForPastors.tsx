import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { EditorialQuote } from "@/components/ui/EditorialQuote";
import { IMAGES } from "@/lib/images";

const OUTCOMES = [
  "More committed to Christ",
  "More committed to family",
  "More committed to generosity",
  "More committed to your church",
];

export function DesignedForPastors() {
  return (
    <section className="bg-cream py-24 md:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <span className="eyebrow mb-6">Designed for Pastors</span>
            <h2 className="font-serif text-display-md text-ink md:text-display-lg">
              This is a gift you give your leaders.
            </h2>
            <p className="mt-8 max-w-prose text-lg leading-relaxed text-charcoal">
              Imagine telling your business owners:
            </p>

            <EditorialQuote
              quote="I have a place where you'll be challenged spiritually, encouraged personally, sharpened professionally, and surrounded by other leaders who love Jesus."
              className="my-10"
            />

            <p className="max-w-prose text-lg leading-relaxed text-charcoal">
              The Kingdom Leadership Collective is not something pastors join. It is
              a gift pastors give to the business leaders God has entrusted to them.
            </p>
          </div>

          <div className="lg:col-span-6">
            <Reveal>
              <Media
                src={IMAGES.shepherd}
                alt="A shepherd at first light"
                ratio="landscape"
                className="shadow-editorial"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Reveal>

            <div className="mt-10 border-t border-ink/10 pt-10">
              <p className="text-sm uppercase tracking-widest text-stone">
                Members return
              </p>
              <ul className="mt-6 divide-y divide-ink/10">
                {OUTCOMES.map((o, i) => (
                  <Reveal as="li" key={o} delay={i * 0.06} className="flex items-baseline gap-6 py-4">
                    <span className="font-serif text-xl text-gold-deep">
                      0{i + 1}
                    </span>
                    <span className="font-serif text-2xl text-ink">{o}</span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
