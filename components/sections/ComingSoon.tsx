import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";
import { Button } from "@/components/ui/Button";

export function ComingSoon({
  eyebrow,
  title,
  body,
  image,
  highlights,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body: React.ReactNode;
  image: string;
  highlights?: string[];
}) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink text-cream">
      <Image
        src={image}
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />

      <Container className="relative z-10 py-32">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="eyebrow text-gold-light before:bg-gold-light/60">
              {eyebrow}
            </span>
            <Badge tone="gold">Coming Soon</Badge>
          </div>
          <h1 className="mt-6 font-serif text-display-lg text-cream md:text-display-xl">
            {title}
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-cream/75">{body}</p>

          {highlights && (
            <ul className="mt-10 flex flex-wrap gap-3">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="border border-cream/20 px-4 py-2 text-sm text-cream/80"
                >
                  {h}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-12 max-w-md">
            <p className="text-sm uppercase tracking-widest text-cream/50">
              Be the first to know
            </p>
            <NewsletterSignup theme="light" className="mt-4" />
          </div>

          <div className="mt-12">
            <Button href="/kingdom-leadership-collective" variant="light">
              Explore the Collective in the meantime
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
