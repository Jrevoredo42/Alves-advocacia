"use client";

import { Reveal } from "./Reveal";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { AREAS } from "../data";

export function AreasAccordion() {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="flex flex-col">
      {AREAS.map((a, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={a.n} delay={i * 0.05}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="group w-full border-b border-hair py-7 text-left transition-colors hover:border-gold/40"
            >
              <div className="flex items-baseline gap-5">
                <span className="font-mono text-[11px] tracking-[0.2em] text-gold">{a.n}</span>
                <h3
                  className={`flex-1 font-display text-2xl font-medium tracking-tight transition-colors md:text-4xl ${
                    isOpen ? "text-gold" : "text-bone"
                  }`}
                >
                  {a.title}
                </h3>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="font-body text-2xl font-light text-bone-dim group-hover:text-gold"
                >
                  +
                </motion.span>
              </div>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-lg pl-10 pt-5 font-body leading-relaxed text-bone-dim">{a.desc}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </Reveal>
        );
      })}
    </div>
  );
}
