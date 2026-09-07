"use client";

import { Reveal, Kicker } from "./Reveal";
import { LawyerGrid } from "./LawyerGrid";
import Link from "next/link";

export function Lawyers() {
  return (
    <section id="advogados" className="relative border-t border-hair bg-ink-soft py-28 md:py-36">
      <div className="mx-auto max-w-310 px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <Kicker index="02">Os Advogados</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-7 max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-bone md:text-6xl">
                Uma banca de nomes,<span className="italic text-gold"> não de números.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-xs font-body text-sm leading-relaxed text-bone-dim">
              Cada cliente é acompanhado diretamente por um sócio. Sem
              intermediários, sem terceirização de responsabilidade.
            </p>
          </Reveal>
        </div>

        <div className="mt-16">
          <LawyerGrid />
        </div>

        <Reveal delay={0.1}>
          <Link
            href="/advogados"
            className="group mt-12 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-gold"
          >
            Conheça a equipe completa
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

