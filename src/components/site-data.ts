import {
  BarChart3,
  CalendarClock,
  CheckCircle2,
  Database,
  LineChart,
  MailCheck,
  MessageSquareReply,
  Radar,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";

export const logos = ["Northstar", "Meridian", "Cobalt", "Vertex", "Atlas", "Nova"];

export const problems = [
  "Research takes time",
  "Follow-ups are forgotten",
  "CRM becomes messy",
  "Teams waste hours",
];

export const agents = [
  {
    name: "Research Agent",
    icon: Search,
    description: "Finds accounts, schools, companies, events, programs, and buying signals across public sources.",
  },
  {
    name: "Data Enrichment Agent",
    icon: Database,
    description: "Adds websites, contact pages, public emails, source evidence, fit reasons, and quality scores.",
  },
  {
    name: "Personalization Agent",
    icon: Sparkles,
    description: "Turns lead context into tailored messaging that sounds professional and relevant.",
  },
  {
    name: "Outreach Agent",
    icon: MailCheck,
    description: "Sends approved email campaigns only when sender, domain, suppression, and compliance checks pass.",
  },
  {
    name: "Reply Agent",
    icon: MessageSquareReply,
    description: "Captures replies, classifies intent, pauses sequences, and drafts the next safe response.",
  },
  {
    name: "Follow-up Agent",
    icon: RefreshCw,
    description: "Plans follow-ups, prevents duplicate outreach, and keeps every lead moving without spammy pressure.",
  },
  {
    name: "Meeting Scheduler Agent",
    icon: CalendarClock,
    description: "Detects buying intent, suggests booking steps, and prepares meeting-ready opportunities.",
  },
  {
    name: "CRM Agent",
    icon: Users,
    description: "Keeps status, messages, audit logs, owners, and next actions synced in the CRM layer.",
  },
  {
    name: "Analytics Agent",
    icon: BarChart3,
    description: "Tracks pipeline health, reply rates, campaign risk, revenue forecast, and agent performance.",
  },
];

export const features = [
  { title: "AI Lead Research", icon: Radar, text: "Autonomously finds relevant prospects from target segments." },
  { title: "Data Enrichment", icon: Database, text: "Adds emails, websites, contact pages, and source evidence." },
  { title: "Personalized Outreach", icon: Sparkles, text: "Writes brand-safe emails for each account and role." },
  { title: "Email Automation", icon: MailCheck, text: "Sends only after approval, suppression, and sender checks." },
  { title: "Follow-Up Queue", icon: RefreshCw, text: "Plans next steps and stops when a lead replies." },
  { title: "CRM Sync", icon: Workflow, text: "Keeps every lead, campaign, message, and audit event organized." },
  { title: "Meeting Scheduling", icon: CalendarClock, text: "Turns interested replies into meeting-ready opportunities." },
  { title: "Analytics Dashboard", icon: LineChart, text: "Shows pipeline, response rate, revenue forecast, and bottlenecks." },
];

export const useCases = ["Conferences", "Universities", "Events", "Consulting", "Agencies", "SaaS", "Training Companies"];

export const benefits = [
  { title: "Save Time", text: "Replace hours of manual prospecting and CRM cleanup with automated agent work." },
  { title: "Increase Replies", text: "Use contextual research and sharper personalization before sending." },
  { title: "Automate Sales", text: "Run research, outreach, reply capture, and follow-up from one command center." },
  { title: "Reduce Manual Work", text: "Let operators review the highest-risk moments instead of doing every task." },
  { title: "Scale Outreach", text: "Move from founder-led outreach to a repeatable growth system." },
];

export const testimonials = [
  {
    quote:
      "GrowthAgent AI gave our small team a pipeline rhythm we could never keep manually. The reply capture and human review flow changed everything.",
    name: "Aisha Khan",
    role: "Director, Global Youth Summit",
  },
  {
    quote:
      "The agent architecture is the reason it feels different. Research, enrichment, outreach, and CRM updates are not trapped in separate tools.",
    name: "Marcus Lee",
    role: "Founder, EventOps Studio",
  },
  {
    quote:
      "It feels like a junior growth team that never forgets the follow-up and always leaves an audit trail.",
    name: "Elena Torres",
    role: "Growth Lead, EduLaunch",
  },
];

export const faqs = [
  ["What is GrowthAgent AI?", "GrowthAgent AI is an AI sales automation platform that operates like a small autonomous sales team."],
  ["Who is it for?", "It is built for conferences, education programs, agencies, SaaS teams, events, consultants, and training companies."],
  ["Does it find leads automatically?", "Yes. It can research target audiences, discover accounts, enrich records, and add them to a pipeline."],
  ["Can it send emails?", "Yes, when a verified sender is configured and campaign safety checks pass."],
  ["Does it reply automatically?", "It can draft replies and identify intent. For safety, human approval can be required before sending."],
  ["Can it stop follow-ups when someone replies?", "Yes. Reply capture marks conversations as replied and blocks blind follow-ups."],
  ["Does it replace a CRM?", "It can maintain CRM records, but it can also sync with an existing CRM in a commercial setup."],
  ["Can I use my own brand voice?", "Yes. Campaigns can use your positioning, offer, audience, and tone rules."],
  ["What data does it store?", "It stores leads, source evidence, campaigns, messages, replies, meetings, audit logs, and settings."],
  ["Is it safe for outbound?", "It is designed with suppression lists, approval gates, audit logs, and sender checks."],
  ["Can it use Gmail?", "Yes, Gmail can be used for reply capture or sending when properly connected."],
  ["Can it use Outlook?", "Outlook support can be configured through Microsoft mail credentials or OAuth flows."],
  ["Does it need a sending domain?", "For real outreach at scale, yes. A verified domain improves deliverability and trust."],
  ["Can it schedule meetings?", "It can detect meeting intent and prepare scheduling actions. Calendar integration can be added for direct booking."],
  ["Can it work 24/7?", "Yes, with cloud workers, scheduled jobs, and mailbox sync enabled."],
  ["Does it use AI agents?", "Yes. Specialized agents handle research, enrichment, personalization, outreach, replies, follow-ups, CRM, and analytics."],
  ["Can humans approve risky actions?", "Yes. Human review is part of the control-room workflow."],
  ["Can it be sold to companies?", "The platform is designed for commercial direction, with security and multi-tenant controls as the next hardening layer."],
  ["How fast can it be deployed?", "A demo deployment can be live quickly. Production rollout depends on email domain, CRM, data, and compliance setup."],
  ["What makes it different?", "It combines lead discovery, contact enrichment, outreach, reply intelligence, and CRM operations in one agent command center."],
];

export const blogPosts = [
  {
    title: "Why autonomous outbound needs an operator control room",
    category: "Agent Ops",
    excerpt: "A practical model for letting AI agents work quickly while humans approve the moments that carry risk.",
  },
  {
    title: "The future of small sales teams is agentic",
    category: "Strategy",
    excerpt: "How founders can scale research, outreach, and follow-up before hiring a full growth team.",
  },
  {
    title: "Reply capture is the difference between automation and spam",
    category: "Deliverability",
    excerpt: "Why every serious outbound system must stop follow-ups when a prospect answers.",
  },
];

export const securityPoints = [
  { title: "Human approval gates", icon: ShieldCheck },
  { title: "Suppression list checks", icon: CheckCircle2 },
  { title: "Audit logs for every action", icon: Database },
  { title: "Workspace isolation", icon: Target },
  { title: "Sender health checks", icon: MailCheck },
  { title: "Reply-aware automation", icon: MessageSquareReply },
];
