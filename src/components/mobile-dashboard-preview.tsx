"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  CalendarCheck,
  CheckCircle2,
  Database,
  MailCheck,
  Search,
  Sparkles,
} from "lucide-react";

import { cn } from "@/lib/utils";

const mobileTabs = [
  {
    label: "Research",
    value: "218",
    text: "New accounts found",
    icon: Search,
    color: "#6161ff",
  },
  {
    label: "Enrich",
    value: "146",
    text: "Contacts checked",
    icon: Database,
    color: "#00c875",
  },
  {
    label: "Outreach",
    value: "84",
    text: "Drafts ready",
    icon: MailCheck,
    color: "#ffcb00",
  },
  {
    label: "Replies",
    value: "31",
    text: "Need review",
    icon: CalendarCheck,
    color: "#ff5a5f",
  },
];

const mobileRows = [
  ["Meridian Center", "92", "Ready"],
  ["Northstar Debate", "87", "Drafted"],
  ["Global Youth Org", "81", "Interested"],
];

export function MobileDashboardPreview({ className }: { className?: string }) {
  const [active, setActive] = useState(0);
  const activeTab = mobileTabs[active];
  const ActiveIcon = activeTab.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={cn("relative mx-auto w-full max-w-sm", className)}
    >
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#6161ff]/20 via-[#00c875]/10 to-[#ffcb00]/20 blur-2xl" />
      <div className="relative overflow-hidden rounded-[1.7rem] border border-white/12 bg-[#07111f]/88 p-3 shadow-[0_28px_80px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-[#ff5a5f]" />
            <span className="size-2.5 rounded-full bg-[#ffcb00]" />
            <span className="size-2.5 rounded-full bg-[#00c875]" />
          </div>
          <span className="rounded-full border border-[#00c875]/25 bg-[#00c875]/12 px-3 py-1 text-[10px] font-black text-[#8ff8c7]">
            7 live
          </span>
        </div>

        <div className="py-4">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
            Agent command
          </p>
          <h3 className="mt-2 text-2xl font-black leading-tight text-white">
            Mobile control room
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Swipe through agent status, open replies, and review the next safe action.
          </p>
        </div>

        <div className="scrollbar-none -mx-1 flex snap-x gap-2 overflow-x-auto px-1 pb-2">
          {mobileTabs.map((tab, index) => {
            const Icon = tab.icon;
            const selected = active === index;

            return (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "min-w-[7.5rem] snap-start rounded-2xl border p-3 text-left transition",
                  selected
                    ? "border-white/20 bg-white/[0.08]"
                    : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]",
                )}
              >
                <Icon className="size-4" style={{ color: tab.color }} />
                <p className="mt-3 text-xl font-black text-white">{tab.value}</p>
                <p className="text-[11px] font-bold text-slate-400">{tab.label}</p>
              </button>
            );
          })}
        </div>

        <motion.div
          key={activeTab.label}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
          className="mt-2 rounded-3xl border border-white/10 bg-white/[0.05] p-4"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-black text-white">{activeTab.label} Agent</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">{activeTab.text}</p>
            </div>
            <span className="grid size-9 place-items-center rounded-2xl bg-white/[0.06]">
              <ActiveIcon className="size-4" style={{ color: activeTab.color }} />
            </span>
          </div>
        </motion.div>

        <div className="mt-3 rounded-3xl border border-white/10 bg-[#050914] p-3">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-black text-white">Priority leads</p>
            <Sparkles className="size-4 text-[#ffcb00]" />
          </div>
          <div className="space-y-2">
            {mobileRows.map(([lead, score, status]) => (
              <div key={lead} className="grid grid-cols-[1fr_auto] gap-2 rounded-2xl border border-white/8 bg-white/[0.03] p-3">
                <div>
                  <p className="truncate text-sm font-black text-white">{lead}</p>
                  <p className="text-xs text-slate-500">Score {score}</p>
                </div>
                <span className="h-fit rounded-full bg-[#00c875]/14 px-2 py-1 text-[10px] font-black text-[#8ff8c7]">
                  {status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <button
            type="button"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-white text-xs font-black text-slate-950"
          >
            <CheckCircle2 className="size-4" />
            Review
          </button>
          <button
            type="button"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] text-xs font-black text-white"
          >
            <Bot className="size-4 text-[#00c875]" />
            Run agent
          </button>
        </div>
      </div>
    </motion.div>
  );
}
