import {
  ArrowDownIcon,
  DownloadSimpleIcon,
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  MapPinIcon,
} from "@phosphor-icons/react/ssr";
import { GlitchText } from "@/components/glitch-text";
import { Typewriter } from "@/components/typewriter";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { experience, profile, socials } from "@/lib/data";

export function Hero() {
  const current = experience[0];
  return (
    <section id="top" className="mx-auto flex min-h-[90svh] max-w-5xl flex-col justify-center px-6 py-20">
      {/* stickers */}
      <div className="mb-8 flex flex-wrap gap-3">
        <Badge variant="yellow" shadow="sm" className="-rotate-2">
          <MapPinIcon weight="bold" /> {profile.location}
        </Badge>
        <Badge variant="blue" shadow="sm" className="rotate-1">
          {current.role} @ {current.org}
        </Badge>
        {current.badge && (
          <Badge variant="orange" shadow="sm" className="-rotate-1">
            {current.badge}
          </Badge>
        )}
      </div>

      <p className="mb-4 font-mono text-sm sm:text-base">
        <span className="font-bold">prabhat</span>
        <span className="text-muted-foreground">@</span>
        <span className="font-bold">singapore</span>
        <span className="text-muted-foreground">:~$ whoami</span>
      </p>

      <h1 className="text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
        <GlitchText text={profile.name} />
      </h1>

      <p className="mt-6 max-w-3xl text-xl font-medium sm:text-2xl">
        <span className="inline-block border-2 border-ink bg-brand px-3 py-1 text-on-accent shadow-nb">
          {profile.tagline}
        </span>
      </p>

      {/* terminal window */}
      <div className="mt-10 w-full max-w-xl border-2 border-ink bg-card shadow-nb-lg">
        <div className="flex items-center gap-2 border-b-2 border-ink bg-muted px-3 py-2">
          <span className="size-3 border-2 border-ink bg-nb-pink" aria-hidden />
          <span className="size-3 border-2 border-ink bg-nb-yellow" aria-hidden />
          <span className="size-3 border-2 border-ink bg-brand" aria-hidden />
          <span className="ml-2 font-mono text-xs font-bold uppercase tracking-wide text-muted-foreground">
            ~/prabhat — zsh
          </span>
        </div>
        <p className="px-4 py-4 font-mono text-sm sm:text-base">
          <span className="font-bold text-muted-foreground">$ echo $ROLE</span>
          <br />
          <span className="font-bold">&gt;</span>{" "}
          <Typewriter words={profile.roles} />
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <a href="#projects" className={buttonVariants({ size: "lg" })}>
          View my work <ArrowDownIcon weight="bold" />
        </a>
        <a href={socials.resume} download className={buttonVariants({ variant: "inverted", size: "lg" })}>
          <DownloadSimpleIcon weight="bold" /> Resume
        </a>
        <a
          href={socials.github}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          <GithubLogoIcon weight="bold" /> GitHub
        </a>
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          <LinkedinLogoIcon weight="bold" /> LinkedIn
        </a>
        <a href={`mailto:${socials.email}`} className={buttonVariants({ variant: "outline", size: "lg" })}>
          <EnvelopeSimpleIcon weight="bold" /> Email
        </a>
      </div>
    </section>
  );
}
