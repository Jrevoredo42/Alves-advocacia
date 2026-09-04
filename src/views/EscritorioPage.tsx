"use client";

import { PageHero } from "../components/PageHero";
import { Reveal, Kicker } from "../components/Reveal";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";

const STATS = [
  { value: "26", label: "Anos de banca" },
  { value: "2", label: "Andares" },
  { value: "1.4k+", label: "Casos conduzidos" },
  { value: "100%", label: "Sigilo garantido" },
];

const SPACES = [
  {
    title: "Salas de reunião isoladas",
    desc: "Ambientes com isolamento acústico projetado, para que negociações e depoimentos aconteçam com sigilo absoluto.",
  },
  {
    title: "Biblioteca jurídica física",
    desc: "Acervo de doutrina e jurisprudência mantido internamente, complementado por bases digitais atualizadas diariamente.",
  },
  {
    title: "Gestão tecnológica de casos",
    desc: "Sistema próprio de acompanhamento processual que dá ao cliente visibilidade em tempo real de cada etapa.",
  },
];

export default function EscritorioPage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "12%"]);

  return (
    <>
      <PageHero
        index="01"
        kicker="O Escritório"
        title="A sede."
        lead="No coração do centro financeiro de São Paulo, uma estrutura pensada para a confidencialidade que a advocacia exige."
        image="https://images.unsplash.com/photo-1775144657610-9a6f171e522f?w=1600&h=900&fit=crop&auto=format"
        imageAlt="Sala principal do escritório Alves Advocacia com mobiliário clássico"
      />

      {/* Stats */}
      <section className="border-b border-hair bg-ink-soft py-16">
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-8 px-6 md:grid-cols-4 md:px-10">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <dt className="font-display text-4xl font-semibold text-gold md:text-5xl">{s.value}</dt>
              <dd className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-bone-dim">{s.label}</dd>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Narrative + image */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
            <div className="flex flex-col justify-center">
              <Reveal>
                <Kicker>Endereço</Kicker>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-7 font-display text-4xl font-medium leading-[1.05] tracking-tight text-bone md:text-5xl">
                  Faria Lima, 3477 —<span className="italic text-gold"> Itaim Bibi.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-8 max-w-xl font-body leading-relaxed text-bone-dim">
                  O escritório ocupa dois andares em uma das avenidas mais
                  emblemáticas de São Paulo. O ambiente combina o peso da
                  tradição jurídica com uma infraestrutura discreta e moderna,
                  onde cada detalhe — da recepção às salas de trabalho — foi
                  desenhado para transmitir seriedade e proteger a informação do
                  cliente.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-xl font-body leading-relaxed text-bone-dim">
                  O atendimento é sempre agendado, garantindo exclusividade e
                  atenção integral a cada caso.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div ref={ref} className="relative h-[420px] overflow-hidden md:h-[560px]">
                <motion.img
                  style={{ y }}
                  src="https://images.unsplash.com/photo-1775144657626-29ff0a46ca90?w=1200&h=1500&fit=crop&auto=format"
                  alt="Estantes de livros jurídicos na sede da Alves Advocacia"
                  className="absolute inset-[-8%_0] h-[116%] w-full object-cover grayscale-[0.25]"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Spaces */}
      <section className="border-t border-hair bg-ink-soft py-24 md:py-32">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10">
          <Reveal>
            <Kicker>A estrutura</Kicker>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden border border-hair bg-hair md:grid-cols-3">
            {SPACES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="h-full bg-ink p-8 transition-colors duration-500 hover:bg-panel">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-medium text-bone">{s.title}</h3>
                  <p className="mt-4 font-body text-sm leading-relaxed text-bone-dim">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <Link
              href="/#contato"
              className="group mt-16 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-gold"
            >
              Agende uma visita
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

