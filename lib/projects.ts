import { Project } from "@/components/shadcn/expandable-card";

const hues: Project = {
  title: "Hues",
  description: "A minimal, accessible palette generator for designers and developers to create, copy, and store beautiful color combinations.",
  src: "Hues.png",
  ctaLink: "https://brxjonesdev-hues.netlify.app/",
  codeLink: "https://github.com/brxjonesdev/hues",

};


const beatmap: Project = {
  title: "Beatweb",
  description: "An interactive graph that maps collaborations between artists, producers, and writers for music fans who love exploring credits.",
  src: "Beatweb.png",
  ctaLink: "https://beatmap-brxjonesdev.netlify.app/",
  codeLink: "https://github.com/brxjones/beatmap",
};



const narratica: Project = {
  title: "Narratica",
  description: "A writing workspace that helps solo writers build characters, worlds, and stories with ease.",
  src: "Narratica.png",
  ctaLink: "https://narratica.braxtonjones.dev/",
  codeLink: "https://github.com/brxjonesdev/narratica",
  hiatus: true
};

const tempo: Project = {
  title: "Tempo",
  description: "A timeboxing app that helps you focus on your tasks by breaking them down into manageable intervals.",
  src: "Tempo.png",
  ctaLink: "https://tempobrx.netlify.app/",
  codeLink: "https://github.com/brxjonesdev/tempo"
}

export const aerwyrm: Project = {
  title: "Aerwyrm",
  description: "An interactive learning experience that teaches you the art and science of sound synthesis through hands-on exploration.",
  src: "Aerwyrm.png",
  ctaLink: "https://aerwyrm.braxtonjones.dev/",
  codeLink: "https://github.com/brxjonesdev/aerwyrm",
  inProgress: true
};



export const projectsData: Project[] = [
  aerwyrm,
  narratica,
  tempo,
  beatmap,
  hues,
];