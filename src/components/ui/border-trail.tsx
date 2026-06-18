"use client";

import { cn } from "@/lib/utils";

export function BorderTrail({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        "before:absolute before:inset-[-2px] before:rounded-[inherit] before:p-[2px]",
        "before:bg-[conic-gradient(from_var(--trail-angle),transparent_0deg,#6161ff_54deg,#00c875_92deg,#ffcb00_132deg,transparent_190deg)]",
        "before:[animation:border-trail_5s_linear_infinite]",
        "before:[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] before:[mask-composite:exclude]",
        className,
      )}
    />
  );
}
