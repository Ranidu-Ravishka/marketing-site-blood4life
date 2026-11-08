"use client";

import { motion, useReducedMotion } from "motion/react";
import { Phone } from "@/components/phone";
import { Reveal } from "@/components/reveal";

export function Showcase() {
  const reduce = useReducedMotion();

  return (
    <section id="showcase" className="overflow-hidden">
      <div className="mx-auto grid w-full max-w-[76rem] gap-16 px-5 py-28 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:py-36">
        <Reveal>
          <h2 className="headline">
            Thoughtfully designed.
            <span className="mt-2 block text-primary">Made for real life.</span>
          </h2>
          <p className="prose-quiet mt-6">
            The Flutter repository does not include exported screen captures, so these devices are deliberately presented as interface studies, not product screenshots.
          </p>
          <p className="mt-5 text-sm leading-7 text-muted">
            To replace them with genuine product imagery, export Home, Donate Blood, Find a Donor, Blood Banks, Hospitals, and Profile from the running application.
          </p>
        </Reveal>
        <div className="relative mx-auto h-[34rem] w-full max-w-[36rem] sm:h-[40rem]">
          <motion.div
            className="absolute left-[18%] top-8 z-20 w-[58%] sm:left-[22%] sm:w-[52%]"
            initial={reduce ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Phone screen="home" label="Home" />
          </motion.div>
          <motion.div
            className="absolute left-0 top-24 z-10 hidden w-[38%] sm:block"
            initial={reduce ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.12 }}
          >
            <Phone screen="donate" label="Donate" />
          </motion.div>
          <motion.div
            className="absolute right-0 top-36 z-10 hidden w-[34%] sm:block"
            initial={reduce ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.18 }}
          >
            <Phone screen="profile" label="Profile" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
