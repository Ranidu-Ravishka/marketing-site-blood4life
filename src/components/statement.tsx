"use client";

import { useEffect, useRef } from "react";

export function Statement() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let running = true;

    const dots = Array.from({ length: 16 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 3 + Math.random() * 8,
      s: 0.2 + Math.random(),
      p: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * ratio));
      canvas.height = Math.max(1, Math.floor(height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = (time: number) => {
      if (!running) return;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      context.clearRect(0, 0, width, height);
      for (const dot of dots) {
        const x = dot.x * width + (reduce ? 0 : Math.sin(time * 0.00025 * dot.s + dot.p) * 20);
        const y = dot.y * height + (reduce ? 0 : Math.cos(time * 0.0002 * dot.s + dot.p) * 14);
        context.beginPath();
        context.fillStyle = "rgba(248, 247, 244, 0.28)";
        context.arc(x, y, dot.r, 0, Math.PI * 2);
        context.fill();
      }
      if (!reduce) frame = window.requestAnimationFrame(draw);
    };

    resize();
    frame = window.requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      running = false;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-primary text-background">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />
      <div className="relative mx-auto w-full max-w-[76rem] px-5 py-28 sm:px-8 lg:py-40">
        <h2 className="headline max-w-[14ch] text-background">Because someone, somewhere, needs you.</h2>
        <p className="mt-8 max-w-md text-lg leading-8 text-[#f6e7ea]">
          A small act of kindness can become someone’s greatest reason to hope.
        </p>
      </div>
    </section>
  );
}
