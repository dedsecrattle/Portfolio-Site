import { ArrowSquareOutIcon } from "@phosphor-icons/react/ssr";
import { SectionHeading } from "@/components/sections/heading";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading n="04" title="Experience" color="bg-nb-pink" />
      <ol className="relative ml-2 border-l-[3px] border-ink pl-8 sm:ml-4">
        {experience.map((e, i) => (
          <li key={`${e.org}-${e.role}`} className="relative mb-10 last:mb-0">
            <span
              className={`absolute -left-[calc(2rem+9px)] top-1 size-4 border-2 border-ink ${i === 0 ? "bg-nb-pink" : "bg-card"}`}
              aria-hidden
            />
            <div className="border-2 border-ink bg-card shadow-nb">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-ink bg-muted px-4 py-2">
                <h3 className="flex flex-wrap items-center gap-x-2 gap-y-1 font-bold">
                  <span>{e.role}</span>
                  <span className="text-muted-foreground">@</span>
                  {e.url ? (
                    <a
                      href={e.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 underline decoration-2 underline-offset-4 hover:bg-nb-pink hover:text-on-accent"
                    >
                      {e.org}
                      <ArrowSquareOutIcon weight="bold" className="size-3.5" />
                    </a>
                  ) : (
                    <span>{e.org}</span>
                  )}
                  {e.badge && <Badge variant="orange">{e.badge}</Badge>}
                </h3>
                <span className="font-mono text-xs font-bold uppercase tracking-wide">{e.period}</span>
              </div>
              <ul className="space-y-2 px-4 py-4 text-sm leading-relaxed">
                {e.points.map((pt, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="mt-[7px] size-2 shrink-0 bg-ink" aria-hidden />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
