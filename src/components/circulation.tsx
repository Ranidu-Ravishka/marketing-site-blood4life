"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  r: number;
  phase: number;
  speed: number;
  depth: number;
};

export function Circulation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    let running = true;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = section.clientWidth;
      height = section.clientHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const count = width < 700 ? 14 : 28;
      particles.length = 0;
      for (let index = 0; index < count; index += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: 4 + Math.random() * (width < 700 ? 7 : 12),
          phase: Math.random() * Math.PI * 2,
          speed: 0.15 + Math.random() * 0.35,
          depth: 0.35 + Math.random() * 0.65,
        });
      }
    };

    const draw = (time: number) => {
      if (!running) return;
      if (visible) {
        const rect = section.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, 1 - (rect.bottom / (window.innerHeight + rect.height))));
        context.clearRect(0, 0, width, height);

        const points = particles.map((particle) => {
          const drift = reduce ? 0 : Math.sin(time * 0.00035 * particle.speed + particle.phase) * 18 * particle.depth;
          const flow = reduce ? 0 : progress * width * 0.18 * particle.depth;
          const x = ((particle.x + drift + flow) % width + width) % width;
          const y = particle.y + (reduce ? 0 : Math.cos(time * 0.00028 * particle.speed + particle.phase) * 12);
          return { ...particle, x, y };
        });

        context.lineWidth = 1;
        for (let i = 0; i < points.length; i += 1) {
          for (let j = i + 1; j < points.length; j += 1) {
            const dx = points[i].x - points[j].x;
            const dy = points[i].y - points[j].y;
            const distance = Math.hypot(dx, dy);
            if (distance < 140) {
              context.strokeStyle = `rgba(143, 38, 56, ${((1 - distance / 140) * 0.22).toFixed(3)})`;
              context.beginPath();
              context.moveTo(points[i].x, points[i].y);
              context.lineTo(points[j].x, points[j].y);
              context.stroke();
            }
          }
        }

        for (const point of points) {
          context.beginPath();
          context.fillStyle = `rgba(143, 38, 56, ${(0.18 + point.depth * 0.45).toFixed(3)})`;
          context.ellipse(point.x, point.y, point.r * 1.35, point.r, -0.4, 0, Math.PI * 2);
          context.fill();
          context.beginPath();
          context.fillStyle = `rgba(255, 248, 246, ${0.28 * point.depth})`;
          context.ellipse(point.x - point.r * 0.25, point.y - point.r * 0.2, point.r * 0.35, point.r * 0.22, 0, 0, Math.PI * 2);
          context.fill();
        }
      }

      if (!reduce) frame = window.requestAnimationFrame(draw);
    };

    resize();
    frame = window.requestAnimationFrame(draw);

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(section);
    window.addEventListener("resize", resize);

    return () => {
      running = false;
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative isolate min-h-[78vh] overflow-hidden border-y border-border">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />
      <div className="relative mx-auto flex min-h-[78vh] w-full max-w-[76rem] flex-col justify-end px-5 py-20 sm:px-8">
        <p className="kicker">The experience</p>
        <h2 className="headline mt-5 max-w-[14ch]">A quiet circulation.</h2>
        <p className="prose-quiet mt-6 max-w-md">
          Abstract cells drift, meet, and move on. A visual note on donation, connection, and flow.
        </p>
      </div>
    </section>
  );
}
