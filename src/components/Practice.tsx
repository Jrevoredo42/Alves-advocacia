"use client";

import { Reveal, Kicker } from "./Reveal";
import { AreasAccordion } from "./AreasAccordion";
import Link from "next/link";

export function Practice() {
  return (
    <section id="atuacao" className="relative border-t border-hair bg-ink py-28 md:py-36">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
          <div className="md:sticky md:top-32 md:self-start">
            <Reveal>
              <Kicker index="03">A Proposta</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-7 font-display text-4xl font-medium leading-[1.05] tracking-tight text-bone md:text-6xl">
                Direito como<span className="italic text-gold"> instrumento de decisão.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-md font-body leading-relaxed text-bone-dim">
                Não vendemos horas — entregamos clareza. Nossa atuação combina
                profundidade técnica e tecnologia de gestão para que o cliente
                sempre saiba onde está, para onde vai e por quê.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                href="/atuacao"
                className="group mt-8 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-gold"
              >
                Ver todas as áreas
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </Reveal>
          </div>

          <AreasAccordion />
        </div>
      </div>
    </section>
  );
}

