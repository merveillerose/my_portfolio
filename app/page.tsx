"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, Download, Github, Linkedin, Mail, Moon, Sparkles, Sun, X } from "lucide-react";

import { BentoCard } from "../components/BentoCard";
import { ContactCard } from "../components/ContactCard";
import { ProjectCard } from "../components/ProjectCard";
import { SectionTitle } from "../components/SectionTitle";
import { Timeline, type TimelineItem } from "../components/Timeline";
import { WaveCanvas } from "../components/WaveCanvas";
import { cn } from "../lib/cn";

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const bento = [
  {
    title: "Profil",
    headline: "Ingenieure ENSEA & ENSPY",
    items: ["Majeure Systemes & Reseaux", "Traitement du signal avance", "Projets full-stack"],
    span: "md:col-span-2 md:row-span-2"
  },
  {
    title: "IA & Signal",
    headline: "PyTorch, GNN, matrices de covariance",
    items: ["CNN 1D", "GNN", "TF Lite", "DSP"],
    span: "md:col-span-2"
  },
  {
    title: "Software",
    headline: "Spring Boot, Rust, VHDL, Next.js",
    items: ["APIs scalables", "Infra data", "Outils embarques"],
    span: "md:col-span-2"
  },
  {
    title: "Stage 2026",
    headline: "4 mois a partir d'avril (R&D, Signal, IA, Data)",
    items: ["Paris / Ile-de-France", "Hybrid/Remote", "Disponibilite rapide"],
    span: "md:col-span-3"
  }
];

const projects = [
  {
    title: "Classification de series temporelles",
    description:
      "Pipeline CNN 1D + DTW pour classer des signaux sensoriels bruites. Robustesse +12% avec augmentation spectrale et calibration des seuils.",
    tech: ["PyTorch", "CNN 1D", "DTW", "Optuna", "Weights & Biases"],
    metric: "Robustesse +12%",
    focus: "Signal | IA",
    href: undefined
  },
  {
    title: "ETL Spark sur 100M logs Wikimedia",
    description:
      "Job Spark (Scala) optimise : partitionnement adaptatif, broadcast join, cache cible. Temps de traitement -40% et cout cluster contenu.",
    tech: ["Scala", "Spark", "Delta Lake", "Airflow", "Grafana"],
    metric: "-40% temps",
    focus: "Data Engineering",
    href: undefined
  }
];

const timelineItems: TimelineItem[] = [
  {
    period: "2025 - 2026",
    title: "ENSEA Cergy",
    location: "Majeure Systemes & Reseaux",
    details: "IA embarquee, traitement du signal avance, communications numeriques, projets logiciels."
  },
  {
    period: "2021 - 2024",
    title: "ENSPY Yaounde",
    location: "Genie Electrique & Telecom",
    details: "DSP, temps reel, VHDL, bases IA et optimisation mathematique."
  }
];

const navLinks = [
  { label: "Visualizer", href: "#visual" },
  { label: "Hero", href: "#hero" },
  { label: "Competences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Parcours", href: "#parcours" },
  { label: "Contact", href: "#contact" }
];

function useTypewriter(text: string, speed = 32) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setOutput(text.slice(0, index));
      if (index >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return output;
}

function SignalBackdrop() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="signal-grid absolute inset-0" />
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-neon/15 blur-3xl" />
    </div>
  );
}

function NavBar({ theme, onToggle }: { theme: "dark" | "light"; onToggle: () => void }) {
  return (
    <header className="sticky top-4 z-40">
      <div className="glass border-gradient mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 rounded-full border border-stroke/70 px-4 py-3 shadow-soft">
        <div className="flex items-center gap-2 text-sm font-semibold text-ink">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Merveille Yomba | Signal & IA
        </div>
                <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3 py-2 transition",
                "hover:bg-accent/15 hover:text-ink"
              )}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onToggle}
            className="inline-flex items-center gap-2 rounded-full border border-stroke/70 bg-slate-900/60 px-3 py-2 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
            aria-label="Basculer le th?me"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </header>
  );
}

