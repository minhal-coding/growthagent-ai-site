"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Pencil, Sparkles, Star } from "lucide-react";

import { cn } from "@/lib/utils";

export interface PricingPlan {
  name: string;
  monthlyPrice: number | "Custom";
  yearlyPrice: number | "Custom";
  description: string;
  features: string[];
  isPopular?: boolean;
  accent: "purple" | "green" | "blue";
  cta?: string;
}

interface PricingContainerProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  plans: PricingPlan[];
  className?: string;
  compact?: boolean;
}

const accentStyles = {
  purple: {
    icon: "text-[#a99bff]",
    badge: "border-[#a99bff] bg-[#211b4a] text-[#ded8ff]",
    line: "from-[#a99bff] to-[#6161ff]",
    shadow: "shadow-[8px_8px_0_#3b31a5]",
    glow: "bg-[#6161ff]/18",
  },
  green: {
    icon: "text-[#00e39a]",
    badge: "border-[#00c875] bg-[#082f28] text-[#a8ffe1]",
    line: "from-[#00e39a] to-[#00a96b]",
    shadow: "shadow-[8px_8px_0_#007a56]",
    glow: "bg-[#00c875]/18",
  },
  blue: {
    icon: "text-[#77dbff]",
    badge: "border-[#77dbff] bg-[#07273c] text-[#c5efff]",
    line: "from-[#77dbff] to-[#1889ff]",
    shadow: "shadow-[8px_8px_0_#0c5db6]",
    glow: "bg-[#00d2ff]/16",
  },
};

const iconByName = {
  Starter: Pencil,
  Growth: Star,
  Enterprise: Sparkles,
};

const rotations = ["md:-rotate-[1.5deg]", "md:rotate-[1deg]", "md:-rotate-[1deg]"];

function formatPrice(value: number | "Custom") {
  return value === "Custom" ? "Custom" : `$${value}`;
}

function PricingCard({ plan, yearly, index }: { plan: PricingPlan; yearly: boolean; index: number }) {
  const accent = accentStyles[plan.accent];
  const Icon = iconByName[plan.name as keyof typeof iconByName] ?? Sparkles;
  const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.08, duration: 0.42 }}
      whileHover={{ y: -8, rotate: 0 }}
      className={cn(
        "group relative min-h-[31rem] rounded-[1.6rem] border-[3px] border-white bg-[#16171b] p-6 text-white transition duration-300 sm:p-7",
        "before:absolute before:inset-2 before:rounded-[1.15rem] before:border before:border-white/18 before:content-['']",
        "after:absolute after:-bottom-2 after:left-7 after:h-[3px] after:w-[calc(100%-3.5rem)] after:rounded-full after:bg-white/80 after:content-['']",
        "hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_#ffffff]",
        accent.shadow,
        rotations[index % rotations.length],
      )}
    >
      <div className={cn("absolute -right-14 -top-14 size-36 rounded-full blur-3xl", accent.glow)} />
      <div className="relative z-10 flex h-full flex-col">
        {plan.isPopular ? (
          <div
            className={cn(
              "absolute -right-3 -top-5 rotate-[9deg] rounded-full border-2 px-4 py-1.5 text-sm font-black shadow-[3px_3px_0_#ffffff]",
              accent.badge,
            )}
          >
            Popular
          </div>
        ) : null}

        <div className={cn("mb-6 flex size-14 items-center justify-center rounded-full border-[3px] border-white bg-[#0b0f18]", accent.icon)}>
          <Icon className="size-7" />
        </div>

        <h3 className="text-2xl font-black tracking-tight">{plan.name}</h3>
        <p className="mt-2 min-h-12 text-base font-medium leading-6 text-white/60">{plan.description}</p>

        <div className="mt-7 flex items-end gap-2">
          <p className="text-5xl font-black tracking-[-0.04em] sm:text-6xl">{formatPrice(price)}</p>
          {price !== "Custom" ? <span className="pb-2 text-base font-bold text-white/45">/month</span> : null}
        </div>

        {yearly && price !== "Custom" ? (
          <p className="mt-2 text-sm font-black text-[#00e39a]">Annual discount applied</p>
        ) : null}

        <div className={cn("my-7 h-[3px] rounded-full bg-gradient-to-r", accent.line)} />

        <div className="flex flex-1 flex-col gap-4">
          {plan.features.map((feature) => (
            <div key={feature} className="flex items-center gap-3 text-base font-black text-white/86">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-white">
                <Check className="size-3.5" />
              </span>
              {feature}
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-xl border-[3px] border-white bg-white px-5 text-base font-black text-[#0b0f18] shadow-[4px_4px_0_#5d6472] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_#5d6472]"
        >
          {plan.cta ?? "Book a Demo"}
        </Link>
      </div>
    </motion.article>
  );
}

export function PricingContainer({
  eyebrow = "Pricing",
  title = "Pricing for autonomous growth teams.",
  subtitle = "Start with founder-led automation, then scale into a secure AI sales operating system for your team.",
  plans,
  className,
  compact = false,
}: PricingContainerProps) {
  const [yearly, setYearly] = useState(false);

  return (
    <section className={cn("relative overflow-x-clip px-4 py-16 sm:px-6 lg:px-8", className)}>
      <div className="absolute inset-0 bg-[#050508]" />
      <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(#1b6fff_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_50%_0%,rgba(97,97,255,0.22),transparent_55%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.42em] text-[#8d7dff]">{eyebrow}</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-7 text-slate-300 sm:text-lg">{subtitle}</p>
        </div>

        <div className="mt-9 flex justify-center">
          <div className="inline-flex rounded-full border-2 border-white/18 bg-white/[0.06] p-1 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={cn("min-h-10 rounded-full px-7 text-sm font-black transition", !yearly ? "bg-white text-slate-950" : "text-slate-400 hover:text-white")}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={cn("min-h-10 rounded-full px-7 text-sm font-black transition", yearly ? "bg-white text-slate-950" : "text-slate-400 hover:text-white")}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className={cn("mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 md:items-stretch", compact ? "lg:mt-10" : "lg:mt-16")}>
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} yearly={yearly} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
