export type Lawyer = {
  name: string;
  role: string;
  oab?: string;
  focus?: string;
  bio?: string;
  img: string;
};

export const LAWYERS: Lawyer[] = [
  {
    name: "Bruno Alves",
    role: "Sócio-fundador",
    // oab: "OAB/SP 128.440",
    focus: "OAB 56075",
    bio: "Me chamo Bruno Filipe, saí do Mato Grosso e vim parar no agreste de Pernambuco aos 4 anos de idade. Aprendi logo cedo que se adaptar é preciso, trouxe pra advocacia essa resiliência. Na vida, até posso ficar as vezes ansioso pra chegar logo o final de uma partida de xadrez, mas aqui, no direito, a paciência é uma arma secreta e uma virtude inegociável pra atuação profissional.",
    img: "/advogados/bruno-alves.png",
  },
  {
    name: "Jonas Alves",
    role: "Sócio-fundador",
    //oab: "OAB/SP 214.907",
    focus: "OAB 51443",
    bio: "Árbitra listada em câmaras nacionais, atua em disputas de médio e grande porte com foco em estratégia processual e negociação.",
    img: "/advogados/jonas-alves.png",
  },

];

export type Area = { n: string; title: string; desc: string };

export const AREAS: Area[] = [
  {
    n: "01",
    title: "Direito Civil",
    desc: "área voltada a reparar violações aos direitos da personalidade — como a honra, a imagem, a privacidade e a integridade psicológica.",
  },
  {
    n: "02",
    title: "Direito de Família & Sucessões",
    desc: "Divórcios, inventários, heranças e planejamento sucessório conduzidos com sensibilidade e discrição absoluta.",
  },
  {
    n: "03",
    title: "Direito Tributário",
    desc: "Planejamento, contencioso administrativo e judicial, e recuperação de créditos com leitura precisa do risco fiscal.",
  },

  {
    n: "04",
    title: "Direito do Trabalho",
    desc: "ramo jurídico que transforma o esforço humano e o sustento do trabalhador em um conjunto de garantias sociais mínimas, protegendo a sua dignidade e saúde no ambiente profissional.",
  },
];
