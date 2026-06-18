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
        <span className="block text-sm font-black tracking-tight text-slate-950">GrowthAgent AI</span>
        <span className="block text-[11px] font-semibold text-slate-500">Revenue work OS</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/82 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-sm lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-full px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-100 sm:block"
          >
            Sign in
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-slate-950 px-5 text-sm font-black text-white shadow-[0_12px_24px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-[#6161ff]"
          >
            Book a Demo
            <ArrowRight data-icon="inline-end" />
          </Link>
          <button
            aria-label="Open menu"
            className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 lg:hidden"
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
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1.3fr_2fr] lg:px-8">
        <div className="flex flex-col gap-5">
          <Logo />
          <p className="max-w-sm text-sm leading-6 text-slate-600">
            GrowthAgent AI gives teams an autonomous revenue operating system for research, enrichment, outreach,
            reply tracking, follow-up planning, meetings, and CRM hygiene.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Human review", "Reply aware", "Audit logs"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                <CheckCircle2 className="size-3 text-[#00c875]" />
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <p className="text-sm font-black text-slate-950">{group.title}</p>
              {group.links.map((link) => (
                <Link key={link} href="#" className="text-sm font-medium text-slate-500 transition hover:text-slate-950">
                  {link}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-slate-200 px-5 py-6 text-xs font-medium text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
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
        "relative isolate min-h-screen overflow-hidden bg-[#f7f7fb] text-slate-950",
        "bg-[radial-gradient(circle_at_15%_10%,rgba(97,97,255,0.16),transparent_28%),radial-gradient(circle_at_84%_8%,rgba(0,200,117,0.14),transparent_24%),linear-gradient(180deg,#ffffff_0%,#f7f7fb_38%,#ffffff_100%)]",
        className,
      )}
    >
      <DottedSurface className="z-0 opacity-80" />
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
      <h2 className="text-balance text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">{title}</h2>
      <p className="text-base leading-7 text-slate-600 sm:text-lg">{text}</p>
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
    blue: "border-[#6161ff]/20 bg-[#6161ff]/10 text-[#3730a3]",
    green: "border-[#00c875]/20 bg-[#00c875]/12 text-[#05603a]",
    red: "border-[#ff5a5f]/20 bg-[#ff5a5f]/10 text-[#b42318]",
    yellow: "border-[#ffcb00]/30 bg-[#ffcb00]/18 text-[#7a4f00]",
  };
  return <span className={cn("rounded-full border px-3 py-1 text-xs font-black", tones[tone], className)}>{children}</span>;
}

export function ColorBand({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)]", className)}>
      {children}
    </div>
  );
}

export function SparkleBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-slate-700 shadow-sm">
      <Sparkles className="size-4 text-[#ffcb00]" />
      {children}
    </span>
  );
}
