"use client";

import { useEffect, useRef } from "react";
import { stages } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function HowItWorks() {
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    const section = sectionRef.current;
    if (!line || !section) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    line.style.transform = "scaleX(0)";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) line.style.transform = "scaleX(1)";
      },
      { threshold: 0.45 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="how" className="border-y border-border bg-[#f3f1ec]">
      <div className="mx-auto w-full max-w-[76rem] px-5 py-28 sm:px-8 lg:py-36">
        <Reveal>
          <h2 className="headline max-w-[16ch]">A simple connection can make a difference.</h2>
        </Reveal>
        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-3 hidden h-px origin-left bg-primary/50 transition-transform duration-[1400ms] ease-out lg:block" ref={lineRef} />
          <ol className="grid gap-14 border-l border-primary/30 pl-6 lg:grid-cols-3 lg:gap-10 lg:border-0 lg:pl-0">
            {stages.map((stage, index) => (
              <Reveal key={stage.index} delay={index * 0.08}>
                <li>
                  <span className="relative z-10 grid h-6 w-6 place-items-center rounded-full border border-primary bg-background text-[0.65rem] text-primary">
                    {stage.index}
                  </span>
                  <h3 className="mt-8 text-3xl tracking-[-0.04em]">{stage.title}</h3>
                  <p className="mt-4 max-w-xs text-[0.98rem] leading-7 text-[#5e5a57]">{stage.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
