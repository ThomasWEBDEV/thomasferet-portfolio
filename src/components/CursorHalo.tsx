"use client";

import { useEffect, useRef } from "react";

export default function CursorHalo() {
  const haloRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const halo = haloRef.current;
    if (!halo) return;

    const move = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      halo.animate(
        { left: `${clientX}px`, top: `${clientY}px` },
        { duration: 600, fill: "forwards", easing: "ease-out" }
      );
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={haloRef}
      className="pointer-events-none fixed z-[9999] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-3xl transition-opacity duration-500"
    />
  );
}
