import { CheckCircle2, LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type RailItem = {
  title: string;
  description: string;
  icon?: LucideIcon;
  eyebrow?: string;
};

type AgentProductRailProps = {
  items: RailItem[];
  colors: string[];
  className?: string;
  itemClassName?: string;
  compact?: boolean;
};

export function AgentProductRail({ items, colors, className, itemClassName, compact = false }: AgentProductRailProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#030407] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#030407] to-transparent" />
      <div className="scrollbar-none flex snap-x gap-4 overflow-x-auto pb-4 pt-2">
        {items.map((item, index) => {
          const Icon = item.icon ?? CheckCircle2;
          const color = colors[index % colors.length];

          return (
            <article
              key={`${item.title}-${index}`}
              className={cn(
                "group relative min-w-[18rem] snap-start overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#07111f]/86 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#0b1729]",
                compact ? "sm:min-w-[20rem]" : "sm:min-w-[23rem]",
                itemClassName,
              )}
            >
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 size-32 rounded-full opacity-20 blur-2xl transition group-hover:opacity-35"
                style={{ backgroundColor: color }}
              />
              <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                <div className="flex items-start justify-between gap-5">
                  <span
                    className="grid size-11 place-items-center rounded-2xl border border-white/10 text-white shadow-[0_12px_28px_rgba(0,0,0,0.2)]"
                    style={{ backgroundColor: color }}
                  >
                    <Icon className="size-5" />
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-slate-300">
                    {item.eyebrow ?? `0${index + 1}`}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-tight text-white">{item.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-slate-300">{item.description}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
