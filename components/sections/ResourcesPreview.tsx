import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ResourceCard } from "@/components/ui/ResourceCard";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { RESOURCES } from "@/lib/content";

export function ResourcesPreview() {
  return (
    <section className="bg-cream py-24 md:py-36">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="A Growing Content Platform"
            title="Resources for pastors and the leaders they shepherd."
            className="max-w-2xl"
          />
          <Button href="/resources" variant="secondary" className="shrink-0">
            Browse all resources
          </Button>
        </div>

        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.slice(0, 6).map((r) => (
            <RevealItem key={r.title}>
              <ResourceCard {...r} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
