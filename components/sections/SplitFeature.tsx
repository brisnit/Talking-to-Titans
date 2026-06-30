import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/** Reusable editorial split: image one side, copy the other. */
export function SplitFeature({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  reverse,
  theme = "dark",
  list,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body: React.ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  theme?: "dark" | "light";
  list?: string[];
}) {
  const light = theme === "light";
  return (
    <section className={cn(light ? "grain bg-ink text-cream" : "bg-cream", "py-20 md:py-28")}>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className={cn(reverse ? "lg:order-2" : "lg:order-1")}>
            <Media
              src={image}
              alt={imageAlt}
              ratio="landscape"
              className={light ? "" : "shadow-editorial"}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
          <div className={cn(reverse ? "lg:order-1" : "lg:order-2")}>
            <span className={cn("eyebrow mb-6", light && "text-gold-light before:bg-gold-light/60")}>
              {eyebrow}
            </span>
            <h2 className={cn("font-serif text-display-md", light ? "text-cream" : "text-ink")}>
              {title}
            </h2>
            <div className={cn("mt-6 max-w-prose text-lg leading-relaxed", light ? "text-cream/70" : "text-charcoal")}>
              {body}
            </div>
            {list && (
              <ul className="mt-8 grid grid-cols-2 gap-3">
                {list.map((l) => (
                  <li
                    key={l}
                    className={cn(
                      "flex items-center gap-3 text-sm",
                      light ? "text-cream/80" : "text-charcoal"
                    )}
                  >
                    <span className="h-1.5 w-1.5 bg-gold" />
                    {l}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
