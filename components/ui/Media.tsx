import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Editorial image frame. Rectangular, refined shadow, optional slow zoom on view.
 */
export function Media({
  src,
  alt,
  className,
  imgClassName,
  priority,
  sizes = "100vw",
  overlay = false,
  ratio,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  overlay?: boolean;
  ratio?: "portrait" | "landscape" | "square" | "wide" | "tall";
}) {
  const ratioClass =
    ratio === "portrait"
      ? "aspect-[3/4]"
      : ratio === "landscape"
      ? "aspect-[4/3]"
      : ratio === "square"
      ? "aspect-square"
      : ratio === "wide"
      ? "aspect-[16/9]"
      : ratio === "tall"
      ? "aspect-[2/3]"
      : "";

  return (
    <div className={cn("relative overflow-hidden bg-charcoal", ratioClass, className)}>
      <Image
        src={src}
        alt={alt}
        fill={!!ratioClass}
        width={ratioClass ? undefined : 1600}
        height={ratioClass ? undefined : 1067}
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", imgClassName)}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
      )}
    </div>
  );
}
