"use client";

import { useState } from "react";
import { CalendarCheck, Mail, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageShell, SectionIntro } from "@/components/site-chrome";

export function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <main className="px-5 py-20 sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-8">
            <SectionIntro
              align="left"
              title="Book a demo."
              text="Tell us what your business sells, who you want to reach, and what workflow you want to automate."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <Mail className="size-5 text-[#6161ff]" />
                <p className="mt-5 font-black text-slate-950">Sales automation review</p>
                <p className="mt-2 text-sm font-medium text-slate-600">We map your current outbound process and find automation gaps.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <CalendarCheck className="size-5 text-[#00c875]" />
                <p className="mt-5 font-black text-slate-950">Demo workflow</p>
                <p className="mt-2 text-sm font-medium text-slate-600">See research, enrichment, outreach, replies, and CRM actions.</p>
              </div>
            </div>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
            className="glass flex flex-col gap-4 rounded-3xl border border-slate-200 p-6"
          >
            <Input placeholder="Work email" type="email" required />
            <Input placeholder="Company name" required />
            <Input placeholder="What do you sell?" />
            <Textarea placeholder="Describe your target audience and current outbound process" rows={8} />
            <Button type="submit" size="lg">
              <Send data-icon="inline-start" />
              Request demo
            </Button>
            {sent ? <p className="text-sm font-bold text-[#05603a]">Demo request captured. This form is ready to connect to your CRM or email workflow.</p> : null}
          </form>
        </section>
      </main>
    </PageShell>
  );
}
