import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../lib/cn";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  metric: string;
  focus: string;
  href?: string;
  delay?: number;
};

export function ProjectCard({ title, description, tech, metric, focus, href, delay = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="group relative flex flex-col gap-4 overflow-hidden rounded-card border border-stroke bg-white/90 p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-2">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-stroke bg-mist px-3 py-1 text-xs font-semibold text-accent">
            {focus}
          </span>
          <h3 className="text-xl font-semibold text-ink">{title}</h3>
        </div>
        <div className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{metric}</div>
      </div>
      <p className="text-slate-700 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span key={item} className="rounded-full border border-stroke px-3 py-1 text-xs font-medium text-slate-700">
            {item}
          </span>
        ))}
      </div>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm font-semibold text-accent transition group-hover:gap-3"
        >
          Voir le projet
          <ArrowUpRight className="h-4 w-4" />
        </a>
      ) : null}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/4 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
    </motion.article>
  );
}
