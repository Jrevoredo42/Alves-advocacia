"use client";

import { Reveal, Kicker } from "./Reveal";
import { AreasAccordion } from "./AreasAccordion";
import Link from "next/link";

export function Practice() {
  return (
    <section id="atuacao" className="relative border-t border-hair bg-ink py-28 md:py-36">
      <div className="mx-auto max-w-310 px-6 md:px-10">
        <div className="grid gap-14 md:grid-cols-[1.25fr_0.75fr] md:gap-16 lg:gap-20">
          <div className="md:sticky md:top-36 md:self-start pt-4 md:pt-12 lg:pt-16">
            <Reveal>
              <Kicker index="03">A Proposta</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-7 font-display text-4xl font-medium leading-[1.1] tracking-tight text-bone md:text-[44px] lg:text-[50px]">
                Uma assessoria jurídica responsável e comprometida com a<span className="italic text-gold"> segurança dos seus direitos,  faz total diferença.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl font-body leading-relaxed text-bone-dim">
                A advocacia não transforma apenas processos. Ela contribui para transformar realidades, proteger direitos e construir soluções.
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

