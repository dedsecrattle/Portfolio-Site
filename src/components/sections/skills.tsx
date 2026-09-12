import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import {
  SiApachecassandra,
  SiCplusplus,
  SiDocker,
  SiFastapi,
  SiFlutter,
  SiGithubactions,
  SiGo,
  SiGooglecloud,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiRust,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";
import { CloudIcon, CodeIcon, DatabaseIcon, LayoutIcon } from "@phosphor-icons/react/ssr";
import { SectionHeading } from "@/components/sections/heading";
import { Card, CardBar, CardContent } from "@/components/ui/card";
import { skills } from "@/lib/data";

const icons: Record<string, IconType> = {
  Rust: SiRust,
  TypeScript: SiTypescript,
  Python: SiPython,
  Java: SiOpenjdk,
  Go: SiGo,
  "C/C++": SiCplusplus,
  JavaScript: SiJavascript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "React Native": SiReact,
  Flutter: SiFlutter,
  "Node.js": SiNodedotjs,
  FastAPI: SiFastapi,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  Cassandra: SiApachecassandra,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  AWS: FaAws,
  GCP: SiGooglecloud,
  Terraform: SiTerraform,
  "GitHub Actions": SiGithubactions,
};

// One colour + glyph per skill group, cycling in data order.
const groupStyle = [
  { color: "bg-nb-blue", Icon: CodeIcon },
  { color: "bg-nb-pink", Icon: LayoutIcon },
  { color: "bg-nb-yellow", Icon: DatabaseIcon },
  { color: "bg-nb-purple", Icon: CloudIcon },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading n="02" title="Skills" color="bg-nb-blue" />
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((s, gi) => {
          const { color, Icon: GroupIcon } = groupStyle[gi % groupStyle.length];
          return (
            <Card key={s.group}>
              <CardBar className={color}>
                <GroupIcon weight="bold" className="size-4" /> {s.group}
                <span className="ml-auto font-mono text-[11px] font-bold opacity-70">{s.items.length}</span>
              </CardBar>
              <CardContent className="flex flex-wrap gap-2.5">
                {s.items.map((i) => {
                  const Icon = icons[i];
                  return (
                    <span
                      key={i}
                      className="nb-press inline-flex items-center gap-2 border-2 border-ink bg-background px-2.5 py-1.5 text-sm font-bold shadow-nb-sm hover:bg-brand hover:text-on-accent"
                    >
                      {Icon && <Icon className="size-4" aria-hidden />}
                      {i}
                    </span>
                  );
                })}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
