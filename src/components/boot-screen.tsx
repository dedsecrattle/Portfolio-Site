"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "@/lib/use-media-query";
import { cn } from "@/lib/utils";

const LINES = [
  "$ ./prabhat --init",
  "[ ok ] loading modules",
  "[ ok ] mounting experience",
  "[ ok ] fetching projects",
  "[ ok ] establishing connection",
  "> welcome_",
];

export function BootScreen() {
  const [count, setCount] = useState(0);
  const [hide, setHide] = useState(false);
  const [done, setDone] = useState(false);
  const reduce = useMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    if (reduce) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= LINES.length) {
        clearInterval(id);
        setTimeout(() => setHide(true), 450);
        setTimeout(() => setDone(true), 1050);
      }
    }, 210);
    return () => clearInterval(id);
  }, [reduce]);

  if (done || reduce) return null;

  return (
    <div
      onClick={() => setDone(true)}
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-background px-6 transition-opacity duration-500",
        hide && "opacity-0",
      )}
    >
      <div className="w-full max-w-md border-2 border-ink bg-card shadow-nb-lg">
        <div className="flex items-center gap-2 border-b-2 border-ink bg-muted px-3 py-2">
          <span className="size-3 border-2 border-ink bg-nb-pink" aria-hidden />
          <span className="size-3 border-2 border-ink bg-nb-yellow" aria-hidden />
          <span className="size-3 border-2 border-ink bg-brand" aria-hidden />
          <span className="ml-2 font-mono text-xs font-bold uppercase tracking-wide text-muted-foreground">boot</span>
        </div>
        <pre className="min-h-[11rem] px-4 py-4 font-mono text-sm font-bold leading-relaxed sm:text-base">
          {LINES.slice(0, count).map((l, i) => (
            <div key={i}>
              {l.startsWith("[ ok ]") ? (
                <>
                  <span className="bg-brand px-1 text-on-accent">ok</span>
                  {l.slice(6)}
                </>
              ) : (
                l
              )}
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}
