"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

type PageHeroProps = {
  index: string;
  kicker: string;
  title: React.ReactNode;
  lead: string;
  image: string;
  imageAlt: string;
  aspectRatio?: string;
  containerClassName?: string;
  imageClassName?: string;
};

export function PageHero({
  index,
  kicker,
  title,
  lead,
  image,
  imageAlt,
  aspectRatio,
  containerClassName = "",
  imageClassName = "",
}: PageHeroProps) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .from(".ph-line", { yPercent: 118, duration: 1.15, stagger: 0.1 })
        .from(".ph-fade", { opacity: 0, y: 18, duration: 0.9, stagger: 0.08 }, "-=0.6")
        .fromTo(".ph-img", { clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0% 0 0 0)", duration: 1.2, ease: "power3.inOut" }, "-=1");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden border-b border-hair pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="mx-auto max-w-310 px-6 md:px-10">
        <nav className="ph-fade mb-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-bone-dim">
          <Link href="/" className="transition-colors hover:text-gold">Início</Link>
          <span className="text-hair">/</span>
          <span className="text-gold">{kicker}</span>
        </nav>

        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-16">
          <div>
            <div className="ph-fade flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
              <span className="text-bone-dim">{index}</span>
              <span className="h-px w-8 bg-gold-dim" />
              <span>{kicker}</span>
            </div>
            <h1 className="mt-7 font-display text-5xl font-medium leading-[0.98] tracking-[-0.02em] text-bone md:text-7xl">
              <span className="block overflow-hidden py-[0.05em]">
                <span className="ph-line block">{title}</span>
              </span>
            </h1>
          </div>
          <p className="ph-fade max-w-md font-body leading-relaxed text-bone-dim">{lead}</p>
        </div>

        <div className={`ph-img mt-16 w-full overflow-hidden ${aspectRatio || "h-85 md:h-130"} ${containerClassName}`}>
          <img
            src={image}
            alt={imageAlt}
            className={`h-full w-full object-cover grayscale-[0.3] contrast-110 ${imageClassName}`}
          />
        </div>
      </div>
    </section>
  );
}

