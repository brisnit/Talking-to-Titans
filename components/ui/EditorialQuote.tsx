import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function EditorialQuote({
  quote,
  cite,
  role,
  theme = "dark",
  className,
}: {
  quote: React.ReactNode;
  cite?: string;
  role?: string;
  theme?: "dark" | "light";
  className?: string;
}) {
  return (
    <Reveal>
      <figure className={cn("max-w-4xl", className)}>
        <span
          className={cn(
            "block font-serif text-7xl leading-none",
            theme === "dark" ? "text-gold/40" : "text-gold/60"
          )}
          aria-hidden
        >
          &ldquo;
        </span>
        <blockquote
          className={cn(
            "-mt-6 font-serif text-2xl leading-snug md:text-4xl",
            theme === "dark" ? "text-ink" : "text-cream"
          )}
        >
          {quote}
        </blockquote>
        {(cite || role) && (
          <figcaption
            className={cn(
              "mt-8 flex items-center gap-3 text-sm",
              theme === "dark" ? "text-stone" : "text-cream/70"
            )}
          >
            <span className="h-px w-8 bg-gold" />
            {cite && <span className="font-medium text-current">{cite}</span>}
            {role && <span>{role}</span>}
          </figcaption>
        )}
      </figure>
    </Reveal>
  );
}
