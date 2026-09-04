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
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
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
                No coração do centro financeiro de São Paulo, o escritório ocupa
                dois andares na Av. Faria Lima. Salas de reunião isoladas
                acusticamente, biblioteca jurídica física e uma infraestrutura
                tecnológica de gestão de casos garantem que cada atendimento
                aconteça com o sigilo que a advocacia exige.
              </p>
            </Reveal>

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
          </div>

          {/* Image */}
          <Reveal delay={0.1} className="relative">
            <div ref={ref} className="relative h-[420px] overflow-hidden md:h-[600px]">
              <motion.img
                style={{ y }}
                src="https://images.unsplash.com/photo-1775144657610-9a6f171e522f?w=1200&h=1500&fit=crop&auto=format"
                alt="Sala principal do escritório Alves Advocacia com mobiliário clássico"
                className="absolute inset-[-8%_0] h-[116%] w-full object-cover grayscale-[0.25]"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/80 to-transparent p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-bone">
                  Av. Brigadeiro Faria Lima, 3477 — 12º e 13º andares
                </p>
              </div>
              <span className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                Sede — SP
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

