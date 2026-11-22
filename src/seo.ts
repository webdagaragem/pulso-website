export const siteUrl = "https://www.pulsotecnologiamt.com.br";

export const pageSeo = {
  "/": {
    title: "Oficina de Tratores e Colheitadeiras em Juara, MT",
    description:
      "Manutenção e reparo de tratores, colheitadeiras, pulverizadores e plantadeiras em Juara, Mato Grosso. Oficina agrícola e concessionária oficial Topcon.",
    heading: "Oficina de Tratores e Colheitadeiras",
  },
  "/sobre": {
    title: "Oficina Agrícola em Juara, Mato Grosso",
    description:
      "Oficina de tratores e colheitadeiras no Médio Norte de Mato Grosso. Assistência técnica no campo e concessionária oficial Topcon.",
    heading: "Quem é a Pulso?",
  },
  "/servicos": {
    title: "Manutenção de Tratores e Colheitadeiras | Juara MT",
    description:
      "Assistência técnica especializada: manutenção e reparo de tratores, colheitadeiras, pulverizadores, plantadeiras e implementos agrícolas em Juara, Mato Grosso.",
    heading: "Assistência Técnica em Máquinas Agrícolas",
  },
  "/marcas": {
    title: "Topcon e Massey Ferguson | Oficina Agrícola em Juara",
    description:
      "Concessionária oficial Topcon: monitores, receptores e pilotos para tratores Massey Ferguson. Oficina agrícola em Juara, Mato Grosso.",
    heading: "Marcas com as Quais Trabalhamos",
  },
  "/contato": {
    title: "Oficina de Máquinas Agrícolas em Juara, MT",
    description:
      "Chame a oficina agrícola da Pulso em Juara, Mato Grosso. Rua Marília, 1098. WhatsApp (66) 99661-5516.",
    heading: "Fale com a Pulso",
  },
  "/404": {
    title: "Página não encontrada | Oficina Agrícola em Juara",
    description: "Essa página não existe. Volte para a oficina de máquinas agrícolas da Pulso, em Juara, Mato Grosso.",
    heading: "404",
  },
} as const;

export type PagePath = keyof typeof pageSeo;
