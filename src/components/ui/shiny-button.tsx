"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ShinyLinkProps = React.ComponentProps<typeof Link> & {
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
};

const shineTransition = {
  repeat: Infinity,
  repeatType: "loop" as const,
  duration: 2.4,
  ease: "easeInOut" as const,
  repeatDelay: 1.1,
};

export function ShinyLink({ children, className, showArrow = true, ...props }: ShinyLinkProps) {
  return (
    <Link
      {...props}
      className={cn(
        "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white px-6 text-sm font-black text-slate-950 shadow-[0_20px_60px_rgba(97,97,255,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_80px_rgba(0,210,255,0.22)]",
        className
      )}
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-y-[-30%] left-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent"
        initial={{ x: "-140%" }}
        animate={{ x: "270%" }}
        transition={shineTransition}
      />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {showArrow ? <ArrowRight className="size-4 transition group-hover:translate-x-1" /> : null}
      </span>
      <span aria-hidden="true" className="absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/35" />
    </Link>
  );
}

type ShinyButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

export function ShinyButton({ children, className, ...props }: ShinyButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white px-6 text-sm font-black text-slate-950 shadow-[0_20px_60px_rgba(97,97,255,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_80px_rgba(0,210,255,0.22)]",
        className
      )}
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-y-[-30%] left-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent"
        initial={{ x: "-140%" }}
        animate={{ x: "270%" }}
        transition={shineTransition}
      />
      <span className="relative z-10">{children}</span>
      <span aria-hidden="true" className="absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/35" />
    </button>
  );
}
