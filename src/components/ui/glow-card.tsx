"use client";

import { type ReactNode, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type GlowCardProps = {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "green" | "red" | "orange";
};

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
};

export function GlowCard({ children, className, glowColor = "blue" }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { base, spread } = glowColorMap[glowColor];

  useEffect(() => {
    const syncPointer = (event: PointerEvent) => {
      if (!cardRef.current) return;

      cardRef.current.style.setProperty("--x", event.clientX.toFixed(2));
      cardRef.current.style.setProperty("--y", event.clientY.toFixed(2));
      cardRef.current.style.setProperty("--xp", (event.clientX / window.innerWidth).toFixed(2));
    };

    document.addEventListener("pointermove", syncPointer);
    return () => document.removeEventListener("pointermove", syncPointer);
  }, []);

  return (
    <div
      ref={cardRef}
      data-glow-card
      className={cn(
        "glow-card relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#07111f]/90 shadow-[0_1rem_2rem_-1rem_black] backdrop-blur-xl",
        className
      )}
      style={
        {
          "--base": base,
          "--spread": spread,
          "--hue": "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",
        } as React.CSSProperties
      }
    >
      <span aria-hidden="true" data-glow-card-aura />
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(260px_260px_at_calc(var(--x,0)*1px)_calc(var(--y,0)*1px),hsl(var(--hue)_90%_60%/0.12),transparent_65%)]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
