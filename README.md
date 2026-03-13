# Portfolio — Merveille YOMBA

Single-page Next.js (App Router) + Tailwind CSS + Framer Motion avec une identité axée signal / data / IA. Un audio visualizer (sinusoïde modulée par bruit de Perlin) trône en haut de page pour afficher le domaine d'expertise dès l'arrivée.

## Stack & principes
- Next.js 14 (App Router), React 18, TypeScript strict
- Tailwind CSS 3.4 (palette accent #1a56a0, fonds brumeux, bordures fines)
- Framer Motion pour reveals au scroll, hover states, micro-interactions
- Lucide icons, utilitaire `cn` minimal
- Design : minimalisme brutaliste doux (fond clair, cartes arrondies, ombres soft, espace blanc généreux)

## Démarrage local
```bash
npm install
npm run dev
# ouvrir http://localhost:3000
```

## Structure clef
- `app/page.tsx` : composition de la page (hero, bento skills, projets, timeline, contact, footer) + bandeau "Audio Visualizer".
- `components/WaveCanvas.tsx` : sinusoïde animée avec bruit de Perlin (canvas, responsive, halo accentué).
- `components/*` : blocs réutilisables (SectionTitle, BentoCard, ProjectCard, Timeline, ContactCard).
- `app/globals.css` : base Tailwind + helpers (signal-grid, glass, border-gradient, scrollbars).
- `tailwind.config.ts` : palette, shadows, radius, backgrounds (noise, grid).

## Points UI/UX
- Hero double : bloc texte + carte métriques "signal-first".
- Bento grid compétences en 3 groupes (Maths/Signal, IA, Software/Dev) avec chips et gradients dédiés.
- Cartes projets interactives (hover lift, métriques visibles).
- Timeline fusion ENSPY/ENSEA, ligne verticale gradient.
- Formulaire contact minimal + liens rapides.
- Audio Visualizer : sinusoïde + Perlin, grille subtile, gradient accent → raconte le métier avant le texte.

## Personnalisation rapide
- CV : placer votre PDF dans `public/MerveilleYomba_CV.pdf` (ou changer l'URL du CTA dans `app/page.tsx`).
- Couleurs : ajuster `accent`, `ink`, `mist` dans `tailwind.config.ts`.
- Texte/sections : éditer directement `app/page.tsx` (données `skillGroups`, `projects`, `timelineItems`).
- Animations : modifier durées/delays dans les variants Framer (SectionTitle, BentoCard, ProjectCard, Timeline, WaveCanvas).

## Déploiement Vercel
1. Pousser le repo sur GitHub.
2. Importer sur Vercel → framework Next.js détecté.
3. Variables : aucune requise par défaut.
4. Activer Edge cache statique (App Router) si souhaité.

## Accessibilité & perf
- Palette contrastée (accent sur fond clair), focus visibles par défaut Tailwind.
- Animations limitées et performantes (Framer + canvas léger, 60 FPS testé localement).
- Fonts en `display=swap` via `next/font` (Inter).

## Tests manuels suggérés
- Desktop + mobile (Responsiveness de la grille et du canvas).
- Vérifier le CTA CV (404 si le fichier n'est pas ajouté).
- Latence animations (dev mode vs build : `npm run build && npm start`).
