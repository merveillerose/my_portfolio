import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Merveille Yomba | Portfolio",
  description:
    "Portfolio de Merveille Yomba — Étudiante Ingénieure ENSEA spécialisée en traitement du signal, IA et software engineering."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} font-sans bg-mist text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
