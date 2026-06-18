"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageShell, Pill, SectionIntro } from "@/components/site-chrome";
import { FAQBlock } from "@/components/marketing-home";

const plans = [
  {
    name: "Starter",
    monthly: "$99",
    yearly: "$79",
    description: "For founders testing autonomous sales workflows.",
    features: ["1 workspace", "500 leads per month", "Campaign drafts", "Human approval gates", "Basic analytics"],
  },
  {
    name: "Growth",
    monthly: "$299",
    yearly: "$239",
    description: "For teams that want repeatable outbound operations.",
    features: ["5 users", "5,000 leads per month", "Reply capture", "Follow-up queue", "Meeting workflow", "Priority support"],
  },
  {
    name: "Enterprise",
    monthly: "Custom",
    yearly: "Custom",
    description: "For companies with security, CRM, and compliance needs.",
    features: ["SSO", "Dedicated workspace", "CRM integrations", "Custom agents", "Security review", "Implementation support"],
  },
];

export function PricingPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <PageShell>
      <main className="px-5 py-20 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-7xl">
          <SectionIntro
            title="Pricing for autonomous growth teams."
            text="Start with founder-led automation, then scale into a secure AI sales operating system for your team."
          />
          <div className="mt-8 flex justify-center">
            <div className="rounded-full border border-slate-200 bg-white p-1 shadow-sm">
              <button onClick={() => setYearly(false)} className={`rounded-full px-5 py-2 text-sm font-black ${!yearly ? "bg-slate-950 text-white" : "text-slate-500"}`}>
                Monthly
              </button>
              <button onClick={() => setYearly(true)} className={`rounded-full px-5 py-2 text-sm font-black ${yearly ? "bg-slate-950 text-white" : "text-slate-500"}`}>
                Yearly
              </button>
            </div>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <Card key={plan.name} className={`rounded-[2rem] border-slate-200 bg-white shadow-sm ${index === 1 ? "ring-4 ring-[#6161ff]/18" : ""}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{plan.name}</CardTitle>
                    {index === 1 ? <Pill>Best value</Pill> : null}
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-7">
                  <div>
                    <p className="text-5xl font-black text-slate-950">{yearly ? plan.yearly : plan.monthly}</p>
                    <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{plan.description}</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                        <CheckCircle2 className="size-4 text-[#00c875]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white transition hover:bg-[#6161ff]">
                    Book a Demo
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <FAQBlock />
      </main>
    </PageShell>
  );
}
