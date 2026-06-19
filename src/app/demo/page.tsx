import { CalendarCheck, MonitorPlay, MousePointerClick, Send } from "lucide-react";

import { SimpleInfoPage } from "@/components/simple-info-page";

export const metadata = {
  title: "Demo",
  description: "Book or watch a GrowthAgent AI product demo.",
};

export default function Demo() {
  return (
    <SimpleInfoPage
      eyebrow="Demo"
      title="See the agent workflow in action."
      text="The demo shows how a target audience becomes researched leads, campaign drafts, reply tracking, and meeting-ready next steps."
      highlights={[
        { icon: MousePointerClick, title: "Define target", text: "Start with geography, audience, offer, and qualification rules." },
        { icon: MonitorPlay, title: "Watch the command center", text: "See queues, agents, approvals, and blocked work in one screen." },
        { icon: Send, title: "Review outreach", text: "Inspect the message before sending and keep compliance controls visible." },
        { icon: CalendarCheck, title: "Move to meetings", text: "Turn interested replies into scheduled follow-up opportunities." },
      ]}
      bullets={["Live product walkthrough", "Outbound safety review", "Workflow mapping", "Implementation next steps"]}
      ctaLabel="Book Demo"
      ctaHref="/contact"
    />
  );
}