function NeonAvatar({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="relative inline-flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-accent/40"
    >
      <div className="absolute h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute h-32 w-32 rounded-full border border-accent/60" />
      <div className="absolute h-32 w-32 rounded-full border border-neon/30 animate-pulse-ring" />
      <div className="relative h-28 w-28 overflow-hidden rounded-full border border-stroke/80 bg-slate-900/70 shadow-soft">
        <Image
          src="/profile.jpg"
          alt="Portrait de Merveille Yomba"
          fill
          sizes="120px"
          className="object-cover"
          priority
        />
      </div>
    </button>
  );
}

function PhotoLightbox({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
        className="relative w-[min(90vw,520px)] overflow-hidden rounded-3xl border border-accent/40 bg-slate-900 shadow-soft"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src="/profile.jpg"
          alt="Portrait de Merveille Yomba agrandi"
          width={1200}
          height={1200}
          className="h-full w-full object-cover"
          priority
        />
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full border border-stroke/60 bg-black/50 p-2 text-ink shadow-soft hover:border-accent hover:text-accent"
        >
          <X className="h-5 w-5" />
        </button>
      </motion.div>
    </motion.div>
  );
}

function Hero({ onOpenPhoto }: { onOpenPhoto: () => void }) {
  const typed = useTypewriter("Merveille YOMBA | Engineering & Creative Chaos", 26);

  return (
    <section
      id="hero"
      className="relative overflow-hidden rounded-[32px] border border-stroke bg-slate-900/70 px-6 py-12 shadow-soft backdrop-blur"
    >
      <SignalBackdrop />
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <motion.div
          initial="hidden"
          animate="show"
          variants={heroVariants}
          className="space-y-6 md:max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
            <Sparkles className="h-4 w-4" />
            Signal | IA | Software Engineering
          </div>
          <div className="space-y-3">
            <h1 className="type-caret text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
              {typed}
            </h1>
            <p className="text-lg text-slate-200 md:text-xl">
              Inge R&D a l'intersection du traitement du signal, des architectures IA et du developpement logiciel.
            </p>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-3"
          >
            <motion.a
              variants={item}
              className="glitch-hover inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:shadow-magenta focus:shadow-magenta focus:outline-none focus:ring-2 focus:ring-magenta/30"
              href="/CV_Merveille_YOMBA.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Download className="h-4 w-4" />
              Telecharger le CV
            </motion.a>
            <motion.a
              variants={item}
              className="glitch-hover inline-flex items-center gap-2 rounded-full border border-accent bg-slate-900/60 px-5 py-3 text-sm font-semibold text-accent transition hover:bg-accent/10 hover:border-accent hover:text-accent hover:shadow-magenta focus:outline-none focus:ring-2 focus:ring-magenta/30"
              href="mailto:merveilleroseyomba@gmail.com"
            >
              <Mail className="h-4 w-4" />
              Discuter d'un stage
            </motion.a>
          </motion.div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-stroke bg-slate-900/70 px-4 py-3 text-sm text-slate-200 shadow-sm">
              <span className="font-semibold text-ink">Signal</span> | CNN 1D | filtrage adaptatif | reduction de bruit
            </div>
            <div className="rounded-2xl border border-stroke bg-slate-900/70 px-4 py-3 text-sm text-slate-200 shadow-sm">
              <span className="font-semibold text-ink">Data/Dev</span> | Spark a l'echelle | Next.js | APIs robustes
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="relative w-full max-w-sm"
        >
          <div className="glass border-gradient relative overflow-hidden rounded-[28px] border border-stroke/80 p-6 shadow-soft">
            <div className="absolute inset-0 bg-grid-dark opacity-40" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <NeonAvatar onOpen={onOpenPhoto} />
              <div className="space-y-1 text-center">
                <div className="text-2xl font-semibold text-ink">Merveille Yomba</div>
                <div className="text-sm text-slate-400">ENSEA | Signal & IA | Creative Dev</div>
              </div>
              <div className="grid w-full grid-cols-2 gap-3 text-sm">
                <Metric label="DSP" value="FFT, filtrage" />
                <Metric label="IA" value="GNN, CNN" />
                <Metric label="Data" value="Spark, Airflow" />
                <Metric label="Dev" value="Next.js, Rust" />
              </div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400">
                <ArrowDownRight className="h-4 w-4 text-accent" />
                Creative Chaos, engineered
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-stroke bg-slate-900/70 px-3 py-2 shadow-sm">
      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">{label}</div>
      <div className="text-sm font-semibold text-ink">{value}</div>
    </div>
  );
}

