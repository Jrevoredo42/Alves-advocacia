"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: root,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.55, 0.9]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(".hero-line", {
        yPercent: 118,
        duration: 1.25,
        stagger: 0.12,
      })
        .from(
          ".hero-meta",
          { opacity: 0, y: 20, duration: 1, stagger: 0.1 },
          "-=0.7",
        )
        .fromTo(
          ".hero-rule",
          { scaleX: 0 },
          { scaleX: 1, duration: 1.1, ease: "power3.inOut" },
          "-=0.9",
        );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="top" className="relative min-h-svh overflow-hidden">
      {/* Image column (right) */}
      <div className="absolute inset-0 grid md:grid-cols-[1.05fr_0.95fr]">
        <div className="hidden md:block" />
        <div className="relative overflow-hidden bg-ink-soft">
          <motion.div ref={imgRef} style={{ y: imgY }} className="absolute inset-[-12%_0_-12%_0]">
            <img
              src="/home/hero.jpg"
              alt="Interior do escritório Alves Advocacia, com estantes de livros jurídicos"
              className="h-full w-full object-cover grayscale-[0.35] contrast-110"
            />
          </motion.div>
          <motion.div
            style={{ opacity: overlay }}
            className="absolute inset-0 bg-linear-to-r from-ink via-ink/40 to-ink/10"
          />
          <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-2 flex min-h-svh max-w-310 flex-col justify-center px-6 pt-32 pb-16 md:px-10">
        <div className="hero-meta mb-8 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
          <span className="h-px w-10 bg-gold-dim" />
          <span>Garanhuns — OAB/PE</span>
        </div>

        <h1 className="max-w-[13ch] font-display text-[9.5vw] font-medium leading-[0.92] tracking-[-0.02em] text-bone sm:text-[8.5vw] md:text-[5.4vw]">
          <span className="block overflow-hidden">
            <span className="hero-line block">Soluções jurídicas com estratégia, clareza e</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block italic text-gold">resultado</span>
          </span>
        </h1>

        <div className="hero-rule mt-10 h-px w-full max-w-md origin-left bg-hair" />

        <p className="hero-meta mt-8 max-w-lg font-body text-base leading-relaxed text-bone-dim md:text-lg">
          Por trás de cada resultado existe preparo — e na advocacia, cada detalhe importa. Estratégia, dedicação e compromisso que começam muito antes de qualquer conquista.
        </p>

        <div className="hero-meta mt-12 flex flex-wrap items-center gap-4">
          <Link
            href="/#atuacao"
            className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.18em] text-ink transition-all duration-300 hover:bg-gold-bright"
          >
            Áreas de atuação
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/#advogados"
            className="font-mono text-[12px] uppercase tracking-[0.18em] text-bone-dim underline-offset-4 transition-colors hover:text-bone hover:underline"
          >
            Conheça a equipe
          </Link>
        </div>
      </div>

      <div className="hero-meta pointer-events-none absolute bottom-6 left-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-dim md:left-10">
        <span className="inline-block h-3 w-px animate-pulse bg-gold" />
        Role para navegar
      </div>
    </section>
  );
}

