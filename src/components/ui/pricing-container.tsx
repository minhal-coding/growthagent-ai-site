"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

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
    text: "text-[#9d8cff]",
    border: "border-[#6161ff]/35",
    glow: "from-[#6161ff]/30",
    badge: "border-[#6161ff]/40 bg-[#6161ff]/14 text-[#c7b8ff]",
  },
  green: {
    text: "text-[#8ff8c7]",
    border: "border-[#00c875]/40",
    glow: "from-[#00c875]/30",
    badge: "border-[#00c875]/40 bg-[#00c875]/14 text-[#8ff8c7]",
  },
  blue: {
    text: "text-[#8bdfff]",
    border: "border-[#00d2ff]/35",
    glow: "from-[#00d2ff]/25",
    badge: "border-[#00d2ff]/40 bg-[#00d2ff]/12 text-[#8bdfff]",
  },
};

function Counter({ from, to }: { from: number; to: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;
    const controls = animate(from, to, {
      duration: 0.7,
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      },
    });
    return () => controls.stop();
  }, [from, to]);

  return <span ref={nodeRef}>{to}</span>;
}

function Price({ value, previous }: { value: number | "Custom"; previous: number | "Custom" }) {
  if (value === "Custom") {
    return <span>Custom</span>;
  }

  return (
    <>
      $<Counter from={typeof previous === "number" ? previous : value} to={value} />
    </>
  );
}

function PricingCard({ plan, yearly, index }: { plan: PricingPlan; yearly: boolean; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { damping: 18, stiffness: 140 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), { damping: 18, stiffness: 140 });
  const styles = accentStyles[plan.accent];
  const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;
  const previousPrice = yearly ? plan.monthlyPrice : plan.yearlyPrice;

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      onMouseMove={(event) => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;
        mouseX.set((event.clientX - (rect.x + rect.width / 2)) / rect.width);
        mouseY.set((event.clientY - (rect.y + rect.height / 2)) / rect.height);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      className={cn(
        "group relative flex min-h-[30rem] flex-col overflow-hidden rounded-[2rem] border bg-[#07111f]/88 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-7",
        styles.border,
      )}
    >
      <div className={cn("absolute -right-24 -top-24 size-52 rounded-full bg-gradient-to-br to-transparent opacity-70 blur-3xl", styles.glow)} />
      {plan.isPopular ? (
        <motion.span
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2.3, repeat: Infinity }}
          className={cn("absolute right-6 top-6 rounded-full border px-3 py-1 text-xs font-black", styles.badge)}
        >
          Best value
        </motion.span>
      ) : null}

      <div className="relative z-10">
        <p className="text-base font-black text-slate-300">{plan.name}</p>
        <div className="mt-5 flex items-end gap-2">
          <p className="text-5xl font-black tracking-tight text-white sm:text-6xl">
            <Price value={price} previous={previousPrice} />
          </p>
          {price !== "Custom" ? <span className="pb-2 text-sm font-bold text-slate-500">/mo</span> : null}
        </div>
        <p className="mt-5 min-h-14 text-sm font-medium leading-6 text-slate-400">{plan.description}</p>
      </div>

      <div className="relative z-10 mt-7 flex flex-1 flex-col gap-4">
        {plan.features.map((feature) => (
          <motion.div
            key={feature}
            whileHover={{ x: 4 }}
            className="flex items-center gap-3 text-sm font-black text-slate-200"
          >
            <CheckCircle2 className={cn("size-4", styles.text)} />
            {feature}
          </motion.div>
        ))}
      </div>

      <Link
        href="/contact"
        className="relative z-10 mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-[#f4f7fb]"
      >
        {plan.cta ?? "Book a Demo"}
      </Link>
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
    <section className={cn("relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(97,97,255,0.16),transparent_38%),linear-gradient(180deg,#080b24_0%,#020611_62%)]" />
      <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(#1b6fff_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.34em] text-[#8d7dff]">{eyebrow}</p>
          <h2 className="mt-4 text-balance text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-7 text-slate-300 sm:text-lg">{subtitle}</p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full border border-white/12 bg-white/[0.05] p-1 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur">
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={cn("min-h-10 rounded-full px-6 text-sm font-black transition", !yearly ? "bg-white text-slate-950" : "text-slate-400 hover:text-white")}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={cn("min-h-10 rounded-full px-6 text-sm font-black transition", yearly ? "bg-white text-slate-950" : "text-slate-400 hover:text-white")}
            >
              Yearly
            </button>
          </div>
        </div>

        {yearly ? (
          <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 text-center text-sm font-black text-[#8ff8c7]">
            <Sparkles className="mr-1 inline size-4" />
            Save 20% with annual billing
          </motion.p>
        ) : null}

        <div className={cn("mt-12 grid gap-5 lg:grid-cols-3", compact ? "lg:mt-10" : "lg:mt-16")}>
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} yearly={yearly} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
