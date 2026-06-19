import { Database, Radar, Search, Target } from "lucide-react";

import { SimpleInfoPage } from "@/components/simple-info-page";

export const metadata = {
  title: "Lead Research",
  description: "How GrowthAgent AI researches and scores prospects before outreach.",
};

export default function LeadResearch() {
  return (
    <SimpleInfoPage
      eyebrow="Lead research"
      title="Find better prospects before the first email."
      text="The research layer turns a target audience into qualified accounts with source evidence, fit reasoning, and clean CRM-ready records."
      highlights={[
        { icon: Target, title: "Audience targeting", text: "Define geography, buyer type, exclusions, and qualification rules before an agent searches." },
        { icon: Search, title: "Public-source discovery", text: "Find schools, programs, companies, events, departments, and relevant contact pages." },
        { icon: Database, title: "Structured records", text: "Save organizations, contacts, websites, source URLs, scores, and status in one pipeline." },
        { icon: Radar, title: "Fit signals", text: "Rank leads by relevance so operators review the best opportunities first." },
      ]}
      bullets={["Source evidence", "Lead scoring", "Contact page capture", "CSV-ready pipeline", "Duplicate prevention", "Manual review mode"]}
    />
  );
}
