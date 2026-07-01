import { ArrowUpRight, Download, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/brand-icons";
import { GlitchText } from "@/components/glitch-text";
import { Typewriter } from "@/components/typewriter";
import { buttonVariants } from "@/components/ui/button";
import { profile, socials } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="mx-auto flex min-h-[90svh] max-w-4xl flex-col justify-center px-6 py-24">
      <p className="mb-5 font-mono text-sm">
        <span className="text-brand">prabhat</span>
        <span className="text-muted-foreground">@</span>
        <span className="text-brand">singapore</span>
        <span className="text-muted-foreground">:~$ whoami</span>
      </p>

      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        <GlitchText text={profile.name} />
      </h1>
      <p className="mt-4 max-w-2xl text-xl text-muted-foreground sm:text-2xl">{profile.tagline}</p>

      <p className="mt-6 font-mono text-sm text-muted-foreground sm:text-base">
        <span className="text-brand">&gt;</span>{" "}
        <span className="text-foreground">
          <Typewriter words={profile.roles} />
        </span>
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a href="#projects" className={buttonVariants({ size: "lg" })}>
          View my work <ArrowUpRight className="h-4 w-4" />
        </a>
        <a
          href={socials.resume}
          download
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          <Download className="h-4 w-4" /> Resume
        </a>
        <a
          href={socials.github}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          <Github className="h-4 w-4" /> GitHub
        </a>
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          <Linkedin className="h-4 w-4" /> LinkedIn
        </a>
        <a
          href={`mailto:${socials.email}`}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          <Mail className="h-4 w-4" /> Email
        </a>
      </div>
    </section>
  );
}
