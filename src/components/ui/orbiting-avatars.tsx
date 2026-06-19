"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type Avatar = {
  label: string;
  color: string;
};

export function OrbitingAvatarsCTA({
  title,
  description,
  buttonText,
  href = "/contact",
  avatars,
  className,
}: {
  title: React.ReactNode;
  description: React.ReactNode;
  buttonText: string;
  href?: string;
  avatars: Avatar[];
  className?: string;
}) {
  return (
    <section className={cn("relative isolate overflow-hidden rounded-[2rem] border border-slate-200 bg-white px-6 py-20 text-center shadow-[0_24px_80px_rgba(15,23,42,0.08)]", className)}>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_45%,rgba(97,97,255,0.12),transparent_26rem),radial-gradient(circle_at_20%_20%,rgba(0,200,117,0.12),transparent_18rem)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-slate-300/70" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-slate-300/60" />

      <div className="absolute inset-0 -z-0 hidden animate-[orbit_46s_linear_infinite] md:block">
        {avatars.map((avatar, index) => {
          const angle = (index / avatars.length) * Math.PI * 2;
          const x = Math.cos(angle) * 310;
          const y = Math.sin(angle) * 210;
          return (
            <span
              key={avatar.label}
              className="absolute left-1/2 top-1/2 grid size-14 animate-[counter-orbit_46s_linear_infinite] place-items-center rounded-2xl text-sm font-black text-slate-950 shadow-lg"
              style={{ transform: `translate(${x}px, ${y}px)`, backgroundColor: avatar.color }}
            >
              {avatar.label}
            </span>
          );
        })}
      </div>

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-5">
        <p className="rounded-full border border-[#00c875]/25 bg-[#00c875]/12 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#05603a]">
          Built by Yam Automation
        </p>
        <h2 className="text-balance text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">{title}</h2>
        <p className="text-lg font-medium leading-8 text-slate-600">{description}</p>
        <Link href={href} className="inline-flex h-12 items-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-black text-white shadow-[0_16px_30px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-[#6161ff]">
          {buttonText}
          <ArrowRight data-icon="inline-end" />
        </Link>
      </div>
    </section>
  );
}
