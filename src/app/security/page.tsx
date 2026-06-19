import { FileClock, KeyRound, LockKeyhole, ShieldCheck } from "lucide-react";

import { SimpleInfoPage } from "@/components/simple-info-page";

export const metadata = {
  title: "Security",
  description: "Security controls and operator guardrails for GrowthAgent AI.",
};

export default function Security() {
  return (
    <SimpleInfoPage
      eyebrow="Security"
      title="Built around controlled automation."
      text="GrowthAgent AI is designed so risky actions require approval, sensitive data stays server-side, and every important action leaves an audit trail."
      highlights={[
        { icon: LockKeyhole, title: "Protected access", text: "Users authenticate before accessing operational data and workspace actions." },
        { icon: ShieldCheck, title: "Human review", text: "Outbound and reply actions can require operator approval before sending." },
        { icon: KeyRound, title: "Secret handling", text: "API keys, database URLs, and mail credentials belong in server environments only." },
        { icon: FileClock, title: "Audit history", text: "Agent actions, sends, replies, approvals, and admin changes should be recorded." },
      ]}
      bullets={["Workspace isolation", "Rate limiting", "Suppression checks", "Secure headers", "No public service keys", "Production-safe errors"]}
    />
  );
}
