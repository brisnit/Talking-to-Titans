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
  // theme="dark"  → placed on light backgrounds → black-wordmark logo
  // theme="light" → placed on dark backgrounds  → white-wordmark logo
  const logo =
    theme === "light"
      ? { src: "/brand/logo-dark-bg.png", width: 802, height: 262 }
      : { src: "/brand/logo-light-bg.png", width: 946, height: 262 };

  return (
    <Link
      href="/"
      aria-label="Talking to Titans — home"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src={logo.src}
        alt="Talking to Titans"
        width={logo.width}
        height={logo.height}
        priority
        className="h-14 w-auto md:h-16"
      />
    </Link>
  );
}
