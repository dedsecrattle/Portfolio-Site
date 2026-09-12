import { BackToTop } from "@/components/back-to-top";
import { BootScreen } from "@/components/boot-screen";
import { Cursor } from "@/components/cursor";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Awards } from "@/components/sections/awards";
import { Contact } from "@/components/sections/contact";
import { profile } from "@/lib/data";

const ticker = [...profile.roles, "Singapore", "Open Source", "Built with Next.js & Tailwind"];

export default function Home() {
  return (
    <>
      <Cursor />
      <BootScreen />
      <Nav />
      <main className="flex-1">
        <Hero />
        {/* marquee strip: a colour band between hero and content */}
        <div className="overflow-hidden border-y-[3px] border-ink bg-nb-yellow py-2 text-on-accent" aria-hidden>
          <div className="marquee flex w-max whitespace-nowrap font-mono text-sm font-bold uppercase tracking-wider">
            {[0, 1].map((rep) => (
              <span key={rep} className="flex shrink-0">
                {ticker.map((t) => (
                  <span key={`${rep}-${t}`} className="px-6">
                    {t} <span className="ml-6">■</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Awards />
        <Contact />
      </main>
      <footer className="border-t-[3px] border-ink bg-card">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-6 font-mono text-xs font-bold uppercase tracking-wide sm:flex-row">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span className="text-muted-foreground">Built with Next.js &amp; Tailwind</span>
        </div>
      </footer>
      <BackToTop />
    </>
  );
}
