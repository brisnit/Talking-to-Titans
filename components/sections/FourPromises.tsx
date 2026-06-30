import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { PROMISES } from "@/lib/content";

export function FourPromises() {
  return (
    <section className="grain bg-charcoal py-24 text-cream md:py-36">
      <Container>
        <SectionHeader
          theme="light"
          eyebrow="Four Promises"
          title="What we promise pastors."
          intro={
            <span className="text-cream/70">
              We come alongside your ministry — never in place of it. Here is what
              your leaders, and your church, can expect.
            </span>
          }
        />

        <RevealGroup className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2">
          {PROMISES.map((p) => (
            <RevealItem key={p.n}>
              <article className="group flex h-full flex-col border border-cream/15 bg-ink/40 p-8 transition-colors duration-500 ease-editorial hover:border-gold/50 md:p-10">
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-5xl text-cream/15 transition-colors duration-500 group-hover:text-gold/60">
                    {p.n}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl leading-snug text-cream md:text-[1.7rem]">
                  {p.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-cream/70">
                  {p.body}
                </p>
                {p.list && (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.list.map((l) => (
                      <li
                        key={l}
                        className="border border-cream/15 px-3 py-1.5 text-xs uppercase tracking-wide text-cream/60"
                      >
                        {l}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
