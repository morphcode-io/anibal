import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
export interface ILink {
  title: string;
  url: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface IAppLinks {
  title: string;
  url: string;
  links: ILink[];
}

export const appLinks: IAppLinks = {
  title: "Header links",
  url: "",
  links: [
    {
      title: "Inicio",
      url: "",
    },
    {
      title: "Proyectos",
      url: "projects",
    },
    {
      title: "Publicaciones",
      url: "posts",
    },
  ],
};

export const appConfig = {
  name: "My App",
  description: "This is a sample application",
  version: "1.0.0",
};

export const socialMediaLinks = {
  title: "Social Media Links",
  url: "",
  links: [
    {
      title: "GitHub",
      url: "https://github.com/morphcode-io",
      icon: LuGithub,
    },
    {
      title: "Mail",
      url: "mailto:aniballaura8@gmail.com",
      icon: LuMail,
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/anibal-laura-407b94346/",
      icon: LuLinkedin,
    },
  ],
};

export interface ISkill {
  title: string;
  icon: string;
}

export interface ITechStack {
  languagesAndFrameworks: {
    title: string;
    skills: ISkill[];
  };
  tools: {
    title: string;
    skills: ISkill[];
  };
  databases: {
    title: string;
    skills: ISkill[];
  };
}

export const techStack = {
  languagesAndFrameworks: {
    title: "Lenguajes y Frameworks",
    skills: [
      { title: "JavaScript", icon: "tech stack/javascript.svg" },
      { title: "Python", icon: "tech stack/python.svg" },
      { title: "TypeScript", icon: "tech stack/typescript.svg" },
      { title: "Angular", icon: "tech stack/angular.svg" },
      { title: "React", icon: "tech stack/react_light.svg" },
      { title: "Next.js", icon: "tech stack/nextjs_icon_dark.svg" },
      { title: "Express", icon: "tech stack/expressjs.svg" },
    ],
  },

  tools: {
    title: "Herramientas",
    skills: [
      { title: "Git", icon: "tech stack/git.svg" },
      { title: "Docker", icon: "tech stack/docker.svg" },
      { title: "Node.js", icon: "tech stack/nodejs.svg" },
    ],
  },
  databases: {
    title: "Bases de datos",
    skills: [
      { title: "PostgreSQL", icon: "tech stack/postgresql.svg" },
      { title: "MySQL", icon: "tech stack/mysql.svg" },
      { title: "Redis", icon: "tech stack/redis.svg" },
    ],
  },
};

interface IWork {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  company: string;
  duration: string;
  location?: string;
  type: "Personal" | "Work";
  position: string;
  technologies?: string[];
  contributions: string[];
  href: string;
  thumbnail: string;
}

export const works: IWork[] = [
  {
    id: 1,
    title: "Desarrollador Full-Stack",
    company: "Luckia Arica",
    position: "Full-Stack",
    duration: "Agosto 2024 - Marzo 2025",
    subtitle: "Luckia Arica Web, App y CMS",
    location: "Arica, Chile",
    technologies: ["Angular", "Angular SSR", "Node.js", "Express", "Flutter", "MySQL", "DigitalOcean"],
    description:
      "Desarrollo de una solución completa que incluye una aplicación móvil, un sistema web CMS y la página corporativa con Angular SSR.",
    contributions: [
      "Desarrolló de una solución completa que incluyó una aplicación móvil con Flutter, un sistema web CMS con Angular y Node.js y la página corporativa con Angular SSR.",
      "Implementó optimizaciones de SEO y performance, logrando reducir tiempos de carga y mejorar la eficiencia en el consumo de APIs.",
      "Realizó el despliegue en servidores virtuales (VM) de DigitalOcean, utilizando además un Space Bucket para almacenamiento de archivos.",
    ],
    type: "Work",
    href: "luckia-arica",
    thumbnail: "/p1.webp",
  },
  {
    id: 2,
    title: "Proyecto de titulación",
    subtitle: "Plataforma de gestión de visitas a museos",
    description:
      "Desarrollo de una plataforma web para la gestión de visitas a museos, incluyendo agendamiento online y estadísticas.",
    company: "Universidad de Tarapacá",
    duration: "Agosto 2024 - Enero 2025",
    position: "Full-Stack",
    location: "Arica, Chile",
    technologies: ["Angular", "Ionic", "Node.js", "Express", "MySQL"],
    contributions: [
      "Desarrolló una plataforma web para la gestión de visitas a museos (Azapa y Colón 10), incluyendo agendamiento online y estadísticas.",
      "Desarrolló una API RESTful para la gestión de datos de visitas y usuarios.",
    ],
    type: "Work",
    href: "uta-pt",
    thumbnail: "/p2.webp",
  },
  {
    id: 3,
    title: "Paquete npm collections",
    subtitle: "Paquete npm collections",
    description:
      "Un paquete npm en JavaScript que proporciona una variedad de estructuras de datos inspirado en el modulo collections de Python.",
    href: "collections-js",
    thumbnail: "/collections.webp",
    company: "@morphcode",
    duration: "2025",
    position: "Mantenimiento, Open Source",
    contributions: [
      "Mantenimiento y actualización del paquete npm, asegurando su compatibilidad con las últimas versiones de Node.js y TypeScript.",
      "Mejora de la documentación y ejemplos de uso para facilitar la adopción por parte de la comunidad.",
      "Corrección de errores reportados por los usuarios y optimización del rendimiento de las estructuras de datos implementadas.",
    ],
    type: "Personal",
  },
];

// Function to get personal works
// Only return the first k personal works
export const getPersonalWork = (k: number) => {
  return works.filter(work => work.type === "Personal").slice(0, k);
}
