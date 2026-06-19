import { FAQBlock } from "@/components/marketing-home";
import { PageShell } from "@/components/site-chrome";

export const metadata = {
  title: "FAQ",
  description: "Common questions about GrowthAgent AI.",
};

export default function FAQ() {
  return (
    <PageShell>
      <main className="py-8">
        <FAQBlock />
      </main>
    </PageShell>
  );
}
