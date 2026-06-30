import { cn } from "@/lib/utils";

const inputBase =
  "w-full border-b border-ink/20 bg-transparent py-3 text-base text-ink outline-none transition-colors placeholder:text-stone/50 focus:border-gold";

export function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="text-xs uppercase tracking-widest text-stone">
        {label}
        {required && <span className="text-gold-deep"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className={cn(inputBase, "mt-2")}
      />
    </label>
  );
}

export function TextArea({
  label,
  name,
  required,
  placeholder,
  rows = 4,
  className,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="text-xs uppercase tracking-widest text-stone">
        {label}
        {required && <span className="text-gold-deep"> *</span>}
      </span>
      <textarea
        name={name}
        required={required}
        rows={rows}
        placeholder={placeholder}
        className={cn(inputBase, "mt-2 resize-none")}
      />
    </label>
  );
}
