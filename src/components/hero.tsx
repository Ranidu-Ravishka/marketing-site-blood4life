"use client";

import { motion, useReducedMotion } from "motion/react";
import { Phone } from "@/components/phone";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 top-10 h-[34rem] w-[34rem] rounded-full bg-secondary/80 blur-3xl" aria-hidden />
      <div className="mx-auto grid w-full max-w-[76rem] items-end gap-14 px-5 pb-24 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-28">
        <div>
          <motion.p
            className="kicker"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            One donation
          </motion.p>
          <h1 className="display mt-6 max-w-[12ch] text-foreground">
            <motion.span
              className="block"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease }}
            >
              A little kindness.
            </motion.span>
            <motion.span
              className="mt-1 block text-primary"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.18, ease }}
            >
              A lifetime of impact.
            </motion.span>
          </h1>
          <motion.p
            className="prose-quiet mt-8 max-w-[34rem]"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.32 }}
          >
            Connecting blood donors, recipients, and blood banks through a thoughtfully designed mobile experience.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease }}
          >
            <a href="#purpose" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm text-white">
              Discover Blood4Life
            </a>
            <a href="#showcase" className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-6 text-sm text-foreground">
              Explore the App
            </a>
          </motion.div>
        </div>
        <motion.div
          className="relative mx-auto w-full max-w-[22rem] lg:max-w-none"
          initial={reduce ? false : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05, delay: 0.2, ease }}
        >
          <p className="pointer-events-none absolute -left-6 top-8 hidden font-medium tracking-[-0.08em] text-secondary text-[7rem] leading-none lg:block" aria-hidden>
            01
          </p>
          <div className="relative z-10 ml-auto w-[72%] sm:w-[64%]">
            <Phone screen="home" label="Home" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
