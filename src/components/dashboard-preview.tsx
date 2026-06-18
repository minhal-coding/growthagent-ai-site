"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Bot,
  CalendarCheck,
  CheckCircle2,
  Database,
  MailCheck,
  MessageSquareReply,
  Sparkles,
} from "lucide-react";

const columns = [
  { label: "Research", color: "bg-[#6161ff]", count: 218 },
  { label: "Enrich", color: "bg-[#00c875]", count: 146 },
  { label: "Draft", color: "bg-[#ffcb00]", count: 84 },
  { label: "Reply", color: "bg-[#ff5a5f]", count: 31 },
];

const rows = [
  { company: "Meridian Center", owner: "Research Agent", score: "92", status: "Ready" },
  { company: "Northstar Debate", owner: "Enrichment Agent", score: "87", status: "Drafted" },
  { company: "Global Youth Org", owner: "Reply Agent", score: "81", status: "Interested" },
  { company: "Future Leaders Hub", owner: "Meeting Agent", score: "78", status: "Call" },
];

export function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
    >
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[#6161ff]/20 via-[#00c875]/10 to-[#ffcb00]/20 blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_28px_90px_rgba(15,23,42,0.18)]">
        <div className="rounded-[1.5rem] border border-slate-200 bg-[#f8fafc]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-[#ff5a5f]" />
              <span className="size-3 rounded-full bg-[#ffcb00]" />
              <span className="size-3 rounded-full bg-[#00c875]" />
              <span className="ml-3 text-xs font-black uppercase tracking-[0.16em] text-slate-500">Agent board</span>
            </div>
            <div className="rounded-full bg-[#00c875]/15 px-3 py-1 text-xs font-black text-[#05603a]">
              7 automations live
            </div>
          </div>

          <div className="grid gap-3 p-4 lg:grid-cols-[0.75fr_1.45fr_0.8fr]">
            <aside className="space-y-3">
              {[
                { name: "Research", text: "Finding accounts", Icon: Activity, color: "text-[#6161ff]" },
                { name: "Enrichment", text: "Contact evidence", Icon: Database, color: "text-[#00c875]" },
                { name: "Outreach", text: "Approval safe", Icon: MailCheck, color: "text-[#ff5a5f]" },
              ].map(({ name, text, Icon, color }) => (
                <motion.div
                  key={name}
                  whileHover={{ y: -2 }}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <Icon className={`size-5 ${color}`} />
                    <span className="text-xs font-black text-[#00a36c]">live</span>
                  </div>
                  <p className="text-sm font-black text-slate-950">{name} Agent</p>
                  <p className="mt-1 text-xs font-medium text-slate-500">{text}</p>
                </motion.div>
              ))}
            </aside>

            <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-slate-950">Revenue Pipeline</p>
                  <p className="text-xs font-medium text-slate-500">Leads, replies, next actions, and meetings</p>
                </div>
                <Sparkles className="size-5 text-[#ffcb00]" />
              </div>
              <div className="grid gap-3 sm:grid-cols-4">
                {columns.map((column) => (
                  <div key={column.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                    <div className={`mb-3 h-2 rounded-full ${column.color}`} />
                    <p className="text-2xl font-black text-slate-950">{column.count}</p>
                    <p className="text-xs font-bold text-slate-500">{column.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
                <div className="grid grid-cols-4 bg-slate-50 px-3 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-slate-400">
                  <span>Lead</span>
                  <span>Owner</span>
                  <span>Score</span>
                  <span>Status</span>
                </div>
                {rows.map((row) => (
                  <div key={row.company} className="grid grid-cols-4 border-t border-slate-200 px-3 py-3 text-xs">
                    <span className="truncate font-black text-slate-950">{row.company}</span>
                    <span className="truncate font-medium text-slate-500">{row.owner}</span>
                    <span className="font-black text-[#6161ff]">{row.score}</span>
                    <span className="w-fit rounded-full bg-[#00c875]/14 px-2 py-1 font-black text-[#05603a]">{row.status}</span>
                  </div>
                ))}
              </div>
            </section>

            <aside className="space-y-3">
              {[
                { title: "Reply captured", text: "Follow-up paused", Icon: MessageSquareReply, color: "text-[#6161ff]" },
                { title: "Meeting ready", text: "Intent detected", Icon: CalendarCheck, color: "text-[#00c875]" },
                { title: "CRM synced", text: "Audit trail saved", Icon: CheckCircle2, color: "text-[#ffcb00]" },
              ].map(({ title, text, Icon, color }) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="mb-3 flex items-center gap-2 text-sm font-black text-slate-950">
                    <Icon className={`size-5 ${color}`} />
                    {title}
                  </div>
                  <p className="text-xs font-medium leading-5 text-slate-500">{text}</p>
                </div>
              ))}
              <div className="rounded-2xl bg-slate-950 p-4 text-white">
                <div className="mb-3 flex items-center gap-2 text-sm font-black">
                  <Bot className="size-5 text-[#00c875]" />
                  Next action
                </div>
                <p className="text-xs leading-5 text-slate-300">Review 3 interested replies before more automation.</p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
