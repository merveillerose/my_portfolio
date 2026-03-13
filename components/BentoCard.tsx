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
        "group relative overflow-hidden rounded-card border border-stroke bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft",
        "before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-accent/4 before:to-transparent before:opacity-0 before:transition before:duration-500 group-hover:before:opacity-100",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          {title}
        </div>
        <span
          className="h-2 w-10 rounded-full"
          style={{ background: accent ?? "linear-gradient(90deg,#1a56a0,#4f8dd7)" }}
        />
      </div>
      <h3 className="mt-3 text-lg font-semibold text-ink">{headline}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-stroke bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 mix-blend-multiply blur-3xl transition duration-500 group-hover:opacity-70">
        <div className="absolute inset-6 rounded-full bg-accent/10" />
      </div>
    </motion.div>
  );
}
