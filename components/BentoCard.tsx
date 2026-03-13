import { motion } from "framer-motion";
import { cn } from "../lib/cn";

type BentoCardProps = {
  title: string;
  headline: string;
  items: string[];
  accent?: string;
  className?: string;
};

const variants = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }
  })
};

export function BentoCard({ title, headline, items, accent, className }: BentoCardProps) {
  return (
    <motion.div
      custom={Math.random()}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={cn(
        "glitch-hover group relative overflow-hidden rounded-card border border-stroke/70 bg-slate-900/60 p-5 shadow-soft",
        "before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-accent/10 before:via-transparent before:to-transparent before:opacity-0 before:transition before:duration-500 group-hover:before:opacity-100",
        "hover:shadow-magenta",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
          {title}
        </div>
        <span
          className="h-2 w-10 rounded-full"
          style={{ background: accent ?? "linear-gradient(90deg,#1a56a0,#7c3aed)" }}
        />
      </div>
      <h3 className="mt-3 text-lg font-semibold text-ink drop-shadow">{headline}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-stroke/70 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-200 shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen blur-3xl transition duration-500 group-hover:opacity-90">
        <div className="absolute inset-6 rounded-full bg-accent/15" />
      </div>
    </motion.div>
  );
}
