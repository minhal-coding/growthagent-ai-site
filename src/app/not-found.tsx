import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

import { PageShell } from "@/components/site-chrome";

export default function NotFound() {
  return (
    <PageShell>
      <main className="px-5 py-24 sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-5xl gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#6161ff]">404</p>
            <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-950">This page left the pipeline.</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The route you opened does not exist, but the GrowthAgent AI workspace is still ready to research leads,
              draft outreach, and move conversations forward.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/" className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-slate-950 px-5 text-sm font-black text-white transition hover:bg-[#6161ff]">
                <ArrowLeft data-icon="inline-start" />
                Back home
              </Link>
              <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-black text-slate-950 transition hover:bg-slate-50">
                Book a demo
              </Link>
            </div>
          </div>
          <div className="grid place-items-center rounded-[1.5rem] bg-[#f6f3ff] p-8">
            <div className="relative size-64">
              <div className="absolute inset-0 rounded-full border border-dashed border-[#6161ff]/30" />
              <div className="absolute inset-8 rounded-full border border-dashed border-[#00c875]/40" />
              <div className="absolute left-1/2 top-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-3xl bg-white shadow-xl">
                <Search className="size-9 text-[#6161ff]" />
              </div>
              {["Lead", "Reply", "CRM", "Demo"].map((item, index) => (
                <span
                  key={item}
                  className="absolute rounded-full px-3 py-1 text-xs font-black text-slate-950 shadow-sm"
                  style={{
                    backgroundColor: ["#ffcb00", "#00c875", "#00d2ff", "#ff5a5f"][index],
                    left: ["8%", "68%", "9%", "63%"][index],
                    top: ["14%", "22%", "72%", "74%"][index],
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
