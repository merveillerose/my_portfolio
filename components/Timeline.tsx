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
    <div className="relative pl-8">
      {/* Ligne verticale — fine, discrète */}
      <div className="absolute left-[11px] top-2 bottom-4 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent" />

      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={`${item.period}-${item.title}`}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="group relative rounded-2xl border border-white/8 bg-[#0f1628] p-4 shadow-[0_2px_16px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-blue-500/25 hover:shadow-[0_4px_24px_rgba(59,130,246,0.1)]"
          >
            {/* Point de timeline — aligné avec la ligne */}
            <div className="absolute -left-[25px] top-5 h-2.5 w-2.5 rounded-full border-2 border-blue-500/60 bg-[#0a0f1e] transition-colors duration-300 group-hover:border-blue-400 group-hover:bg-blue-500/20" />

            <div className="flex flex-col gap-1">
              {/* Période */}
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                {item.period}
              </span>
              {/* Titre */}
              <span className="text-base font-semibold text-white/90">{item.title}</span>
              {/* Lieu — accent léger */}
              <span className="text-sm font-medium text-blue-400">{item.location}</span>
              {/* Détails */}
              <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}