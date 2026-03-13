"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Download, Mail, Sparkles } from "lucide-react";
import { BentoCard } from "../components/BentoCard";
import { ProjectCard } from "../components/ProjectCard";
import { SectionTitle } from "../components/SectionTitle";
import { Timeline, type TimelineItem } from "../components/Timeline";
import { ContactCard } from "../components/ContactCard";
import { WaveCanvas } from "../components/WaveCanvas";

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const skillGroups = [
  {
    title: "Maths / Signal",
    headline: "Analyser & stabiliser les signaux",
    items: ["Matrices de covariance", "Sous-espaces propres", "DSP"],
    accent: "linear-gradient(120deg,#1a56a0,#86b4f5)"
  },
  {
    title: "IA",
    headline: "Architectures optimisées pour données structurées",
    items: ["PyTorch", "GNN", "CNN", "TF Lite"],
    accent: "linear-gradient(120deg,#1a56a0,#2dd4bf)"
  },
  {
    title: "Software / Dev",
    headline: "Du prototype au déploiement",
    items: ["Next.js", "Spring Boot", "Rust", "VHDL", "Spark"],
    accent: "linear-gradient(120deg,#1a56a0,#f59e0b)"
  }
];

const projects = [
  {
    title: "Classification de séries temporelles",
    description:
      "Pipeline CNN 1D + DTW pour classer des signaux sensoriels bruités. Entraînement PyTorch avec augmentation spectrale, calibration des seuils et monitoring en ligne.",
    tech: ["PyTorch", "CNN 1D", "DTW", "Optuna", "Weights & Biases"],
    metric: "Robustesse +12%",
    focus: "Signal · IA",
    href: undefined
  },
  {
    title: "ETL Spark sur 100M logs Wikimedia",
    description:
      "Job Spark (Scala) optimisé : partitionnement adaptatif, broadcast join et cache stratégique. Temps de traitement réduit de 40% et coût cluster maîtrisé.",
    tech: ["Scala", "Spark", "Delta Lake", "Airflow", "Grafana"],
    metric: "-40% temps",
    focus: "Data Engineering",
    href: undefined
  }
];

const timelineItems: TimelineItem[] = [
  {
    period: "2025 — 2026",
    title: "ENSEA Cergy",
    location: "Étudiante Ingénieure, Majeure Systèmes et Réseaux",
    details: "IA embarquée, traitement du signal avancé, communications numériques et projets logiciels full-stack."
  },
  {
    period: "2021 — 2024",
    title: "ENSPY Yaoundé",
    location: "Cycle Ingénieur, Génie Électrique & Télécom",
    details: "DSP, systèmes temps réel, VHDL, bases de l'IA et optimisation mathématique appliquée."
  }
];

function SignalBackdrop() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="signal-grid absolute inset-0" />
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/8 blur-3xl" />
      <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-stroke bg-white/90 px-6 py-12 shadow-soft">
      <SignalBackdrop />
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <motion.div initial="hidden" animate="show" variants={heroVariants} className="space-y-6 md:max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
            <Sparkles className="h-4 w-4" />
            Signal · IA · Software Engineering
          </div>
          <div className="space-y-3">
            <h1 className="text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
              Merveille YOMBA
            </h1>
            <p className="text-lg text-slate-700 md:text-xl">
              Étudiante Ingénieure ENSEA · Signal Processing, AI & Software Engineering.
              En quête d'un stage de 4 mois à partir d'avril 2026.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
              href="/MerveilleYomba_CV.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Download className="h-4 w-4" />
              Télécharger le CV
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-stroke bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              href="mailto:merveilleroseyomba@gmail.com"
            >
              <Mail className="h-4 w-4" />
              Discuter d'un stage
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-stroke bg-white/70 px-4 py-3 text-sm text-slate-700 shadow-sm">
              <span className="font-semibold text-ink">Signal</span> · CNN 1D · filtrage adaptatif · réduction de bruit
            </div>
            <div className="rounded-2xl border border-stroke bg-white/70 px-4 py-3 text-sm text-slate-700 shadow-sm">
              <span className="font-semibold text-ink">Data/Dev</span> · Spark à l'échelle · Next.js · APIs robustes
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-sm"
        >
          <div className="glass border-gradient relative overflow-hidden rounded-[28px] border border-stroke/80 p-6 shadow-soft">
            <div className="absolute inset-0 bg-noise opacity-80 mix-blend-soft-light" />
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-slate-600">Actuellement</div>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  Disponible avril 2026
                </span>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-semibold text-ink">Merveille Yomba</div>
                <div className="text-sm text-slate-600">ENSEA · Signal & IA</div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <Metric label="DSP" value="FFT, filtrage" />
                <Metric label="IA" value="GNN, CNN" />
                <Metric label="Data" value="Spark, Airflow" />
                <Metric label="Dev" value="Next.js, Rust" />
              </div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-500">
                <ArrowDownRight className="h-4 w-4 text-accent" />
                Signal-first, user-centric
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
    <div className="rounded-xl border border-stroke bg-white/80 px-3 py-2 shadow-sm">
      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">{label}</div>
      <div className="text-sm font-semibold text-ink">{value}</div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-4 pb-16 pt-10 md:px-8">
      <section className="space-y-3">
        <WaveCanvas className="shadow-soft" />
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          <span className="rounded-full bg-accent/10 px-3 py-1 text-accent">Audio Visualizer</span>
          <span>Sinusoïde animée + bruit de Perlin · Signature Signal/IA</span>
        </div>
      </section>

      <Hero />

      <section className="space-y-8">
        <SectionTitle
          label="Compétences"
          title="Bento grid orientée data & signal"
          description="Une organisation visuelle qui reflète l'articulation entre mathématiques, IA appliquée et ingénierie logicielle."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {skillGroups.map((group) => (
            <BentoCard key={group.title} {...group} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionTitle
          label="Projets"
          title="Deux terrains de jeu"
          description="Applications réelles où robustesse, mesure et optimisation guident les choix techniques."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} delay={index * 0.1} {...project} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionTitle
          label="Parcours"
          title="Expérience & Formation"
          description="Un fil rouge : croiser théorie du signal, IA et développement pour livrer des systèmes utiles."
        />
        <Timeline items={timelineItems} />
      </section>

      <section className="space-y-8">
        <SectionTitle
          label="Contact"
          title="Collaboration ou stage ?"
          description="Je réponds rapidement : email, LinkedIn ou ce formulaire minimaliste."
        />
        <ContactCard />
      </section>

      <footer className="flex flex-col gap-2 border-t border-stroke pt-6 text-sm text-slate-600">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-semibold text-ink">Merveille Yomba</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          Étudiante Ingénieure ENSEA · Signal, IA & Software Engineering
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a className="text-accent font-semibold" href="mailto:merveilleroseyomba@gmail.com">merveilleroseyomba@gmail.com</a>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <a className="text-accent font-semibold" href="tel:+33745957416">+33 7 45 95 74 16</a>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <a className="text-accent font-semibold" target="_blank" rel="noreferrer" href="https://github.com/merveillerose">GitHub</a>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <a className="text-accent font-semibold" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/merveille-yomba-2b72a636a">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}
