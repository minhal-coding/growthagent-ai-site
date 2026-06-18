"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play, Plus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardPreview } from "@/components/dashboard-preview";
import { BorderTrail } from "@/components/ui/border-trail";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import DisplayCards from "@/components/ui/display-cards";
import { AgentProductRail } from "@/components/ui/agent-product-rail";
import { OrbitingAvatarsCTA } from "@/components/ui/orbiting-avatars";
import { ColorBand, PageShell, Pill, SectionIntro, SparkleBadge } from "@/components/site-chrome";
import {
  agents,
  benefits,
  blogPosts,
  faqs,
  features,
  logos,
  problems,
  securityPoints,
  testimonials,
  useCases,
} from "@/components/site-data";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

const mondayColors = ["#6161ff", "#00c875", "#ffcb00", "#ff5a5f", "#00d2ff"];

const productWorkflow = [
  {
    title: "Define the buyer",
    description: "Describe the audience, geography, offer, exclusions, and what a qualified lead should look like.",
    eyebrow: "Target",
  },
  {
    title: "Research the market",
    description: "Agents scan public sources, find relevant organizations, capture source evidence, and score fit.",
    eyebrow: "Research",
  },
  {
    title: "Enrich the account",
    description: "The system adds websites, contact pages, emails, role context, and confidence notes before outreach.",
    eyebrow: "Enrich",
  },
  {
    title: "Draft outreach",
    description: "Personalized emails are written with brand context, clear next steps, and human approval gates.",
    eyebrow: "Draft",
  },
  {
    title: "Track replies",
    description: "Inbound responses are captured, classified, and used to pause follow-ups before the system acts again.",
    eyebrow: "Reply",
  },
  {
    title: "Book meetings",
    description: "Interested replies become meeting-ready opportunities with suggested responses and CRM updates.",
    eyebrow: "Close",
  },
];

