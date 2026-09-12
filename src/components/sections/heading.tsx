import { cn } from "@/lib/utils";

// Section header: numbered colour block + uppercase title + heavy rule.
export function SectionHeading({
  n,
  title,
  color = "bg-brand",
  className,
}: {
  n: string;
  title: string;
  color?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-10 flex items-center gap-4", className)}>
      <span
        className={cn(
          "flex size-11 shrink-0 items-center justify-center border-2 border-ink font-mono text-base font-bold text-on-accent shadow-nb",
          color,
        )}
      >
        {n}
      </span>
      <h2 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl">{title}</h2>
      <span className="h-[3px] flex-1 bg-ink" aria-hidden />
    </div>
  );
}
