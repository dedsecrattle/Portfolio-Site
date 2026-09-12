"use client";

import { useEffect, useRef } from "react";
import { useMediaQuery } from "@/lib/use-media-query";

// A dot at the pointer + a ring that trails it and grows over interactive elements.
// Only on fine pointers (mouse) with motion allowed — touch/reduced-motion keep the native cursor.
export function Cursor() {
  const fine = useMediaQuery("(pointer: fine)");
  const reduce = useMediaQuery("(prefers-reduced-motion: reduce)");
  const on = fine && !reduce;
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!on) return;
    document.body.classList.add("cursor-none");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      // Stay hidden until we know where the pointer actually is.
      dot.current?.classList.add("cursor-visible");
      ring.current?.classList.add("cursor-visible");
      if (dot.current) dot.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      const target = e.target;
      const interactive =
        target instanceof Element && !!target.closest("a, button, [role=button], input, label");
      ring.current?.classList.toggle("cursor-ring--active", interactive);
    };

    let raf = 0;
    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("cursor-none");
    };
  }, [on]);

  if (!on) return null;
  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden />
      <div ref={dot} className="cursor-dot" aria-hidden />
    </>
  );
}
