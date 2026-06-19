"use client";

import { PageShell } from "@/components/site-chrome";
import { FAQBlock } from "@/components/marketing-home";
import { PricingContainer, type PricingPlan } from "@/components/ui/pricing-container";

const plans: PricingPlan[] = [
  {
    name: "Starter",
    monthlyPrice: 99,
    yearlyPrice: 79,
    description: "For founders testing autonomous sales workflows.",
    features: ["1 workspace", "500 leads per month", "Campaign drafts", "Human approval gates", "Basic analytics"],
    accent: "purple",
  },
  {
    name: "Growth",
    monthlyPrice: 299,
    yearlyPrice: 239,
    description: "For teams that want repeatable outbound operations.",
    features: ["5 users", "5,000 leads per month", "Reply capture", "Follow-up queue", "Meeting workflow", "Priority support"],
    isPopular: true,
    accent: "green",
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    description: "For companies with security, CRM, and compliance needs.",
    features: ["SSO", "Dedicated workspace", "CRM integrations", "Custom agents", "Security review", "Implementation support"],
    accent: "blue",
  },
];

export function PricingPage() {
  return (
    <PageShell>
      <main>
        <PricingContainer plans={plans} />
        <FAQBlock />
      </main>
    </PageShell>
  );
}
