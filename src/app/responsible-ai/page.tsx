import { Eye, Hand, ListChecks, ShieldAlert } from "lucide-react";

import { SimpleInfoPage } from "@/components/simple-info-page";

export const metadata = {
  title: "Responsible AI",
  description: "Responsible AI and safe automation principles for GrowthAgent AI.",
};

export default function ResponsibleAI() {
  return (
    <SimpleInfoPage
      eyebrow="Responsible AI"
      title="Automation should help people, not bypass judgment."
      text="GrowthAgent AI is built around operator visibility, safe sending limits, review gates, and reply-aware workflows."
      highlights={[
        { icon: Hand, title: "Human approval", text: "High-risk actions can wait for a person before the system sends or changes state." },
        { icon: Eye, title: "Transparent context", text: "Operators can see why a lead was selected and what message will be sent." },
        { icon: ShieldAlert, title: "Abuse prevention", text: "Rate limits, suppression lists, and sender checks reduce spammy behavior." },
        { icon: ListChecks, title: "Auditability", text: "Agent decisions should be traceable for reviews, incidents, and customer trust." },
      ]}
      bullets={["No blind bulk sending", "Reply-aware pauses", "Suppression handling", "Review queues", "Source evidence", "Operator overrides"]}
    />
  );
}
