"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Play, Plus, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { DashboardPreview } from "@/components/dashboard-preview";
import { BorderTrail } from "@/components/ui/border-trail";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { GlowCard } from "@/components/ui/glow-card";
import { OrbitingAvatarsCTA } from "@/components/ui/orbiting-avatars";
import { ShinyLink } from "@/components/ui/shiny-button";
import { TextScramble } from "@/components/ui/text-scramble";
import { ColorBand, PageShell, Pill, SectionIntro, SparkleBadge } from "@/components/site-chrome";
import {
  agents,
  blogPosts,
  faqs,
  features,
  logos,
  testimonials,
  useCases,
} from "@/components/site-data";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

const mondayColors = ["#6161ff", "#00c875", "#ffcb00", "#ff5a5f", "#00d2ff"];

export function MarketingHome() {
  const coreAgents = agents.slice(0, 6);
  const coreFeatures = features.slice(0, 4);

  return (
    <PageShell>
      <main>
        <section className="relative px-5 pb-12 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-18">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-7"
            >
              <SparkleBadge>
                <TextScramble className="font-mono" speed={0.02}>
                  AI revenue automation for modern teams
                </TextScramble>
              </SparkleBadge>
              <div className="space-y-5">
                <h1 className="max-w-4xl text-balance text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl">
                  Your AI-powered sales team.
                </h1>
                <p className="max-w-2xl text-lg font-medium leading-8 text-slate-300 sm:text-xl">
                  Research prospects, enrich contacts, draft outreach, track replies, and move qualified conversations
                  toward meetings from one clean command center.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ShinyLink href="/contact">
                  Book a Demo
                </ShinyLink>
                <Link
                  href="#showcase"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-sm font-black text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300"
                >
                  <Play data-icon="inline-start" />
                  Watch Demo
                </Link>
              </div>
              <div className="grid max-w-xl grid-cols-3 gap-3 pt-1">
                {[
                  ["40", "sample leads", "#6161ff"],
                  ["9", "agent roles", "#00c875"],
                  ["1", "control room", "#ffcb00"],
                ].map(([value, label, color], index) => (
                  <GlowCard key={label} glowColor={index === 0 ? "purple" : index === 1 ? "green" : "orange"} className="p-4">
                    <p className="text-3xl font-black" style={{ color }}>{value}</p>
                    <p className="mt-1 text-xs font-bold text-slate-400">{label}</p>
                  </GlowCard>
                ))}
              </div>
            </motion.div>
            <DashboardPreview />
          </div>
        </section>

        <section className="px-5 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl border-y border-white/10 py-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <p className="text-sm font-black text-slate-400">Built for teams that sell through conversations</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:flex lg:items-center lg:gap-2">
                {logos.map((logo, index) => (
                  <span
                    key={logo}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-black text-slate-300"
                    style={{ borderTopColor: mondayColors[index % mondayColors.length] }}
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="product" className="px-5 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr]">
            <SectionIntro
              align="left"
              eyebrow="What it replaces"
              title="Stop stitching sales work across five tools."
              text="GrowthAgent AI keeps the core outbound loop in one place: find leads, understand them, write the message, watch replies, and prepare the next action."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {coreFeatures.map((feature, index) => (
                <GlowCard key={feature.title} glowColor={index % 2 === 0 ? "purple" : "green"} className="p-6">
                  <feature.icon className="size-6" style={{ color: mondayColors[index % mondayColors.length] }} />
                  <p className="mt-5 text-lg font-black text-white">{feature.title}</p>
                  <p className="mt-2 text-sm font-medium leading-6 text-slate-400">{feature.text}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        <section id="agents" className="px-5 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Agent architecture"
              title="A small sales team made of focused agents."
              text="Each agent owns one job. The command center shows what is ready, blocked, or waiting for human review."
            />
            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {coreAgents.map((agent, index) => (
                <GlowCard key={agent.name} glowColor={index % 3 === 0 ? "purple" : index % 3 === 1 ? "green" : "orange"} className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <agent.icon className="size-6" style={{ color: mondayColors[index % mondayColors.length] }} />
                    <Pill tone={index % 3 === 1 ? "green" : "blue"}>Agent</Pill>
                  </div>
                  <p className="mt-7 text-lg font-black text-white">{agent.name}</p>
                  <p className="mt-2 text-sm font-medium leading-6 text-slate-400">{agent.description}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        <section id="showcase" className="px-5 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Product preview"
              title="The command center stays simple."
              text="A clear view of lead research, campaign drafts, reply status, and the actions that need approval."
            />
            <ContainerScroll
              className="mt-4 min-h-[42rem]"
              titleComponent={<Pill tone="green">Live agent workspace preview</Pill>}
            >
              <DashboardPreview />
            </ContainerScroll>
          </div>
        </section>

        <section id="use-cases" className="px-5 py-16 sm:px-6 lg:px-8">
          <ColorBand className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionIntro
              align="left"
              eyebrow="Use cases"
              title="For businesses that need more qualified conversations."
              text="Start with conferences and events, then expand into agencies, SaaS, education, consulting, and training companies."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {useCases.map((item, index) => (
                <div key={item} className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.05] p-4">
                  <CheckCircle2 className="size-5" style={{ color: mondayColors[index % mondayColors.length] }} />
                  <span className="font-black text-white">{item}</span>
                </div>
              ))}
            </div>
          </ColorBand>
        </section>

        <section className="px-5 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <OrbitingAvatarsCTA
              title="Ready to show this to a real customer?"
              description="Book a demo page, explain the agent system, and turn the product into a clearer sales story."
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

export function TestimonialsBlock() {
  return (
    <section id="faq" className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <SectionIntro
            align="left"
            eyebrow="Customer proof"
            title="Operators trust it because every agent leaves a trail."
            text="Realistic buyer stories for the kind of teams GrowthAgent AI is built to help: event operators, education businesses, agencies, and founders who need sales leverage without losing control."
          />
          <div className="grid gap-3 rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:grid-cols-3">
            {[
              ["41%", "more replies"],
              ["8 hrs", "saved weekly"],
              ["0", "blind follow-ups"],
            ].map(([value, label], index) => (
              <div key={label} className="rounded-[1.4rem] border border-white/10 bg-[#07111f] p-5">
                <p className="text-3xl font-black text-white" style={{ color: mondayColors[index % mondayColors.length] }}>
                  {value}
                </p>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => {
            const color = mondayColors[index % mondayColors.length];
            const rotation = ["md:-rotate-1", "md:rotate-1", "md:-rotate-2"][index % 3];

            return (
              <article key={item.name} className={cn("group relative transition duration-300 hover:-translate-y-1 hover:rotate-0", rotation)}>
                <div
                  className="absolute inset-0 rounded-[1.7rem] border-2 bg-[#07111f] shadow-[6px_6px_0_rgba(255,255,255,0.09)] transition duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[10px_10px_0_rgba(255,255,255,0.13)]"
                  style={{ borderColor: color }}
                />
                <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0a1323] p-6">
                  <div
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 size-32 rounded-full opacity-20 blur-2xl"
                    style={{ backgroundColor: color }}
                  />
                  <div className="relative z-10 flex min-h-[21rem] flex-col justify-between gap-8">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <Star key={starIndex} className="size-4 fill-current" style={{ color }} />
                          ))}
                        </div>
                        <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-slate-300">
                          Operator
                        </span>
                      </div>
                      <p className="text-lg font-semibold leading-8 text-white">&ldquo;{item.quote}&rdquo;</p>
                    </div>
                    <div className="flex items-center gap-4 border-t border-white/10 pt-5">
                      <span
                        className="grid size-12 place-items-center rounded-2xl text-sm font-black text-white"
                        style={{ backgroundColor: color }}
                      >
                        {item.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")}
                      </span>
                      <div>
                        <p className="font-black text-white">{item.name}</p>
                        <p className="text-sm font-medium text-slate-400">{item.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PricingBlock() {
  const [yearly, setYearly] = useState(false);
  const plans = [
    ["Starter", "$99", "$79", "For solo founders testing agentic outbound.", ["1 workspace", "500 researched leads", "Human approval", "Basic analytics"]],
    ["Growth", "$299", "$239", "For teams running weekly campaigns.", ["5 users", "5,000 researched leads", "Reply capture", "Meeting workflow"]],
    ["Enterprise", "Custom", "Custom", "For companies needing controls and integrations.", ["SSO", "Dedicated workspace", "CRM integrations", "Custom compliance"]],
  ];

  return (
    <section className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Pricing" title="Pricing that grows with your pipeline." text="Start small, prove the workflow, then scale into a full sales automation layer." />
        <div className="mt-6 flex justify-center">
          <div className="rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={cn("rounded-full px-5 py-2 text-sm font-black transition", !yearly ? "bg-slate-950 text-white" : "text-slate-500 hover:text-slate-950")}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={cn("rounded-full px-5 py-2 text-sm font-black transition", yearly ? "bg-slate-950 text-white" : "text-slate-500 hover:text-slate-950")}
            >
              Yearly
            </button>
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
                  <p className="text-4xl font-black text-slate-950">{yearly ? plan[2] : plan[1]}</p>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                    {plan[0] === "Enterprise" ? "Tailored plan" : yearly ? "per month, billed yearly" : "per month"}
                  </p>
                  <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{plan[3]}</p>
                </div>
                <div className="flex flex-col gap-3">
                  {(plan[4] as string[]).map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <CheckCircle2 className="size-4 text-[#00c875]" />
                      {feature}
                    </div>
                  ))}
                </div>
                <ShinyLink href="/contact" className="h-11 bg-slate-950 text-white shadow-none hover:shadow-[0_18px_50px_rgba(97,97,255,0.24)]">
                  Start with {plan[0]}
                </ShinyLink>
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
