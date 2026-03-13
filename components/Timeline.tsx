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
      <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-accent/50 via-stroke to-transparent" />
      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={`${item.period}-${item.title}`}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex gap-4 rounded-2xl border border-stroke bg-white/90 p-4 shadow-sm"
          >
            <div className="absolute left-2 top-5 h-3 w-3 rounded-full border border-white bg-accent shadow-soft" />
            <div className="ml-6 flex flex-col gap-1">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{item.period}</div>
              <div className="text-lg font-semibold text-ink">{item.title}</div>
              <div className="text-sm font-medium text-accent">{item.location}</div>
              <p className="text-sm text-slate-700 leading-relaxed">{item.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
