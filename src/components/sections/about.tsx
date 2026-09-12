import { BriefcaseIcon, MapPinIcon, TerminalWindowIcon } from "@phosphor-icons/react/ssr";
import { SectionHeading } from "@/components/sections/heading";
import { Card, CardBar, CardContent } from "@/components/ui/card";
import { experience, profile } from "@/lib/data";

export function About() {
  const current = experience[0];
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading n="01" title="About" color="bg-brand" />
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardBar className="bg-brand">
            <TerminalWindowIcon weight="bold" className="size-4" /> README.md
          </CardBar>
          <CardContent>
            <p className="text-lg leading-relaxed">{profile.bio}</p>
          </CardContent>
        </Card>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          <Card className="bg-nb-yellow text-on-accent">
            <CardContent className="flex flex-col gap-2">
              <span className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wide">
                <MapPinIcon weight="bold" className="size-4" /> Based in
              </span>
              <span className="text-2xl font-bold">{profile.location}</span>
            </CardContent>
          </Card>
          <Card className="bg-nb-blue text-on-accent">
            <CardContent className="flex flex-col gap-2">
              <span className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wide">
                <BriefcaseIcon weight="bold" className="size-4" /> Currently
              </span>
              <span className="text-xl font-bold leading-tight">{current.role}</span>
              <span className="font-mono text-sm font-bold">
                @ {current.org}
                {current.badge ? ` · ${current.badge}` : ""}
              </span>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