export function MarketingHome() {
  return (
    <PageShell>
      <main>
        <section className="relative px-5 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-18">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.88fr_1.12fr]">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-8"
            >
              <SparkleBadge>Autonomous sales team in one workspace</SparkleBadge>
              <div className="space-y-5">
                <h1 className="text-balance text-5xl font-black tracking-tight text-slate-950 sm:text-7xl lg:text-8xl">
                  Your AI-Powered <span className="rounded-[1rem] bg-[#ffcb00] px-3 text-slate-950">Sales Team.</span>
                </h1>
                <p className="max-w-2xl text-lg font-medium leading-8 text-slate-600 sm:text-xl">
                  GrowthAgent AI researches leads, personalizes outreach, tracks replies, and automates follow-ups so
                  your business can turn prospects into conversations automatically.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-black text-white shadow-[0_16px_30px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-[#6161ff]"
                >
                  Book a Demo
                  <ArrowRight data-icon="inline-end" />
                </Link>
                <Link
                  href="#showcase"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-sm font-black text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300"
                >
                  <Play data-icon="inline-start" />
                  Watch Demo
                </Link>
              </div>
              <div className="grid max-w-xl grid-cols-3 gap-3">
                {[
                  ["24/7", "agent operations", "#6161ff"],
                  ["9", "specialized agents", "#00c875"],
                  ["1", "command center", "#ffcb00"],
                ].map(([value, label, color]) => (
                  <div key={label} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-3xl font-black text-slate-950" style={{ color }}>{value}</p>
                    <p className="mt-1 text-xs font-bold text-slate-500">{label}</p>
                  </div>
                ))}
              </div>
              <div className="hidden h-56 items-center justify-start xl:flex">
                <DisplayCards />
              </div>
            </motion.div>
            <DashboardPreview />
          </div>
        </section>

        <section className="px-5 py-6 sm:px-6 lg:px-8">
          <ColorBand className="mx-auto max-w-7xl rounded-[1.75rem]">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <p className="text-sm font-black text-slate-500">Trusted by modern growth teams, event operators, and founders</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:flex lg:items-center lg:gap-3">
                {logos.map((logo, index) => (
                  <span
                    key={logo}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-black text-slate-600"
                    style={{ borderTopColor: mondayColors[index % mondayColors.length] }}
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </ColorBand>
        </section>

        <section id="product" className="px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr]">
            <SectionIntro
              align="left"
              eyebrow="The problem"
              title="Manual outbound is broken."
              text="Most teams do not lose because they lack prospects. They lose because research, follow-up, reply handling, and CRM hygiene are scattered across too many tabs."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {problems.map((problem, index) => (
                <Card key={problem} className="rounded-3xl border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-slate-950">
                      <span
                        className="grid size-10 place-items-center rounded-2xl text-sm font-black text-white"
                        style={{ backgroundColor: mondayColors[index % mondayColors.length] }}
                      >
                        {index + 1}
                      </span>
                      {problem}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm font-medium leading-6 text-slate-600">
                    GrowthAgent AI turns this manual work into a controlled agent workflow with clear ownership.
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-7xl">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#00c875]">Product workflow</p>
                <h3 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">Scroll the operating system.</h3>
              </div>
              <p className="max-w-xl text-sm font-medium leading-6 text-slate-400">
                A guided path from target audience to meeting-ready pipeline, built for operators who want automation with control.
              </p>
            </div>
            <AgentProductRail items={productWorkflow} colors={mondayColors} compact />
          </div>
        </section>

        <section className="px-5 py-20 sm:px-6 lg:px-8">
          <ColorBand className="mx-auto grid max-w-7xl items-center gap-10 bg-[#f6f3ff] lg:grid-cols-[1fr_1.05fr]">
            <div className="grid gap-3">
              {["Define target", "Research leads", "Enrich data", "Generate outreach", "Track replies", "Book meetings"].map((step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                  <span
                    className="grid size-11 place-items-center rounded-2xl text-sm font-black text-white"
                    style={{ backgroundColor: mondayColors[index % mondayColors.length] }}
                  >
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-black text-slate-950">{step}</p>
                    <p className="text-sm font-medium text-slate-500">Handled by specialized agents with audit trails.</p>
                  </div>
                </div>
              ))}
            </div>
            <SectionIntro
              align="left"
              eyebrow="The solution"
              title="A sales work OS, not another email tool."
              text="GrowthAgent AI coordinates research, enrichment, message generation, reply capture, follow-up planning, meeting readiness, and CRM updates inside one cheerful control room."
            />
          </ColorBand>
        </section>

        <section id="agents" className="px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Agent architecture"
              title="A network of agents working as one team."
              text="Each agent owns a specific job, shares context with the others, and reports back to the command center."
            />
            <AgentProductRail
              items={agents.map((agent) => ({
                title: agent.name,
                description: agent.description,
                icon: agent.icon,
                eyebrow: "Agent",
              }))}
              colors={mondayColors}
              className="mt-12"
            />
          </div>
        </section>

        <section id="showcase" className="px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Dashboard showcase"
              title="The dashboard your growth team actually needs."
              text="Lead database, campaigns, reply tracking, analytics, and the agent command center are built into one workflow."
            />
            <ContainerScroll
              className="mt-4 min-h-[42rem]"
              titleComponent={<Pill tone="green">Live agent workspace preview</Pill>}
            >
              <DashboardPreview />
            </ContainerScroll>
            <div className="mt-12 grid gap-5 lg:grid-cols-5">
              {["Lead database", "Campaign management", "Reply tracking", "Analytics", "Agent command center"].map((item, index) => (
                <div
                  key={item}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-8 h-2 rounded-full" style={{ backgroundColor: mondayColors[index % mondayColors.length] }} />
                  <p className="text-lg font-black text-slate-950">{item}</p>
                  <p className="mt-3 text-sm font-medium leading-6 text-slate-600">
                    Realistic operators, statuses, queues, and next actions built for repeatable outbound.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-6 lg:px-8">
          <ColorBand className="mx-auto max-w-7xl bg-[#ecfeff]">
            <SectionIntro eyebrow="How it works" title="From target market to booked conversations." text="Start with a target audience. The agent team does the operational work and asks for approval when it should." />
            <div className="mt-12 grid gap-4 md:grid-cols-5">
              {["Define target audience", "AI researches leads", "Emails are generated", "Replies are tracked", "Meetings are booked"].map((step, index) => (
                <div key={step} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="text-sm font-black" style={{ color: mondayColors[index % mondayColors.length] }}>Step {index + 1}</span>
                  <p className="mt-4 text-lg font-black text-slate-950">{step}</p>
                </div>
              ))}
            </div>
          </ColorBand>
        </section>

        <section className="px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro eyebrow="Features" title="Built for real operations." text="Everything your outbound system needs before it becomes safe enough to run every day." />
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <feature.icon className="size-6" style={{ color: mondayColors[index % mondayColors.length] }} />
                  <p className="mt-5 font-black text-slate-950">{feature.title}</p>
                  <p className="mt-2 text-sm font-medium leading-6 text-slate-600">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionIntro
              align="left"
              eyebrow="Use cases"
              title="Built for every business that depends on conversations."
              text="The platform works anywhere prospect research, outreach, follow-ups, and booked calls create revenue."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {useCases.map((item, index) => (
                <div key={item} className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                  <CheckCircle2 className="size-5" style={{ color: mondayColors[index % mondayColors.length] }} />
                  <span className="font-black text-slate-950">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro eyebrow="Benefits" title="Benefits your team feels immediately." text="Less manual busywork, more conversations, better pipeline memory, and a system that never forgets a reply." />
            <div className="mt-12 grid gap-4 md:grid-cols-5">
              {benefits.map((benefit, index) => (
                <div key={benefit.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mb-8 h-2 rounded-full" style={{ backgroundColor: mondayColors[index % mondayColors.length] }} />
                  <p className="text-lg font-black text-slate-950">{benefit.title}</p>
                  <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-6 lg:px-8">
          <ColorBand className="mx-auto max-w-7xl bg-[#fff7d6]">
            <SectionIntro eyebrow="Customer proof" title="Trusted by operators who want leverage." text="Realistic placeholders for the kind of buyers this product should win." />
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {testimonials.map((item) => (
                <Card key={item.name} className="rounded-3xl border-slate-200 bg-white shadow-sm">
                  <CardContent className="flex flex-col gap-6 pt-6">
                    <p className="text-base font-medium leading-7 text-slate-700">&ldquo;{item.quote}&rdquo;</p>
                    <div>
                      <p className="font-black text-slate-950">{item.name}</p>
                      <p className="text-sm font-medium text-slate-500">{item.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ColorBand>
        </section>

        <PricingBlock />

        <section className="px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionIntro align="left" eyebrow="Responsible automation" title="Guardrails before growth." text="Outbound automation needs controls. GrowthAgent AI is built around human review, suppression checks, audit logs, and reply-aware behavior." />
            <div className="grid gap-4 sm:grid-cols-2">
              {securityPoints.map((point, index) => (
                <div key={point.title} className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                  <point.icon className="size-5" style={{ color: mondayColors[index % mondayColors.length] }} />
                  <span className="text-sm font-black text-slate-950">{point.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQBlock />
        <BlogStrip />

        <section className="px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <OrbitingAvatarsCTA
              title="Turn your idea into a sales engine."
              description="Show the product, explain the agent team, and book serious conversations with companies that need sales automation."
              buttonText="Request Demo"
              avatars={[
                { label: "CEO", color: "#ffcb00" },
                { label: "CRM", color: "#00d2ff" },
                { label: "BD", color: "#00c875" },
                { label: "OPS", color: "#ff5a5f" },
                { label: "AI", color: "#c7b8ff" },
                { label: "REV", color: "#f8a6ff" },
              ]}
            />
          </div>
        </section>
      </main>
    </PageShell>
  );
}

export function PricingBlock() {
  const plans = [
    ["Starter", "$99", "For solo founders testing agentic outbound.", ["1 workspace", "500 researched leads", "Human approval", "Basic analytics"]],
    ["Growth", "$299", "For teams running weekly campaigns.", ["5 users", "5,000 researched leads", "Reply capture", "Meeting workflow"]],
    ["Enterprise", "Custom", "For companies needing controls and integrations.", ["SSO", "Dedicated workspace", "CRM integrations", "Custom compliance"]],
  ];

  return (
    <section className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Pricing" title="Pricing that grows with your pipeline." text="Start small, prove the workflow, then scale into a full sales automation layer." />
        <div className="mt-6 flex justify-center">
          <div className="rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            <button className="rounded-full bg-slate-950 px-5 py-2 text-sm font-black text-white">Monthly</button>
            <button className="px-5 py-2 text-sm font-black text-slate-500">Yearly</button>
          </div>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card key={plan[0] as string} className={`relative overflow-hidden rounded-[2rem] border-slate-200 bg-white shadow-sm ${index === 1 ? "ring-4 ring-[#6161ff]/18" : ""}`}>
              {index === 1 ? <BorderTrail /> : null}
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-slate-950">{plan[0]}</CardTitle>
                  {index === 1 ? <Pill>Popular</Pill> : null}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <div>
                  <p className="text-4xl font-black text-slate-950">{plan[1]}</p>
                  <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{plan[2]}</p>
                </div>
                <div className="flex flex-col gap-3">
                  {(plan[3] as string[]).map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <CheckCircle2 className="size-4 text-[#00c875]" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white transition hover:bg-[#6161ff]">
                  Start with {plan[0]}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQBlock() {
  return (
    <section className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionIntro eyebrow="FAQ" title="Questions companies ask before trusting an AI sales team." text="Twenty practical answers for buyers, founders, and operators." />
        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0} className="group border-b border-slate-200 px-3 py-4 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-black text-slate-950">
                {question}
                <Plus className="size-4 text-slate-400 transition group-open:rotate-45" />
              </summary>
              <p className="mt-4 text-sm font-medium leading-6 text-slate-600">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogStrip() {
  return (
    <section className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionIntro align="left" eyebrow="Blog" title="From the blog" text="Modern outbound is becoming an agent operations problem." />
          <Link href="/blog" className="text-sm font-black text-[#6161ff] transition hover:text-slate-950">
            View all articles
          </Link>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Link key={post.title} href="/blog" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <Badge variant="secondary" className="rounded-full" style={{ backgroundColor: `${mondayColors[index % mondayColors.length]}22`, color: mondayColors[index % mondayColors.length] }}>
                {post.category}
              </Badge>
              <h3 className="mt-5 text-xl font-black text-slate-950">{post.title}</h3>
              <p className="mt-4 text-sm font-medium leading-6 text-slate-600">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
