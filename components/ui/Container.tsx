import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  size = "default",
}: {
  className?: string;
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-10",
        size === "default" && "max-w-8xl",
        size === "narrow" && "max-w-4xl",
        size === "wide" && "max-w-[1600px]",
        className
      )}
    >
      {children}
    </div>
  );
}
