import { Bot, Rocket, ShieldCheck, Users } from "lucide-react";

import { PageShell, SectionIntro } from "@/components/site-chrome";

export function AboutPage() {
  return (
    <PageShell>
      <main className="px-5 py-20 sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionIntro
            align="left"
            title="Built by a solo founder who wanted a sales team before hiring one."
            text="GrowthAgent AI started from a simple belief: small teams should be able to run disciplined, personalized, reply-aware outbound without manually living inside spreadsheets, inboxes, and CRM tabs."
          />
          <div className="glass rounded-3xl border border-slate-200 p-8">
            <p className="text-lg leading-8 text-slate-700">
              The product is designed as an AI control room where specialized agents research accounts, enrich data, write
              outreach, track replies, prepare follow-ups, and keep records clean. Humans stay in charge of risky moments,
              but the repetitive work moves to autonomous systems.
            </p>
          </div>
        </section>
        <section className="mx-auto mt-20 grid max-w-7xl gap-5 md:grid-cols-4">
          {[
            { label: "Founder-led", Icon: Users },
            { label: "Agent-native", Icon: Bot },
            { label: "Built to scale", Icon: Rocket },
            { label: "Safety first", Icon: ShieldCheck },
          ].map(({ label, Icon }) => (
            <div key={label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <Icon className="size-6 text-[#6161ff]" />
              <p className="mt-8 text-xl font-black text-slate-950">{label}</p>
              <p className="mt-3 text-sm font-medium leading-6 text-slate-600">
                A commercial direction with practical operator controls and room for enterprise hardening.
              </p>
            </div>
          ))}
        </section>
      </main>
    </PageShell>
  );
}
