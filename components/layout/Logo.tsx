import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  theme = "dark",
  className,
}: {
  theme?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Talking to Titans — home"
      className={cn("group flex flex-col leading-none", className)}
    >
      <span
        className={cn(
          "font-serif text-lg tracking-tight md:text-xl",
          theme === "dark" ? "text-ink" : "text-cream"
        )}
      >
        Talking to Titans
      </span>
      <span
        className={cn(
          "mt-1 text-[0.6rem] font-medium uppercase tracking-[0.3em] transition-colors",
          theme === "dark" ? "text-gold" : "text-gold-light"
        )}
      >
        Building Kingdom Builders
      </span>
    </Link>
  );
}
