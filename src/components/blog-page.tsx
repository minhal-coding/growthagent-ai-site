import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { PageShell, SectionIntro } from "@/components/site-chrome";
import { blogPosts } from "@/components/site-data";

const extraPosts = [
  "How to build a reply-aware outbound system",
  "Why lead enrichment is more important than volume",
  "The founder's guide to AI sales operations",
  "From cold email to warm meeting with agent workflows",
  "How to keep autonomous outreach compliant",
  "What every AI sales dashboard should show",
];

export function BlogPage() {
  return (
    <PageShell>
      <main className="px-5 py-20 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-7xl">
          <SectionIntro title="GrowthAgent AI Blog" text="Deep dives on AI sales teams, outbound automation, reply intelligence, and agent operations." />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[...blogPosts, ...extraPosts.map((title) => ({ title, category: "Playbook", excerpt: "A practical operating note for building safer, more useful AI sales automation." }))].map((post) => (
              <Link key={post.title} href="#" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <Badge variant="secondary">{post.category}</Badge>
                <h2 className="mt-5 text-xl font-black text-slate-950">{post.title}</h2>
                <p className="mt-4 text-sm font-medium leading-6 text-slate-600">{post.excerpt}</p>
                <p className="mt-8 text-sm font-black text-[#6161ff]">Read article</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
