import { motion } from "framer-motion";
import { cn } from "../lib/cn";

type SectionTitleProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

export function SectionTitle({
  label,
  title,
  description,
  align = "left"
}: SectionTitleProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <motion.div
      className={cn("flex flex-col gap-2 w-full", alignment)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fade}
    >
      {label ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-stroke/80 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
          {label}
          <span className="h-1 w-1 rounded-full bg-accent" />
        </span>
      ) : null}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">{title}</h2>
      {description ? (
        <p className="max-w-3xl text-sm md:text-base text-slate-600 leading-relaxed">{description}</p>
      ) : null}
    </motion.div>
  );
}
