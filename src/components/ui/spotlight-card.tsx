"use client";

import { CSSProperties, ReactNode, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type GlowColor = "blue" | "purple" | "green" | "red" | "orange";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  glowColor?: GlowColor;
  radius?: number;
};

const glowColorMap: Record<GlowColor, { base: number; spread: number }> = {
  blue: { base: 220, spread: 170 },
  purple: { base: 276, spread: 240 },
  green: { base: 142, spread: 160 },
  red: { base: 0, spread: 180 },
  orange: { base: 34, spread: 170 },
};

type GlowStyle = CSSProperties & {
  "--base": number;
  "--spread": number;
  "--radius": number;
};

export function SpotlightCard({ children, className, glowColor = "purple", radius = 28 }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncPointer = (event: PointerEvent) => {
      const card = cardRef.current;
      if (!card) return;

      card.style.setProperty("--x", event.clientX.toFixed(2));
      card.style.setProperty("--xp", (event.clientX / window.innerWidth).toFixed(3));
      card.style.setProperty("--y", event.clientY.toFixed(2));
      card.style.setProperty("--yp", (event.clientY / window.innerHeight).toFixed(3));
    };

    document.addEventListener("pointermove", syncPointer, { passive: true });
    return () => document.removeEventListener("pointermove", syncPointer);
  }, []);

  const { base, spread } = glowColorMap[glowColor];

  return (
    <div
      ref={cardRef}
      data-glow-card
      style={{ "--base": base, "--spread": spread, "--radius": radius } as GlowStyle}
      className={cn("relative overflow-hidden", className)}
    >
      <div data-glow-card-aura aria-hidden="true" />
      {children}
    </div>
  );
}
