"use client";

import * as React from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

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
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const rotate = useTransform(scrollYProgress, [0.08, 0.56], [isMobile ? 8 : 20, 0]);
  const scale = useTransform(scrollYProgress, [0.08, 0.56], isMobile ? [0.9, 1] : [1.06, 1]);
  const translate = useTransform(scrollYProgress, [0.08, 0.56], [isMobile ? 18 : 70, 0]);
  const headerTranslate = useTransform(scrollYProgress, [0.08, 0.56], [isMobile ? 26 : 92, 0]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative mx-auto flex min-h-[42rem] w-full items-center justify-center overflow-hidden px-3 py-8 sm:min-h-[58rem] sm:px-6 lg:min-h-[70rem] lg:px-8",
        className,
      )}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_18%,rgba(97,97,255,0.16),transparent_26rem)]" />
      <div className="relative w-full py-8 sm:py-20 lg:py-28" style={{ perspective: "1000px" }}>
        <motion.div
          style={{ translateY: headerTranslate }}
          className="relative z-10 mx-auto mb-7 max-w-5xl text-center sm:mb-12"
        >
          {titleComponent}
        </motion.div>
        <ScrollCard rotate={rotate} translate={translate} scale={scale}>
          {children}
        </ScrollCard>
      </div>
    </div>
  );
}

function ScrollCard({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        y: translate,
        boxShadow:
          "0 9px 20px rgba(0,0,0,0.29), 0 37px 37px rgba(0,0,0,0.26), 0 84px 50px rgba(0,0,0,0.15), 0 149px 60px rgba(0,0,0,0.04)",
      }}
      className="relative mx-auto w-full max-w-6xl rounded-[1.75rem] border-[3px] border-white/40 bg-[#171923] p-2 shadow-2xl sm:rounded-[2rem] sm:border-4 sm:p-4 lg:rounded-[2.4rem] lg:p-6"
    >
      <div className="pointer-events-none absolute inset-2 rounded-[1.35rem] border border-white/20 sm:inset-4 sm:rounded-[1.7rem] lg:rounded-[2rem]" />
      <div className="mb-2 flex items-center gap-2 px-3 pt-2 sm:mb-4 sm:px-4">
        <span className="size-3 rounded-full bg-[#ff5a5f]" />
        <span className="size-3 rounded-full bg-[#ffcb00]" />
        <span className="size-3 rounded-full bg-[#00c875]" />
        <span className="ml-3 h-7 flex-1 rounded-full bg-black/18" />
      </div>
      <div className="h-full w-full overflow-hidden rounded-[1.15rem] border border-white/12 bg-[#070b14] sm:rounded-[1.55rem] sm:p-3">
        {children}
      </div>
    </motion.div>
  );
}