export default function Page() {
  const [photoOpen, setPhotoOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme-pref") : null;
    const next = saved === "light" || saved === "dark" ? saved : "dark";
    setTheme(next as "dark" | "light");
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", next);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("theme-pref", theme);
    }
  }, [theme]);


  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-4 pb-16 pt-10 md:px-8">
      <NavBar theme={theme} onToggle={() => setTheme(theme === "dark" ? "light" : "dark")} />

      <section id="visual" className="space-y-3">
        <WaveCanvas className="shadow-soft" />
      </section>

      <Hero onOpenPhoto={() => setPhotoOpen(true)} />

      <section id="skills" className="space-y-8">
        <SectionTitle
          label="Competences"
          title="Bento grid 'Jinx' alignee mais non lineaire"
          description="Un tetris de competences : profil, IA & signal, software, et disponibilite stage."
        />
        <div className="grid auto-rows-[minmax(160px,auto)] gap-4 md:grid-cols-6">
          {bento.map((card) => (
            <BentoCard
              key={card.title}
              title={card.title}
              headline={card.headline}
              items={card.items}
              className={cn(card.span, "md:row-span-1")}
              accent="linear-gradient(120deg,#1a56a0,#7c3aed)"
            />
          ))}
        </div>
      </section>

      <section id="projects" className="space-y-8">
        <SectionTitle
          label="Projets"
          title="Glass cards & badges colorees"
          description="Des realisations ou le signal, l'IA et l'optimisation guident les choix techniques."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} delay={index * 0.1} {...project} />
          ))}
        </div>
      </section>

      <section id="parcours" className="space-y-8">
        <SectionTitle
          label="Parcours"
          title="Arc narratif ENSEA + ENSPY"
          description="Un parcours Arcane : fondamentaux mathematiques, signal, IA et creation logicielle."
        />
        <Timeline items={timelineItems} />
      </section>

      <section id="contact" className="space-y-8">
        <SectionTitle
          label="Contact"
          title="Ping rapide"
          description="Icones minimales, vibes electriques. Je repond vite."
        />
        <ContactCard />
      </section>

      <footer className="flex flex-col gap-3 border-t border-stroke pt-6 text-sm text-slate-400">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-semibold text-ink">Merveille Yomba</span>
          <span className="h-1 w-1 rounded-full bg-slate-600" />
          Ingenieure ENSEA & ENSPY | Signal, IA & Software Engineering
        </div>
        <div className="flex flex-wrap items-center gap-4 text-accent">
          <a className="inline-flex items-center gap-2 font-semibold hover:text-ink" href="mailto:merveilleroseyomba@gmail.com">
            <Mail className="h-4 w-4" /> Email
          </a>
          <a className="inline-flex items-center gap-2 font-semibold hover:text-ink" href="tel:+33745957416">Telephone</a>
          <a className="inline-flex items-center gap-2 font-semibold hover:text-ink" target="_blank" rel="noreferrer" href="https://github.com/merveillerose">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a className="inline-flex items-center gap-2 font-semibold hover:text-ink" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/merveille-yomba-2b72a636a">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </footer>

      <PhotoLightbox open={photoOpen} onClose={() => setPhotoOpen(false)} />
    </main>
  );
}





























