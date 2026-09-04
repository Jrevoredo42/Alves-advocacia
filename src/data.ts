export type Lawyer = {
  name: string;
  role: string;
  oab: string;
  focus: string;
  bio: string;
  img: string;
};

export const LAWYERS: Lawyer[] = [
  {
    name: "Ricardo Alves",
    role: "Sócio-fundador",
    oab: "OAB/SP 128.440",
    focus: "Direito Empresarial & Societário",
    bio: "Fundou a banca em 1998 após uma década em contencioso empresarial. Conduz operações societárias e reestruturações de alta complexidade.",
    img: "https://images.unsplash.com/photo-1775338893229-75247d89c598?w=800&h=1000&fit=crop&auto=format",
  },
  {
    name: "Helena Prado",
    role: "Sócia",
    oab: "OAB/SP 214.907",
    focus: "Contencioso Cível & Arbitragem",
    bio: "Árbitra listada em câmaras nacionais, atua em disputas de médio e grande porte com foco em estratégia processual e negociação.",
    img: "https://images.unsplash.com/photo-1761765231009-3318bc43c2f6?w=800&h=1000&fit=crop&auto=format",
  },
  {
    name: "Bruno Aigner",
    role: "Advogado Sênior",
    oab: "OAB/SP 301.552",
    focus: "Direito Tributário",
    bio: "Especialista em planejamento e contencioso tributário, com atuação recorrente em tribunais administrativos e recuperação de créditos.",
    img: "https://images.unsplash.com/photo-1767175620484-1ed37931a0d1?w=800&h=1000&fit=crop&auto=format",
  },
];

export type Area = { n: string; title: string; desc: string };

export const AREAS: Area[] = [
  {
    n: "01",
    title: "Direito Empresarial",
    desc: "Estruturação societária, fusões e aquisições, governança e contratos complexos. Assessoria contínua para decisões de alto impacto.",
  },
  {
    n: "02",
    title: "Contencioso & Arbitragem",
    desc: "Condução de disputas judiciais e arbitrais de médio e grande porte, com estratégia processual construída caso a caso.",
  },
  {
    n: "03",
    title: "Direito Tributário",
    desc: "Planejamento, contencioso administrativo e judicial, e recuperação de créditos com leitura precisa do risco fiscal.",
  },
  {
    n: "04",
    title: "Direito de Família & Sucessões",
    desc: "Divórcios, inventários, heranças e planejamento sucessório conduzidos com sensibilidade e discrição absoluta.",
  },
  {
    n: "05",
    title: "Compliance & Consultivo",
    desc: "Programas de integridade, adequação regulatória e pareceres que antecipam o conflito antes que ele exista.",
  },
];
