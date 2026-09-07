"use client";

import { Reveal, Kicker } from "./Reveal";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";

const STATS = [
  { value: "26", label: "Anos de banca" },
  { value: "3", label: "Unidades" },
  { value: "1.4k+", label: "Casos conduzidos" },
];

export function Office() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "10%"]);

  return (
    <section id="escritorio" className="relative border-t border-hair bg-ink py-28 md:py-36">
      <div className="mx-auto max-w-310 px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          {/* Text */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <Kicker index="01">O Escritório</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-7 font-display text-4xl font-medium leading-[1.05] tracking-tight text-bone md:text-6xl">
                Uma sede pensada para a<span className="italic text-gold"> confidencialidade.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl font-body leading-relaxed text-bone-dim">
                No nosso escritório, acreditamos que a justiça é feita de gente e nossa missão diária é caminhar lado a lado com cada cliente, traduzindo as regras e emprestando nossa voz para defender seus direitos.
              </p>
            </Reveal>
            {/** 
            <Reveal delay={0.15}>
              <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-hair pt-8">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-4xl font-semibold text-gold md:text-5xl">
                      {s.value}
                    </dt>
                    <dd className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-bone-dim">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.2}>
              <Link
                href="/escritorio"
                className="group mt-10 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-gold"
              >
                Conheça a sede
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </Reveal>
            */}
          </div>

          {/* Image */}
          <Reveal delay={0.1}>
            <div className="flex flex-col">
              <span className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                Sede — PE
              </span>
              <div ref={ref} className="relative h-105 overflow-hidden md:h-150">
                <motion.img
                  style={{ y }}
                  src="/escritorio/escritorio.png"
                  alt="Sala principal do escritório Alves Advocacia com mobiliário clássico"
                  className="absolute inset-[-8%_0] h-[116%] w-full object-cover grayscale-[0.25]"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
              </div>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.24em] text-bone">
                R. Dantas Barreto, 232 - Santo Antônio, Garanhuns - PE
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

