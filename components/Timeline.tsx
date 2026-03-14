import { motion } from "framer-motion";

export type TimelineItem = {
  period: string;
  title: string;
  location: string;
  details: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-accent/60 via-stroke/70 to-transparent" />
      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={`${item.period}-${item.title}`}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
            className="timeline-card relative flex gap-4 rounded-2xl border border-stroke/70 bg-slate-900/70 p-4 shadow-soft backdrop-blur"
          >
            <div className="absolute left-2 top-5 h-3 w-3 rounded-full border border-slate-900 bg-accent shadow-soft" />
            <div className="ml-6 flex flex-col gap-1">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">{item.period}</div>
              <div className="text-lg font-semibold text-ink drop-shadow">{item.title}</div>
              <div className="text-sm font-semibold text-accent">{item.location}</div>
              <p className="text-sm text-slate-200 leading-relaxed">{item.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
