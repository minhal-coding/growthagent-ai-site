import { LegalPage } from "@/components/legal-page";

export const metadata = {
  title: "Terms of Service",
  description: "The basic rules for using GrowthAgent AI responsibly as a sales automation platform.",
};

export default function Terms() {
  return <LegalPage kind="terms" />;
}
