import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "light";

const base =
  "group inline-flex items-center justify-center gap-2.5 text-sm font-medium tracking-wide transition-all duration-500 ease-editorial px-7 py-4 select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-cream hover:bg-gold hover:text-ink",
  secondary:
    "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-cream",
  light:
    "border border-cream/30 text-cream hover:bg-cream hover:text-ink",
  ghost: "text-ink hover:text-gold px-0 py-0",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  withArrow = true,
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
  external?: boolean;
}) {
  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:translate-x-1" />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} className={cn(base, variants[variant], className)} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {content}
    </Link>
  );
}
