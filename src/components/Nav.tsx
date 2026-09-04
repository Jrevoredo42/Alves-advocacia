"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { to: "/escritorio", label: "O Escritório" },
  { to: "/advogados", label: "Advogados" },
  { to: "/atuacao", label: "Atuação" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "bg-ink/90 backdrop-blur-md border-b border-hair" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" onClick={() => setOpen(false)} className="flex items-baseline gap-2">
          <span className="font-display text-xl font-semibold tracking-tight text-bone">Alves</span>
          <span className="font-display text-xl font-light italic text-gold">Advocacia</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => {
            const isActive = pathname === l.to;
            return (
              <Link
                key={l.to}
                href={l.to}
                className={`group relative font-mono text-[12px] uppercase tracking-[0.2em] transition-colors hover:text-bone ${
                  isActive ? "text-bone" : "text-bone/85"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/#contato"
            className="hidden rounded-full border border-gold-dim px-5 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-gold hover:text-ink md:inline-block"
          >
            Consultar
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className={`h-px w-6 bg-bone transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-bone transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-hair px-6 py-4 md:hidden">
          {LINKS.map((l) => {
            const isActive = pathname === l.to;
            return (
              <Link
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className={`py-3 font-mono text-[13px] uppercase tracking-[0.2em] ${
                  isActive ? "text-gold font-semibold" : "text-bone/85"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/#contato"
            onClick={() => setOpen(false)}
            className="py-3 font-mono text-[13px] uppercase tracking-[0.2em] text-gold"
          >
            Consultar
          </Link>
        </nav>
      )}

      <motion.div className="h-px origin-left bg-gold" style={{ scaleX: progress }} />
    </header>
  );
}

