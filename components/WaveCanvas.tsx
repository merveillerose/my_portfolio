"use client";

import { useEffect, useRef } from "react";
import { cn } from "../lib/cn";

type WaveCanvasProps = {
  className?: string;
};

function createPerlin() {
  const permutation = new Uint8Array(512);
  for (let i = 0; i < 256; i += 1) permutation[i] = i;
  for (let i = 255; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [permutation[i], permutation[j]] = [permutation[j], permutation[i]];
  }
  for (let i = 0; i < 256; i += 1) permutation[i + 256] = permutation[i];

  const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
  const grad = (hash: number, x: number) => ((hash & 1) === 0 ? x : -x);

  return (x: number) => {
    const xi = Math.floor(x) & 255;
    const xf = x - Math.floor(x);
    const u = fade(xf);
    const a = permutation[xi];
    const b = permutation[xi + 1];
    return (1 - u) * grad(a, xf) + u * grad(b, xf - 1);
  };
}

export function WaveCanvas({ className }: WaveCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const noiseRef = useRef<((x: number) => number) | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    noiseRef.current = createPerlin();
    let animationId: number;
    let time = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      const width = parent ? parent.clientWidth : window.innerWidth;
      const height = 180;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const draw = () => {
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;
      ctx.clearRect(0, 0, width, height);

      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      ctx.strokeStyle = isLight ? "rgba(26, 86, 160, 0.08)" : "rgba(59, 130, 246, 0.05)";
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      const mid = height * 0.52;
      const amplitude = 28;
      const freq = 0.013;
      const noiseScale = 0.07;

      const drawWave = (
        offsetY: number,
        ampScale: number,
        timeScale: number,
        alpha: number,
        lineWidth: number,
        colorStart: string,
        colorEnd: string
      ) => {
        ctx.beginPath();
        for (let x = 0; x <= width; x += 4) {
          const sine = Math.sin(x * freq + time * timeScale);
          const n = noiseRef.current ? noiseRef.current(x * noiseScale + time * 0.01) : 0;
          const y = mid + offsetY + sine * amplitude * ampScale + n * amplitude * 0.5 * ampScale;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, colorStart);
        gradient.addColorStop(1, colorEnd);
        ctx.strokeStyle = gradient;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = lineWidth;
        ctx.shadowColor = isLight ? "rgba(26,86,160,0.35)" : "rgba(59,130,246,0.4)";
        ctx.shadowBlur = 12;
        ctx.stroke();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      };

      drawWave(18, 0.55, 0.028, 0.25, 1.5, "#1d4ed8", "#60a5fa");
      drawWave(0, 1, 0.035, 0.85, 2.5, "#2563eb", "#93c5fd");

      time += 1;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const observer = new ResizeObserver(() => resize());
    observer.observe(canvas.parentElement ?? canvas);

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={cn(
        "wave-shell relative overflow-hidden rounded-2xl border border-white/8 bg-[#0f1628] shadow-[0_2px_24px_rgba(0,0,0,0.35)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0f1628] to-transparent" />
      <canvas ref={canvasRef} className="relative block" aria-hidden="true" />
    </div>
  );
}
