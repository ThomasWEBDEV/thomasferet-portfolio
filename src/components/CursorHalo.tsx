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
        { duration: 500, fill: "forwards", easing: "ease-out" }
      );
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={haloRef}
      className="pointer-events-none fixed z-[60] h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/20 blur-2xl mix-blend-screen"
    />
  );
}
