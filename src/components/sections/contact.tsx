import { EnvelopeSimpleIcon, GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/ssr";
import { SectionHeading } from "@/components/sections/heading";
import { buttonVariants } from "@/components/ui/button";
import { socials } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16 pb-28">
      <SectionHeading n="07" title="Get in touch" color="bg-brand" />
      <div className="relative border-2 border-ink bg-brand p-8 text-on-accent shadow-nb-lg sm:p-12">
        <span className="bg-hatch absolute right-0 top-0 hidden h-full w-16 border-l-2 border-ink opacity-30 sm:block" aria-hidden />
        <p className="relative max-w-xl text-2xl font-bold leading-snug sm:text-3xl">
          Open to interesting problems, collaborations, and a good conversation over coffee.
        </p>
        <p className="relative mt-3 max-w-xl font-mono text-sm font-bold uppercase tracking-wide">
          The fastest way to reach me is email.
        </p>
        <div className="relative mt-8 flex flex-wrap gap-4">
          <a href={`mailto:${socials.email}`} className={buttonVariants({ variant: "inverted", size: "lg" })}>
            <EnvelopeSimpleIcon weight="bold" /> {socials.email}
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
        </div>
      </div>
    </section>
  );
}
