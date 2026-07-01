import { Award as AwardIcon, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/sections/heading";
import { awards } from "@/lib/data";

export function Awards() {
  return (
    <section id="awards" className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading n="06" title="Awards & Achievements" />
      <div className="divide-y divide-border rounded-lg border border-border">
        {awards.map((a) => (
          <div key={a.title} className="group flex items-start gap-3 p-4 sm:gap-4 sm:p-5">
            <AwardIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold">
                  {a.url ? (
                    <a
                      href={a.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 hover:text-brand"
                    >
                      {a.title}
                      <ExternalLink className="h-3 w-3 shrink-0 text-muted-foreground group-hover:text-brand" />
                    </a>
                  ) : (
                    a.title
                  )}
                </h3>
                <span className="mt-0.5 shrink-0 font-mono text-xs text-muted-foreground">{a.year ?? ""}</span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{a.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
