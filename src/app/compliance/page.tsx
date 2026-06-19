import { ClipboardCheck, FileText, ShieldCheck, UserCheck } from "lucide-react";

import { SimpleInfoPage } from "@/components/simple-info-page";

export const metadata = {
  title: "Compliance",
  description: "Compliance posture and operating controls for GrowthAgent AI.",
};

export default function Compliance() {
  return (
    <SimpleInfoPage
      eyebrow="Compliance"
      title="A practical foundation for commercial reviews."
      text="Commercial buyers need clear controls around data, consent, sending behavior, retention, and auditability. GrowthAgent AI presents those controls directly."
      highlights={[
        { icon: FileText, title: "Clear policies", text: "Privacy, terms, responsible AI, and security pages explain the operating model." },
        { icon: UserCheck, title: "Workspace access", text: "Customers should only see their own workspace, records, messages, and settings." },
        { icon: ClipboardCheck, title: "Operational records", text: "Logs and status history help explain what happened and why." },
        { icon: ShieldCheck, title: "Safe outbound", text: "Unsubscribe, suppression, bounce, complaint, and approval controls belong in every rollout." },
      ]}
      bullets={["Privacy policy", "Terms of service", "Security controls", "Audit logs", "Suppression list", "Data minimization"]}
    />
  );
}
