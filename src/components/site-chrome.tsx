import Link from "next/link";
import { ArrowRight, CheckCircle2, Menu, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import { DottedShaderSurface } from "@/components/ui/dotted-shader-surface";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const nav = [
  { label: "Product", href: "/#product" },
  { label: "Agents", href: "/#agents" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="GrowthAgent AI home">
      <span className="grid size-10 place-items-center rounded-2xl bg-[#00c875] text-sm font-black text-[#062b1a] shadow-[0_12px_30px_rgba(0,200,117,0.28)] transition group-hover:-rotate-3">
        G
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-black tracking-tight text-white">GrowthAgent AI</span>
        <span className="block text-[11px] font-semibold text-slate-400">Revenue work OS</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#030407]/84 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.06] p-1 shadow-[0_18px_45px_rgba(0,0,0,0.22)] lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-full px-4 py-2 text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white sm:block"
          >
            Sign in
          </Link>
          <Link
            href="/contact"
            className="hidden h-10 items-center gap-2 rounded-full bg-white px-5 text-sm font-black text-slate-950 shadow-[0_16px_34px_rgba(97,97,255,0.22)] transition hover:-translate-y-0.5 hover:bg-[#8f8fff] sm:inline-flex"
          >
            Book a Demo
            <ArrowRight data-icon="inline-end" />
          </Link>
          <details className="group relative lg:hidden">
            <summary
              aria-label="Open menu"
              className="grid size-10 cursor-pointer list-none place-items-center rounded-full border border-white/10 bg-white/[0.06] text-slate-200 marker:hidden"
            >
              <Menu className="size-5" />
            </summary>
            <div className="absolute right-0 top-12 grid w-56 gap-1 rounded-3xl border border-white/10 bg-[#07111f]/95 p-2 shadow-[0_24px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-200 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <div className="my-1 h-px bg-white/10" />
              <Link
                href="/contact"
                className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-black text-slate-950 transition hover:bg-[#8f8fff]"
              >
                Book a Demo
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const groups = [
    { title: "Company", links: [["About", "/about"], ["Contact", "/contact"], ["Book Demo", "/demo"], ["Security", "/security"]] },
    { title: "Product", links: [["Lead Research", "/lead-research"], ["Agents", "/agents"], ["Pricing", "/pricing"], ["Analytics", "/analytics"]] },
    { title: "Resources", links: [["Blog", "/blog"], ["FAQ", "/faq"], ["Use Cases", "/use-cases"], ["Demo", "/demo"]] },
    { title: "Legal", links: [["Privacy", "/privacy"], ["Terms", "/terms"], ["Responsible AI", "/responsible-ai"], ["Compliance", "/compliance"]] },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#030407]/94">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.3fr_2fr] lg:px-8">
        <div className="flex flex-col gap-5">
          <Logo />
          <p className="max-w-sm text-sm leading-6 text-slate-400">
            GrowthAgent AI gives teams an autonomous revenue operating system for research, enrichment, outreach,
            reply tracking, follow-up planning, meetings, and CRM hygiene.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Human review", "Reply aware", "Audit logs"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-bold text-slate-300">
                <CheckCircle2 className="size-3 text-[#00c875]" />
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {groups.map((group) => (
            <details key={group.title} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:border-0 sm:bg-transparent sm:p-0" open>
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-black text-white marker:hidden sm:pointer-events-none">
                {group.title}
                <span className="text-slate-500 transition group-open:rotate-45 sm:hidden">+</span>
              </summary>
              <div className="mt-3 flex flex-col gap-3">
                {group.links.map(([link, href]) => (
                  <Link key={link} href={href} className="min-h-9 text-sm font-medium text-slate-400 transition hover:text-white">
                    {link}
                  </Link>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 px-5 py-6 text-xs font-medium text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <span>GrowthAgent AI - 2026. Designed and automated by yamautomation.</span>
        <span>Built for responsible outbound automation.</span>
      </div>
    </footer>
  );
}

export function PageShell({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "growthagent-dark relative isolate min-h-screen overflow-hidden bg-[#030407] text-white",
        "bg-[radial-gradient(circle_at_16%_5%,rgba(97,97,255,0.28),transparent_30rem),radial-gradient(circle_at_82%_0%,rgba(42,117,255,0.2),transparent_32rem),radial-gradient(circle_at_72%_40%,rgba(0,200,117,0.1),transparent_28rem),linear-gradient(180deg,#030407_0%,#050712_46%,#020308_100%)]",
        className,
      )}
    >
      <DottedShaderSurface className="z-0 opacity-95" />
      <div className="relative z-10">
        <SiteHeader />
        {children}
        <SiteFooter />
      </div>
      <div className="fixed inset-x-3 bottom-3 z-50 sm:hidden">
        <Link
          href="/contact"
          className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white text-sm font-black text-slate-950 shadow-[0_18px_60px_rgba(0,0,0,0.48)]"
        >
          Book a Demo
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}

export function SectionIntro({
  title,
  text,
  align = "center",
  eyebrow,
}: {
  title: string;
  text: string;
  align?: "center" | "left";
  eyebrow?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4", align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl")}>
      {eyebrow ? (
        <span className={cn("text-xs font-black uppercase tracking-[0.18em] text-[#6161ff]", align === "center" ? "mx-auto" : "")}>
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-balance text-3xl font-black tracking-tight text-white sm:text-5xl">{title}</h2>
      <p className="text-base leading-7 text-slate-300 sm:text-lg">{text}</p>
    </div>
  );
}

export function Pill({
  children,
  tone = "blue",
  className,
}: {
  children: React.ReactNode;
  tone?: "blue" | "green" | "red" | "yellow";
  className?: string;
}) {
  const tones = {
    blue: "border-[#6161ff]/30 bg-[#6161ff]/14 text-[#b8bdff]",
    green: "border-[#00c875]/30 bg-[#00c875]/12 text-[#8ff8c7]",
    red: "border-[#ff5a5f]/30 bg-[#ff5a5f]/12 text-[#ffb4b6]",
    yellow: "border-[#ffcb00]/30 bg-[#ffcb00]/14 text-[#ffe58a]",
  };
  return <span className={cn("rounded-full border px-3 py-1 text-xs font-black", tones[tone], className)}>{children}</span>;
}

export function ColorBand({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <SpotlightCard
      glowColor="purple"
      className={cn(
        "rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </SpotlightCard>
  );
}

export function SparkleBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-slate-200 shadow-[0_18px_45px_rgba(0,0,0,0.22)]">
      <Sparkles className="size-4 text-[#ffcb00]" />
      {children}
    </span>
  );
}
