import { motion } from "framer-motion";
import { cn } from "../lib/cn";

type SectionTitleProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function SectionTitle({ label, title, description, align = "left" }: SectionTitleProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <motion.div
      className={cn("flex flex-col gap-3 w-full", alignment)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fade}
    >
      {/* Label — trait + texte, minimaliste */}
      {label ? (
        <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
          <span className="h-px w-6 bg-blue-500/60" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-400">
            {label}
          </span>
        </div>
      ) : null}

      {/* Titre — blanc pur, lisible, hiérarchie forte */}
      <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
        {title}
      </h2>

      {/* Description — texte secondaire légèrement atténué */}
      {description ? (
        <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}