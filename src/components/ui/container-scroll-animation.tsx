"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

export function ContainerScroll({
  titleComponent,
  children,
  className,
}: {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.45], [18, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.45], [0.92, 1]);
  const y = useTransform(scrollYProgress, [0, 0.45], [70, 0]);

  return (
    <div ref={ref} className={cn("relative mx-auto flex min-h-[46rem] w-full flex-col items-center justify-center overflow-hidden", className)}>
      <div className="relative z-10 mb-10">{titleComponent}</div>
      <motion.div style={{ rotateX, scale, y }} className="relative w-full max-w-6xl [perspective:1000px]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_34px_100px_rgba(15,23,42,0.16)]">
          <div className="mb-3 flex items-center gap-2 px-3 pt-2">
            <span className="size-3 rounded-full bg-[#ff5a5f]" />
            <span className="size-3 rounded-full bg-[#ffcb00]" />
            <span className="size-3 rounded-full bg-[#00c875]" />
            <span className="ml-3 h-7 flex-1 rounded-full bg-slate-100" />
          </div>
          <div className="overflow-hidden rounded-[1.45rem] border border-slate-200 bg-slate-950">{children}</div>
        </div>
      </motion.div>
    </div>
  );
}
