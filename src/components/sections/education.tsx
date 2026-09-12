import { GraduationCapIcon } from "@phosphor-icons/react/ssr";
import { SectionHeading } from "@/components/sections/heading";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading n="05" title="Education" color="bg-nb-purple" />
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((ed, i) => (
          <div key={ed.school} className="flex flex-col border-2 border-ink bg-card shadow-nb">
            <div
              className={`flex items-center justify-between gap-3 border-b-2 border-ink px-4 py-3 text-on-accent ${
                i === 0 ? "bg-nb-purple" : "bg-nb-blue"
              }`}
            >
              <span className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wide">
                <GraduationCapIcon weight="bold" className="size-4" /> {ed.period}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold leading-tight">{ed.school}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed">
                {ed.details.map((d, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="mt-[7px] size-2 shrink-0 bg-ink" aria-hidden />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
