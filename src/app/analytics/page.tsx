import { BarChart3, LineChart, MessagesSquare, PieChart } from "lucide-react";

import { SimpleInfoPage } from "@/components/simple-info-page";

export const metadata = {
  title: "Analytics",
  description: "Pipeline, reply, campaign, and agent performance analytics for GrowthAgent AI.",
};

export default function Analytics() {
  return (
    <SimpleInfoPage
      eyebrow="Analytics"
      title="Know what the agents are doing and where revenue is stuck."
      text="Analytics gives operators a clean picture of pipeline health, lead quality, replies, campaign status, and agent bottlenecks."
      highlights={[
        { icon: BarChart3, title: "Pipeline health", text: "Track qualified leads, warm accounts, meetings, and projected opportunity value." },
        { icon: MessagesSquare, title: "Reply intelligence", text: "See interested replies and paused follow-ups before the next action happens." },
        { icon: LineChart, title: "Campaign performance", text: "Measure which audience, message, and channel is producing conversations." },
        { icon: PieChart, title: "Agent workload", text: "See waiting queues, blocked work, approvals, and automation readiness." },
      ]}
      bullets={["Reply rates", "Queue depth", "Campaign risk", "Meeting readiness", "Lead source quality", "Operator review workload"]}
    />
  );
}
