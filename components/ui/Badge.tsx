import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "gold" | "light" | "outline";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-widest",
        tone === "default" && "bg-ink/5 text-stone",
        tone === "gold" && "bg-gold/15 text-gold-deep",
        tone === "light" && "bg-cream/15 text-cream",
        tone === "outline" && "border border-current text-current",
        className
      )}
    >
      {children}
    </span>
  );
}
