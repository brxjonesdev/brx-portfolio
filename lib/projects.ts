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
};



export const projectsData: Project[] = [
  narratica,
  beatmap,
  hues,
];