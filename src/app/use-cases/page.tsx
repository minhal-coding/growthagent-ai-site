import { Building2, GraduationCap, Handshake, Presentation } from "lucide-react";

import { SimpleInfoPage } from "@/components/simple-info-page";

export const metadata = {
  title: "Use Cases",
  description: "Industries and teams that can use GrowthAgent AI.",
};

export default function UseCases() {
  return (
    <SimpleInfoPage
      eyebrow="Use cases"
      title="For any team that turns prospects into conversations."
      text="GrowthAgent AI is flexible enough for conferences, universities, agencies, consulting firms, SaaS teams, and training businesses."
      highlights={[
        { icon: Presentation, title: "Conferences and events", text: "Find delegates, schools, partners, speakers, and group registration opportunities." },
        { icon: GraduationCap, title: "Education programs", text: "Reach departments, student life teams, advisors, and youth organizations." },
        { icon: Handshake, title: "Agencies and consultants", text: "Build a repeatable prospecting machine without hiring a full SDR team." },
        { icon: Building2, title: "SaaS and B2B", text: "Research accounts, personalize outreach, capture replies, and prepare meetings." },
      ]}
      bullets={["Events", "Universities", "Training companies", "Consulting", "Agencies", "SaaS"]}
    />
  );
}
