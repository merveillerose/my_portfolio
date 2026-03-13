"use client";

import { useEffect, useRef } from "react";
import { cn } from "../lib/cn";

type WaveCanvasProps = {
  className?: string;
};

// Simple 1D Perlin noise implementation for smooth amplitude modulation
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
  const noise = useRef<((x: number) => number) | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    noise.current = createPerlin();
    let animationId: number;
    let time = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      const width = parent ? parent.clientWidth : window.innerWidth;
      const height = 220;
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

      // Background grid lines
      ctx.strokeStyle = "rgba(26, 86, 160, 0.08)";
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 32) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 32) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      const mid = height * 0.55;
      const amplitude = 34;
      const freq = 0.014;
      const noiseScale = 0.08;

      ctx.beginPath();
      for (let x = 0; x <= width; x += 6) {
        const sine = Math.sin(x * freq + time * 0.035);
        const n = noise.current ? noise.current(x * noiseScale + time * 0.012) : 0;
        const y = mid + sine * amplitude + n * amplitude * 0.6;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, "#1a56a0");
      gradient.addColorStop(1, "#4f8dd7");
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 3;
      ctx.shadowColor = "rgba(26,86,160,0.28)";
      ctx.shadowBlur = 18;
      ctx.stroke();

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
    <div className={cn("relative overflow-hidden rounded-3xl border border-stroke/70 bg-white/80", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-white" />
      <canvas ref={canvasRef} className="relative block" aria-hidden="true" />
    </div>
  );
}
