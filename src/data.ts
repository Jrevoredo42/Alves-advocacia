export type Lawyer = {
  name: string;
  role: string;
  oab?: string;
  focus?: string;
  bio?: string;
  img: string;
  social?: string;
};

export const LAWYERS: Lawyer[] = [
  {
    name: "Bruno Alves",
    role: "Sócio-fundador",
    // oab: "OAB/SP 128.440",
    focus: "OAB 56075",
    bio: "Me chamo Bruno Filipe, saí do Mato Grosso e vim parar no agreste de Pernambuco aos 4 anos de idade. Aprendi logo cedo que se adaptar é preciso, trouxe pra advocacia essa resiliência. Na vida, até posso ficar às vezes ansioso pra chegar logo o final de uma partida de xadrez, mas aqui, no direito, a paciência é uma arma secreta e uma virtude inegociável pra atuação profissional.",
    img: "/advogados/bruno-alves-2.jpg",
    social: "https://www.instagram.com/brunofilipl/",
  },
  {
    name: "Jonas Alves",
    role: "Sócio-fundador",
    //oab: "OAB/SP 214.907",
    focus: "OAB 51443",
    bio: "Sou Jonas Emanuel. Nasci em Santo André, São Paulo, e vim para Garanhuns ainda muito pequeno, cidade onde construí minha história, minha família e minha trajetória profissional. Sou casado e pai, e desde muito jovem atuo na corretagem imobiliária. Ao longo dos anos, aprendi que trabalhar com imóveis vai muito além de negociar propriedades: é participar de projetos de vida, contribuir para a realização de sonhos e, muitas vezes, ajudar famílias a conquistarem uma moradia digna. Hoje, na advocacia, encontro grandes semelhanças com a profissão que me acompanhou por tantos anos. Se, na corretagem, busco contribuir para a realização de sonhos e para a construção de um lar, na advocacia procuro defender a dignidade, a valorização e o reconhecimento de cada cliente, respeitando sua história, suas necessidades e suas particularidades. A experiência em ambas as áreas me ensinou que, por trás de cada imóvel, cada contrato e cada processo, existe uma pessoa, uma família e uma história que merece ser tratada com responsabilidade, respeito e humanidade. Tenho, portanto, a plena convicção de que meu propósito é servir. Servir com conhecimento, dedicação, ética e, acima de tudo, com a compreensão de que o verdadeiro valor do meu trabalho está na transformação que ele pode proporcionar na vida de cada pessoa que confia em mim..",
    img: "/advogados/jonas-alves.png",
    social: "https://www.instagram.com/jonasemanuelalves_/"
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
