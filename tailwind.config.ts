import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#e6ecf5",
        accent: "#1a56a0",
        magenta: "#ff007f",
        neon: "#7c3aed",
        flare: "#ff5fa3",
        mist: "#0a0f14",
        stroke: "#1c2430"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(5, 10, 20, 0.45)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.08)",
        magenta: "0 12px 40px rgba(255, 0, 127, 0.28)"
      },
      borderRadius: {
        card: "22px"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"]
      },
      backgroundImage: {
        "grid-signal":
          "radial-gradient(circle at 1px 1px, rgba(26,86,160,0.35) 1px, transparent 0)",
        noise:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")"
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", opacity: "0.6" },
          "70%": { transform: "scale(1.25)", opacity: "0" },
          "100%": { opacity: "0" }
        },
        glitch: {
          "0%": { transform: "translate(0,0)" },
          "20%": { transform: "translate(-2px,1px)" },
          "40%": { transform: "translate(2px,-1px)" },
          "60%": { transform: "translate(-1px,2px)" },
          "80%": { transform: "translate(1px,-2px)" },
          "100%": { transform: "translate(0,0)" }
        }
      },
      animation: {
        "pulse-ring": "pulse-ring 2.8s cubic-bezier(0.36, 0, 0.66, -0.56) infinite",
        glitch: "glitch 0.8s steps(2,end) infinite"
      }
    }
  },
  plugins: []
};

export default config;
