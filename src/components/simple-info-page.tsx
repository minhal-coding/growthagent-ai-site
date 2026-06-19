import Link from "next/link";
import { ArrowRight, CheckCircle2, type LucideIcon } from "lucide-react";

import { GlowCard } from "@/components/ui/glow-card";
import { PageShell, Pill, SectionIntro } from "@/components/site-chrome";

type Highlight = {
  title: string;
  text: string;
  icon: LucideIcon;
};

type SimpleInfoPageProps = {
  eyebrow: string;
  title: string;
  text: string;
  highlights: Highlight[];
  bullets?: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

const colors = ["#6161ff", "#00c875", "#ffcb00", "#00d2ff", "#ff5a5f", "#c7b8ff"];

export function SimpleInfoPage({
  eyebrow,
  title,
  text,
  highlights,
  bullets = [],
  ctaLabel = "Book a Demo",
  ctaHref = "/contact",
}: SimpleInfoPageProps) {
  return (
    <PageShell>
      <main className="px-5 py-18 sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="sticky top-24 flex flex-col gap-7">
            <Pill tone="green">{eyebrow}</Pill>
            <SectionIntro align="left" title={title} text={text} />
            <Link
              href={ctaHref}
              className="inline-flex h-12 w-fit items-center gap-2 rounded-full bg-white px-6 text-sm font-black text-slate-950 shadow-[0_16px_34px_rgba(97,97,255,0.22)] transition hover:-translate-y-0.5 hover:bg-[#8f8fff]"
            >
              {ctaLabel}
              <ArrowRight data-icon="inline-end" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {highlights.map((item, index) => (
              <GlowCard key={item.title} glowColor={index % 3 === 0 ? "purple" : index % 3 === 1 ? "green" : "orange"} className="p-6">
                <item.icon className="size-6" style={{ color: colors[index % colors.length] }} />
                <p className="mt-6 text-xl font-black text-white">{item.title}</p>
                <p className="mt-3 text-sm font-medium leading-6 text-slate-400">{item.text}</p>
              </GlowCard>
            ))}
            {bullets.length ? (
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 md:col-span-2">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">What this includes</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {bullets.map((bullet, index) => (
                    <div key={bullet} className="flex items-center gap-3 text-sm font-bold text-slate-200">
                      <CheckCircle2 className="size-4" style={{ color: colors[index % colors.length] }} />
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
