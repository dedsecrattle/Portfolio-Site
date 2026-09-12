import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-background">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="#top"
          className="nb-hover flex items-center border-2 border-ink bg-brand px-3 py-1 font-mono text-lg font-bold text-on-accent shadow-nb sm:text-xl"
        >
          {profile.name.split(" ")[0]}
          <span className="caret ml-0.5 inline-block h-[1.05em] w-2.5 bg-ink align-middle" aria-hidden />
        </Link>
        <div className="flex items-center gap-2">
          <div className="hidden gap-1 sm:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="border-2 border-transparent px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wide transition-colors hover:border-ink hover:bg-nb-yellow hover:text-on-accent"
              >
                {l.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
