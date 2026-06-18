"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type DottedSurfaceProps = React.ComponentProps<"div"> & {
  density?: number;
  dotSize?: number;
  variant?: "dark" | "light";
};

export function DottedSurface({ className, density = 34, dotSize = 1.35, variant = "dark", ...props }: DottedSurfaceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let time = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      const gradient = context.createRadialGradient(width * 0.46, height * 0.14, 0, width * 0.5, height * 0.34, width * 0.76);
      if (variant === "dark") {
        gradient.addColorStop(0, "rgba(108, 92, 255, 0.34)");
        gradient.addColorStop(0.34, "rgba(42, 117, 255, 0.22)");
        gradient.addColorStop(0.64, "rgba(0, 200, 117, 0.10)");
        gradient.addColorStop(1, "rgba(2, 4, 10, 0)");
      } else {
        gradient.addColorStop(0, "rgba(97, 97, 255, 0.22)");
        gradient.addColorStop(0.38, "rgba(0, 200, 117, 0.12)");
        gradient.addColorStop(0.72, "rgba(255, 203, 0, 0.08)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      }
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      const horizon = height * 0.34;
      const verticalStretch = Math.max(height * 0.52, 380);
      const columns = Math.ceil(width / density) + 10;
      const rows = Math.ceil(height / density) + 10;

      for (let row = 0; row < rows; row++) {
        const depth = row / rows;
        const perspective = 0.26 + depth * 1.12;
        const y = horizon + row * density * perspective * 0.55;
        if (y > height + density) break;

        for (let col = -5; col < columns; col++) {
          const xBase = col * density + (row % 2) * density * 0.5;
          const wave =
            Math.sin(col * 0.58 + time * 0.025) * 15 +
            Math.sin(row * 0.34 + time * 0.018) * 22 +
            Math.sin((col + row) * 0.13 + time * 0.03) * 10;

          const x = xBase + Math.sin(row * 0.18 + time * 0.016) * 18;
          const surfaceY = y + wave * perspective;
          const fade = Math.max(0, 1 - Math.abs(surfaceY - verticalStretch) / (height * 0.86));
          const alpha = Math.min(variant === "dark" ? 0.5 : 0.36, 0.08 + depth * 0.32) * fade;

          context.beginPath();
          context.fillStyle =
            variant === "dark" ? `rgba(210, 222, 255, ${alpha})` : `rgba(15, 23, 42, ${alpha})`;
          context.arc(x, surfaceY, dotSize + depth * 1.15, 0, Math.PI * 2);
          context.fill();
        }
      }

      context.strokeStyle = variant === "dark" ? "rgba(125, 92, 255, 0.13)" : "rgba(97, 97, 255, 0.08)";
      context.lineWidth = 1;
      for (let row = 3; row < rows; row += 5) {
        context.beginPath();
        for (let col = -5; col < columns; col++) {
          const depth = row / rows;
          const perspective = 0.26 + depth * 1.12;
          const y = horizon + row * density * perspective * 0.55;
          const x = col * density + Math.sin(row * 0.18 + time * 0.016) * 18;
          const surfaceY =
            y +
            (Math.sin(col * 0.58 + time * 0.025) * 15 + Math.sin(row * 0.34 + time * 0.018) * 22) *
              perspective;
          if (col === -5) context.moveTo(x, surfaceY);
          else context.lineTo(x, surfaceY);
        }
        context.stroke();
      }

      if (!reducedMotion) {
        time += 1;
        animationFrame = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, [density, dotSize, variant]);

  return (
    <div className={cn("pointer-events-none fixed inset-0 overflow-hidden", className)} {...props}>
      <canvas ref={canvasRef} className="absolute inset-0 size-full" aria-hidden="true" />
      <div
        className={cn(
          "absolute inset-0",
          variant === "dark"
            ? "bg-[linear-gradient(180deg,rgba(3,4,7,0.04)_0%,rgba(3,4,7,0.42)_46%,rgba(3,4,7,0.92)_100%)]"
            : "bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(247,247,251,0.62)_42%,rgba(255,255,255,0.96)_100%)]",
        )}
      />
    </div>
  );
}
