import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  theme = "dark",
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  theme?: "dark" | "light";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="eyebrow mb-6">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "text-display-md md:text-display-lg",
            theme === "dark" ? "text-ink" : "text-cream",
            titleClassName
          )}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <div
            className={cn(
              "mt-6 text-lg leading-relaxed md:text-xl",
              theme === "dark" ? "text-stone" : "text-cream/70",
              align === "center" && "mx-auto"
            )}
          >
            {intro}
          </div>
        </Reveal>
      )}
    </div>
  );
}
