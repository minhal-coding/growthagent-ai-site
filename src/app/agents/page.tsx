import { Bot, CalendarClock, MailCheck, MessageSquareReply, RefreshCw, Sparkles } from "lucide-react";

import { SimpleInfoPage } from "@/components/simple-info-page";

export const metadata = {
  title: "Agents",
  description: "The specialized AI agents inside GrowthAgent AI.",
};

export default function Agents() {
  return (
    <SimpleInfoPage
      eyebrow="Agent network"
      title="A focused AI sales team, not one messy bot."
      text="Each agent owns one job in the revenue workflow. The command center shows what is ready, blocked, waiting, or needs human review."
      highlights={[
        { icon: Bot, title: "Research Agent", text: "Finds relevant accounts and source evidence from target markets." },
        { icon: Sparkles, title: "Personalization Agent", text: "Turns account context into brand-safe outreach drafts." },
        { icon: MailCheck, title: "Outreach Agent", text: "Sends only when sender, suppression, and approval checks pass." },
        { icon: MessageSquareReply, title: "Reply Agent", text: "Detects replies, classifies intent, and stops blind follow-ups." },
        { icon: RefreshCw, title: "Follow-up Agent", text: "Plans next steps without duplicate or spammy pressure." },
        { icon: CalendarClock, title: "Scheduler Agent", text: "Moves interested leads toward meeting-ready opportunities." },
      ]}
      bullets={["Human approval gates", "Audit logs", "Reply-aware automation", "Safe sending checks", "CRM status updates", "Agent work queue"]}
    />
  );
}
