import { motion } from "framer-motion";

export function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="relative overflow-hidden rounded-card border border-stroke bg-white/90 p-6 shadow-sm"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/6 via-transparent to-transparent" />
      <div className="relative z-10 space-y-4">
        <h3 className="text-xl font-semibold text-ink">Restons en contact</h3>
        <p className="text-slate-700">
          Ouverte aux opportunités de stage (avril 2026, 4 mois). Discutons d'IA, signal ou pipelines data.
        </p>
        <form className="space-y-3">
          <div className="grid gap-3 md:grid-cols-2">
            <input
              required
              type="text"
              placeholder="Votre nom"
              className="w-full rounded-xl border border-stroke bg-white px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-stroke bg-white px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </div>
          <textarea
            required
            rows={4}
            placeholder="Votre message"
            className="w-full rounded-xl border border-stroke bg-white px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/30"
          >
            Envoyer le message
          </button>
        </form>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-700">
          <a href="mailto:merveilleroseyomba@gmail.com" className="font-semibold text-accent">merveilleroseyomba@gmail.com</a>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <a href="tel:+33745957416" className="font-semibold text-accent">+33 7 45 95 74 16</a>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <a href="https://github.com/merveillerose" className="font-semibold text-accent" target="_blank" rel="noreferrer">GitHub</a>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <a href="https://www.linkedin.com/in/merveille-yomba-2b72a636a" className="font-semibold text-accent" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </motion.div>
  );
}
