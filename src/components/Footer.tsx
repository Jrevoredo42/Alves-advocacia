"use client";

import Link from "next/link";

const NAV = [
  { to: "/escritorio", label: "O Escritório" },
  { to: "/advogados", label: "Advogados" },
  { to: "/atuacao", label: "Atuação" },
];

export function Footer() {
  return (
    <footer className="border-t border-hair bg-ink">
      <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-semibold text-bone">Alves</span>
              <span className="font-display text-2xl font-light italic text-gold">Advocacia</span>
            </div>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-bone-dim">
              Advocacia empresarial e contenciosa conduzida com rigor técnico e
              discrição desde 1998.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">Navegação</p>
            <ul className="mt-4 space-y-2">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link
                    href={n.to}
                    className="font-body text-sm text-bone-dim transition-colors hover:text-bone"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">Sede</p>
            <p className="mt-4 font-body text-sm leading-relaxed text-bone-dim">
              Av. Brigadeiro Faria Lima, 3477
              <br />
              12º e 13º andares — Itaim Bibi
              <br />
              São Paulo — SP
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-hair pt-8 md:flex-row md:items-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim/70">
            © 2026 Alves Advocacia — OAB/SP. Todos os direitos reservados.
          </p>
          <Link
            href="/#contato"
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-bright"
          >
            Fale conosco →
          </Link>
        </div>
      </div>
    </footer>
  );
}

