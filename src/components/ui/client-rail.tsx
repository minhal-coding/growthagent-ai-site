"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ClientRailProps = {
  clients: string[];
  className?: string;
};

const accentColors = ["#6161ff", "#00c875", "#ffcb00", "#ff5a5f", "#00d2ff", "#c7b8ff"];

export function ClientRail({ clients, className }: ClientRailProps) {
  const railRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);

  const updateScrollState = React.useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    setCanScrollLeft(rail.scrollLeft > 4);
    setCanScrollRight(rail.scrollLeft < rail.scrollWidth - rail.clientWidth - 4);
  }, []);

  React.useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [updateScrollState]);

  const scrollBy = (direction: "left" | "right") => {
    railRef.current?.scrollBy({
      left: direction === "left" ? -260 : 260,
      behavior: "smooth",
    });
  };

  return (
    <div className={cn("relative flex items-center gap-3", className)}>
      <button
        type="button"
        aria-label="Scroll clients left"
        onClick={() => scrollBy("left")}
        disabled={!canScrollLeft}
        className="hidden size-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-slate-300 transition hover:border-white/20 hover:bg-white/[0.1] disabled:pointer-events-none disabled:opacity-30 sm:flex"
      >
        <ArrowLeft className="size-4" />
      </button>
      <div
        ref={railRef}
        onScroll={updateScrollState}
        className="scrollbar-none -mx-4 flex snap-x gap-2 overflow-x-auto px-4 py-2 sm:mx-0 sm:px-0"
      >
        {clients.map((client, index) => (
          <motion.a
            key={client}
            href="/use-cases"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative shrink-0 snap-start overflow-hidden rounded-full border border-white/12 bg-[#060b14]/80 px-5 py-3 text-sm font-black text-slate-200 shadow-[0_12px_34px_rgba(0,0,0,0.24)] backdrop-blur-xl transition hover:border-white/25 hover:text-white"
          >
            <span
              className="absolute inset-x-5 top-0 h-px opacity-80"
              style={{ backgroundColor: accentColors[index % accentColors.length] }}
            />
            <span
              className="absolute -inset-4 opacity-0 blur-2xl transition group-hover:opacity-30"
              style={{ backgroundColor: accentColors[index % accentColors.length] }}
            />
            <span className="relative">{client}</span>
          </motion.a>
        ))}
      </div>
      <button
        type="button"
        aria-label="Scroll clients right"
        onClick={() => scrollBy("right")}
        disabled={!canScrollRight}
        className="hidden size-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-slate-300 transition hover:border-white/20 hover:bg-white/[0.1] disabled:pointer-events-none disabled:opacity-30 sm:flex"
      >
        <ArrowRight className="size-4" />
      </button>
    </div>
  );
}
