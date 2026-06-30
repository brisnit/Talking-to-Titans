import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Media } from "@/components/ui/Media";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { MEMBERSHIP } from "@/lib/content";

export function MembersReceive() {
  return (
    <section id="membership" className="bg-cream py-24 md:py-36">
      <Container>
        <SectionHeader
          eyebrow="What Members Receive"
          title="A rhythm of formation — annual, monthly, daily."
          intro="Transformation is not an event. It is a cadence. Small deposits, made faithfully, that compound into a lifetime of impact."
        />

        <div className="mt-16 md:mt-24">
          <RevealGroup className="space-y-px border-y border-ink/10">
            {MEMBERSHIP.map((m, i) => (
              <RevealItem key={m.title}>
                <article className="group grid items-center gap-8 py-10 md:grid-cols-12 md:gap-12">
                  <div className="md:col-span-1">
                    <span className="font-serif text-3xl text-gold-deep">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="md:col-span-2">
                    <span className="inline-block bg-ink px-3 py-1 text-xs uppercase tracking-widest text-cream">
                      {m.when}
                    </span>
                  </div>
                  <div className="md:col-span-5">
                    <h3 className="font-serif text-3xl text-ink md:text-4xl">
                      {m.title}
                    </h3>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-stone">
                      {m.body}
                    </p>
                  </div>
                  <div className="md:col-span-4">
                    <Media
                      src={m.image}
                      alt={m.title}
                      ratio="landscape"
                      className="transition-transform duration-700 ease-editorial group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
