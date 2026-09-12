import { ArrowUpRightIcon, GithubLogoIcon, StarIcon } from "@phosphor-icons/react/ssr";
import { SectionHeading } from "@/components/sections/heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/data";

const stripes = ["bg-brand", "bg-nb-pink", "bg-nb-blue", "bg-nb-yellow", "bg-nb-purple", "bg-nb-orange"];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading n="03" title="Projects" color="bg-nb-yellow" />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, idx) => {
          const href = p.live ?? p.repo;
          return (
            <Card key={p.name} className="nb-hover group relative">
              <div className={`h-3 border-b-2 border-ink ${stripes[idx % stripes.length]}`} aria-hidden />
              <CardHeader>
                <CardTitle className="flex items-start justify-between gap-3 font-mono text-lg">
                  <span className="flex flex-wrap items-center gap-2">
                    {p.name}
                    {p.stars ? (
                      <Badge variant="yellow" className="normal-case">
                        <StarIcon weight="fill" /> {p.stars}
                      </Badge>
                    ) : null}
                  </span>
                  {href && (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${p.name}`}
                      className="flex size-8 shrink-0 items-center justify-center border-2 border-ink bg-card transition-colors group-hover:bg-brand group-hover:text-on-accent after:absolute after:inset-0"
                    >
                      {p.live ? (
                        <ArrowUpRightIcon weight="bold" className="size-4" />
                      ) : (
                        <GithubLogoIcon weight="bold" className="size-4" />
                      )}
                    </a>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{p.blurb}</p>
              </CardContent>
              <CardFooter className="flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Badge key={t} variant="outline">
                    {t}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
