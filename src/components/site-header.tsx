"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { nav } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector(item.href))
      .filter((node): node is Element => node instanceof Element);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.15, 0.4, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-[4.6rem] w-full max-w-[76rem] items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 text-foreground" aria-label="Blood4Life home">
          <BrandMark className="h-7 w-7 text-primary" />
          <span className="text-[1.05rem] font-medium tracking-[-0.04em]">Blood4Life</span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
              className={`text-[0.82rem] tracking-wide transition-colors ${
                active === item.href ? "text-primary" : "text-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden>
            <span className={`h-px w-full bg-foreground transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-full bg-foreground transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      {open ? (
        <nav id="mobile-nav" className="border-t border-border bg-background px-6 py-6 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-3 text-2xl tracking-[-0.04em]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
