import Link from "next/link";
import { ArrowRight, CheckCircle2, Menu, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import { DottedSurface } from "@/components/ui/dotted-surface";

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
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#030407]/78 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
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
            className="inline-flex h-10 items-center gap-2 rounded-full bg-white px-5 text-sm font-black text-slate-950 shadow-[0_16px_34px_rgba(97,97,255,0.22)] transition hover:-translate-y-0.5 hover:bg-[#8f8fff]"
          >
            Book a Demo
            <ArrowRight data-icon="inline-end" />
          </Link>
          <button
            aria-label="Open menu"
            className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-slate-200 lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const groups = [
    { title: "Company", links: ["About", "Careers", "Contact", "Security"] },
    { title: "Product", links: ["Lead Research", "Outreach", "Inbox", "Analytics"] },
    { title: "Resources", links: ["Blog", "Docs", "Templates", "API"] },
    { title: "Legal", links: ["Privacy", "Terms", "DPA", "Compliance"] },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#030407]/94">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1.3fr_2fr] lg:px-8">
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
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <p className="text-sm font-black text-white">{group.title}</p>
              {group.links.map((link) => (
                <Link key={link} href="#" className="text-sm font-medium text-slate-400 transition hover:text-white">
                  {link}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 px-5 py-6 text-xs font-medium text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <span>GrowthAgent AI - 2026. Designed and automated by YAM AI.</span>
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
      <DottedSurface variant="dark" className="z-0 opacity-95" />
      <div className="relative z-10">
        <SiteHeader />
        {children}
        <SiteFooter />
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
    <div className={cn("rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl", className)}>
      {children}
    </div>
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
