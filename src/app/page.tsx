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
import { Stats } from "@/components/sections/stats";
import { Contact } from "@/components/sections/contact";
import { profile } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Cursor />
      <BootScreen />
      {/* faint CRT scanlines over everything, non-interactive */}
      <div aria-hidden className="scanlines pointer-events-none fixed inset-0 z-[60]" />
      {/* techy backdrop: faint grid, masked to fade at edges, + a soft brand glow up top */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,color-mix(in_oklch,var(--foreground)_7%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklch,var(--foreground)_7%,transparent)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -top-40 left-1/2 -z-10 h-[420px] w-[820px] max-w-[95vw] -translate-x-1/2 rounded-full bg-brand/15 blur-[130px]"
      />
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Stats />
        <Contact />
      </main>
      <footer className="border-t border-border/60">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} · Built with Next.js &amp; Tailwind
        </div>
      </footer>
      <BackToTop />
    </>
  );
}
