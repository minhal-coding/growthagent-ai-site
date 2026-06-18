import { LegalPage } from "@/components/legal-page";

export const metadata = {
  title: "Privacy Policy",
  description: "How GrowthAgent AI handles customer data, lead records, outreach content, and platform activity.",
};

export default function Privacy() {
  return <LegalPage kind="privacy" />;
}
