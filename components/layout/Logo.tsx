import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  theme = "dark",
  className,
}: {
  theme?: "dark" | "light";
  className?: string;
}) {
  // theme="dark"  → placed on light/cream backgrounds → use the light-background logo
  // theme="light" → placed on dark/ink backgrounds   → use the dark-background logo
  const src =
    theme === "light"
      ? "/brand/logo-dark-bg.png"
      : "/brand/logo-light-bg.png";

  return (
    <Link
      href="/"
      aria-label="Talking to Titans — home"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src={src}
        alt="Talking to Titans"
        width={604}
        height={262}
        priority
        className="h-[52px] w-auto md:h-[62px]"
      />
    </Link>
  );
}
