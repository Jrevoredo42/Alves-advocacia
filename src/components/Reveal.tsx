"use client";

import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

/** Fades + lifts its children into view on scroll. */
export function Reveal({ children, delay = 0, y = 28, className, once = true }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-12% 0px -12% 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Section eyebrow label in mono, with a gold tick. */
export function Kicker({ children, index }: { children: ReactNode; index?: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.34em] text-gold">
      {index && <span className="text-bone-dim">{index}</span>}
      <span className="h-px w-8 bg-gold-dim" />
      <span>{children}</span>
    </div>
  );
}
