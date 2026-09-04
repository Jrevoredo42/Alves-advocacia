"use client";

import { Reveal } from "./Reveal";
import { motion } from "motion/react";
import { useState } from "react";
import { LAWYERS } from "../data";

export function LawyerGrid({ showBio = false }: { showBio?: boolean }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {LAWYERS.map((l, i) => (
        <Reveal key={l.name} delay={i * 0.08}>
          <motion.article
            onHoverStart={() => setActive(i)}
            onHoverEnd={() => setActive(null)}
            className="group relative flex h-full flex-col overflow-hidden border border-hair bg-ink transition-colors duration-500 hover:border-gold/40"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-panel">
              <img
                src={l.img}
                alt={`Retrato de ${l.name}, ${l.role}`}
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              <motion.span
                className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.24em] text-gold"
                animate={{ opacity: active === i ? 1 : 0.6 }}
              >
                {String(i + 1).padStart(2, "0")}
              </motion.span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-2xl font-medium text-bone">{l.name}</h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-gold">{l.role}</p>
              {showBio && (
                <p className="mt-4 font-body text-sm leading-relaxed text-bone-dim">{l.bio}</p>
              )}
              <div className="mt-auto pt-6">
                <p className="font-body text-sm text-bone-dim">{l.focus}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-bone-dim/70">{l.oab}</p>
              </div>
            </div>
            <span className="absolute inset-x-0 bottom-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
          </motion.article>
        </Reveal>
      ))}
    </div>
  );
}
