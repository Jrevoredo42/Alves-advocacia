"use client";

import { PageHero } from "../components/PageHero";
import { LawyerGrid } from "../components/LawyerGrid";
import { Reveal, Kicker } from "../components/Reveal";
import Link from "next/link";

const VALUES = [
  {
    title: "Atendimento pelo sócio",
    desc: "Do primeiro contato à decisão final, o cliente fala diretamente com quem conduz o caso.",
  },
  {
    title: "Discrição como método",
    desc: "Informação sensível é tratada com protocolos rígidos de sigilo, dentro e fora do processo.",
  },
  {
    title: "Estratégia antes da petição",
    desc: "Cada movimento é planejado. Nenhuma peça é protocolada sem uma tese clara por trás.",
  },
];

export default function AdvogadosPage() {
  return (
    <>
      <PageHero
        index="02"
        kicker="Os Advogados"
        title="A banca."
        lead="Uma equipe enxuta e sênior, onde cada nome responde pessoalmente pelos casos que assume."
        image="https://images.unsplash.com/photo-1571055931484-22dce9d6c510?w=1600&h=900&fit=crop&auto=format"
        imageAlt="Mesa de reunião do escritório Alves Advocacia"
      />

      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10">
          <Reveal>
            <Kicker>Sócios & Associados</Kicker>
          </Reveal>
          <div className="mt-12">
            <LawyerGrid showBio />
          </div>
        </div>
      </section>

      <section className="border-t border-hair bg-ink-soft py-24 md:py-32">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
            <div>
              <Reveal>
                <Kicker>Como trabalhamos</Kicker>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-7 font-display text-4xl font-medium leading-[1.05] tracking-tight text-bone md:text-5xl">
                  Poucos casos,<span className="italic text-gold"> muita atenção.</span>
                </h2>
              </Reveal>
            </div>
            <div className="flex flex-col">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="flex gap-6 border-b border-hair py-8">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-medium text-bone">{v.title}</h3>
                      <p className="mt-3 max-w-md font-body leading-relaxed text-bone-dim">{v.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={0.1}>
                <Link
                  href="/#contato"
                  className="group mt-10 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-gold"
                >
                  Fale com um advogado
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

