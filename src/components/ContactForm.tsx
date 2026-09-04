"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal, Kicker } from "./Reveal";

function AreaSelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex w-full items-center justify-between border-b py-3 pr-1 text-left font-body outline-none transition-colors ${
          open ? "border-gold" : "border-hair hover:border-gold-dim"
        } ${value ? "text-bone" : "text-bone-dim/50"}`}
      >
        <span>{value || "Selecione a área de direito"}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-gold"
        >
          ▾
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-20 mt-2 max-h-72 w-full overflow-auto border border-hair bg-ink-soft shadow-2xl shadow-black/60 backdrop-blur"
          >
            {AREAS.map((a, i) => {
              const selected = a === value;
              return (
                <li key={a} role="option" aria-selected={selected}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(a);
                      setOpen(false);
                    }}
                    className={`group flex w-full items-center gap-3 border-l-2 px-4 py-3 text-left font-body text-sm transition-colors ${
                      selected
                        ? "border-gold bg-panel text-gold"
                        : "border-transparent text-bone-dim hover:border-gold-dim hover:bg-panel hover:text-bone"
                    }`}
                  >
                    <span className="font-mono text-[10px] tracking-[0.2em] text-gold/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">{a}</span>
                    {selected && <span className="text-gold">✓</span>}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

// Número do escritório (formato internacional, apenas dígitos).
const WHATSAPP = "5511300044000";

const AREAS = [
  "Direito de Família & Divórcio",
  "Inventário & Herança",
  "Direito Criminal",
  "Direito Empresarial",
  "Direito Tributário",
  "Direito Trabalhista",
  "Direito do Consumidor",
  "Contencioso Cível",
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState(false);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!area) {
      setError(true);
      return;
    }
    const linhas = [
      "Olá, gostaria de uma consulta com a Alves Advocacia.",
      name && `Nome: ${name}`,
      area && `Área: ${area}`,
      message && `Mensagem: ${message}`,
    ].filter(Boolean);
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(linhas.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contato" className="relative border-t border-hair bg-ink-soft py-28 md:py-36">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div>
            <Reveal>
              <Kicker>Contato</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-7 font-display text-4xl font-medium leading-[1.02] tracking-tight text-bone md:text-6xl">
                Descreva seu caso<span className="italic text-gold">.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-md font-body leading-relaxed text-bone-dim">
                Escolha a área de direito, escreva brevemente sua situação e
                envie diretamente ao nosso WhatsApp. O primeiro contato é
                confidencial e sem compromisso.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <form onSubmit={send} className="flex flex-col gap-6">
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-bone-dim">Nome</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Como devemos chamá-lo(a)?"
                  className="border-b border-hair bg-transparent py-3 font-body text-bone outline-none transition-colors placeholder:text-bone-dim/50 focus:border-gold"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-bone-dim">Área de atuação</span>
                <AreaSelect
                  value={area}
                  onChange={(v) => {
                    setArea(v);
                    setError(false);
                  }}
                />
                {error && (
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold-bright">
                    Selecione uma área para continuar
                  </span>
                )}
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-bone-dim">Sua mensagem</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Descreva brevemente o que precisa (opcional)."
                  className="resize-none border-b border-hair bg-transparent py-3 font-body text-bone outline-none transition-colors placeholder:text-bone-dim/50 focus:border-gold"
                />
              </label>

              <button
                type="submit"
                className="group mt-2 inline-flex w-fit items-center gap-3 rounded-full bg-gold px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.18em] text-ink transition-all duration-300 hover:bg-gold-bright"
              >
                Enviar ao WhatsApp
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
