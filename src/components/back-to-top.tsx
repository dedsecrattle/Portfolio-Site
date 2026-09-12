"use client";

import { ArrowUpIcon } from "@phosphor-icons/react/ssr";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "nb-hover fixed bottom-6 right-6 z-40 flex size-12 items-center justify-center border-2 border-ink bg-nb-yellow text-on-accent shadow-nb",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUpIcon weight="bold" className="size-5" />
    </button>
  );
}
