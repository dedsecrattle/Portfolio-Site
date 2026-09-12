import { ArrowSquareOutIcon, TrophyIcon } from "@phosphor-icons/react/ssr";
import { SectionHeading } from "@/components/sections/heading";
import { awards } from "@/lib/data";

const tints = ["bg-nb-orange", "bg-nb-yellow", "bg-brand", "bg-nb-blue", "bg-nb-pink", "bg-nb-purple"];

export function Awards() {
  return (
    <section id="awards" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading n="06" title="Awards & Achievements" color="bg-nb-orange" />
      <div className="divide-y-2 divide-ink border-2 border-ink bg-card shadow-nb">
        {awards.map((a, i) => (
          <div key={a.title} className="group flex items-start gap-4 p-4 sm:p-5">
            <span
              className={`flex size-10 shrink-0 items-center justify-center border-2 border-ink text-on-accent ${tints[i % tints.length]}`}
              aria-hidden
            >
              <TrophyIcon weight="bold" className="size-5" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
                <h3 className="font-bold leading-snug">
                  {a.url ? (
                    <a
                      href={a.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 underline decoration-2 underline-offset-4 hover:bg-nb-yellow hover:text-on-accent"
                    >
                      {a.title}
                      <ArrowSquareOutIcon weight="bold" className="size-3.5 shrink-0" />
                    </a>
                  ) : (
                    a.title
                  )}
                </h3>
                {a.year && (
                  <span className="shrink-0 border-2 border-ink bg-muted px-1.5 py-0.5 font-mono text-[11px] font-bold">
                    {a.year}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{a.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
