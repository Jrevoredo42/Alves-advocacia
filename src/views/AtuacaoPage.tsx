"use client";

import { PageHero } from "../components/PageHero";
import { AreasAccordion } from "../components/AreasAccordion";
import { Reveal, Kicker } from "../components/Reveal";
import Link from "next/link";

const METHOD = [
  { step: "01", title: "Diagnóstico", desc: "Entendemos o caso em profundidade antes de sugerir qualquer caminho." },
  { step: "02", title: "Estratégia", desc: "Definimos a tese, os riscos e o cenário provável, por escrito e com clareza." },
  { step: "03", title: "Execução", desc: "Conduzimos o processo com acompanhamento em tempo real de cada etapa." },
  { step: "04", title: "Resultado", desc: "Reportamos desfechos e próximos passos sem jargão, com transparência total." },
];

export default function AtuacaoPage() {
  return (
    <>
      <PageHero
        index="03"
        kicker="Atuação"
        title="As áreas."
        lead="Atuação concentrada em frentes onde a profundidade técnica faz diferença real no resultado."
        image="/advogados/equipe.png"
        imageAlt="Fachada clássica com colunas, símbolo da tradição jurídica"
        aspectRatio="aspect-[4096/2926]"
      />

      {/* Proposta */}
      <section className="border-b border-hair bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-310 px-6 md:px-10">
          <Reveal>
            <p className="max-w-4xl font-display text-3xl font-light leading-tight text-bone md:text-5xl">
              Nossa atuação se baseia em oferecer uma advocacia humana, acessível, estratégica e comprometida com quem deposita em nós a sua
              <span className="text-gold"> confiança.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Áreas */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-310 px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
            <div className="md:sticky md:top-32 md:self-start">
              <Reveal>
                <Kicker index="—">Especialidades</Kicker>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-7 font-display text-4xl font-medium leading-[1.05] tracking-tight text-bone md:text-5xl">
                  Onde<span className="italic text-gold"> atuamos.</span>
                </h2>
              </Reveal>
            </div>
            <AreasAccordion />
          </div>
        </div>
      </section>

      {/* Método */}
      <section className="border-t border-hair bg-ink-soft py-24 md:py-32">
        <div className="mx-auto max-w-310 px-6 md:px-10">
          <Reveal>
            <Kicker>O método</Kicker>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden border border-hair bg-hair md:grid-cols-4">
            {METHOD.map((m, i) => (
              <Reveal key={m.step} delay={i * 0.07}>
                <div className="h-full bg-ink p-7 transition-colors duration-500 hover:bg-panel">
                  <span className="font-display text-3xl font-semibold text-gold">{m.step}</span>
                  <h3 className="mt-4 font-display text-xl font-medium text-bone">{m.title}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-bone-dim">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <Link
              href="/#contato"
              className="group mt-16 inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.18em] text-ink transition-all duration-300 hover:bg-gold-bright"
            >
              Descreva seu caso
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

