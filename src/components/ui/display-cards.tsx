"use client";

import { ReactNode } from "react";
import { Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

interface DisplayCardProps {
  className?: string;
  icon?: ReactNode;
  title?: string;
  description?: string;
  date?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-white" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  titleClassName = "text-[#6161ff]",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-36 w-[22rem] max-w-[82vw] -skew-y-[7deg] select-none flex-col justify-between overflow-hidden rounded-3xl border-2 border-slate-200 bg-white px-4 py-3 shadow-[0_20px_60px_rgba(15,23,42,0.14)] transition-all duration-500 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[8rem] after:bg-gradient-to-l after:from-white after:to-transparent after:content-[''] hover:-translate-y-2 hover:border-[#6161ff]/30 hover:shadow-[0_24px_80px_rgba(97,97,255,0.22)] [&>*]:relative [&>*]:z-10 [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className,
      )}
    >
      <div>
        <span className="relative inline-block rounded-2xl bg-slate-950 p-2">{icon}</span>
        <p className={cn("text-lg font-black", titleClassName)}>{title}</p>
      </div>
      <p className="truncate text-lg font-black text-slate-950">{description}</p>
      <p className="text-sm font-bold text-slate-500">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      title: "Research Agent",
      description: "42 schools discovered",
      date: "Live now",
      titleClassName: "text-[#6161ff]",
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:inset-0 before:rounded-3xl before:bg-white/50 before:content-[''] before:transition-opacity hover:before:opacity-0",
    },
    {
      title: "Reply Agent",
      description: "3 replies captured",
      date: "2 min ago",
      titleClassName: "text-[#00a36c]",
      className:
        "[grid-area:stack] translate-x-10 translate-y-10 hover:-translate-y-1 before:absolute before:inset-0 before:rounded-3xl before:bg-white/50 before:content-[''] before:transition-opacity hover:before:opacity-0 sm:translate-x-16",
    },
    {
      title: "Meeting Agent",
      description: "1 call ready",
      date: "Today",
      titleClassName: "text-[#ff5a5f]",
      className: "[grid-area:stack] translate-x-20 translate-y-20 hover:translate-y-10 sm:translate-x-32",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid min-h-[18rem] [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}
