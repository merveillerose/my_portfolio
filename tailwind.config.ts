import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1f2933",
        accent: "#1a56a0",
        mist: "#f5f7fb",
        stroke: "#e6e9f0"
      },
      boxShadow: {
        soft: "0 24px 60px rgba(15, 23, 42, 0.12)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.6)"
      },
      borderRadius: {
        card: "22px"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"]
      },
      backgroundImage: {
        "grid-signal":
          "radial-gradient(circle at 1px 1px, rgba(26,86,160,0.25) 1px, transparent 0)",
        "noise":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")"
      }
    }
  },
  plugins: []
};

export default config;
