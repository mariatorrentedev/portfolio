import MendLogo from "./assets/mend.svg";
import ThinkfulLogo from "./assets/thinkful.svg";
import MevysLogo from "./assets/mevys.svg";
import RandomQuiz from "./assets/random-quiz.svg";
import ECannaB from "./assets/ecannab.svg";
import TasteBuddy from "./assets/taste-buddy.svg";

export type CompanyItem = {
  name: string;
  url: string;
  logo: string;
  duration: string;
  jobs: string[];
  tech: string[];
};

export const COMPANIES: CompanyItem[] = [
  {
    name: "Mend Telehealth Medicine",
    url: "https://mend.com/",
    logo: MendLogo,
    duration: "April 2021 - 2024",
    jobs: [
      "Participated in Agile development methodologies such as Scrum/Kanban for efficient project management.",
      "Implemented rigorous testing procedures to identify and resolve any compatibility issues or regressions.",
      "Collaborated in a pair development to execute migration of the entire dashboard from Angular/JavaScript to React/TypeScript.",
      "Lead the development of a Video SPA using Vonage Express, GCP(Cloud Functions, Bucket Storage) overseeing the project from inception to full production.",
    ],
    tech: [
      "TypeScript",
      "React",
      "Angular",
      "Material UI (MUI)",
      "PHP",
      "Docker",
      "GCP",
      "SQL",
    ],
  },
  {
    name: "Thinkful",
    url: "https://thinkful.com/",
    logo: ThinkfulLogo,
    duration: "Nov 2020 - March 2021",
    jobs: [
      "Remote engineer immersion program focused on learning HTML5, CSS3, Javascript ES6, SQL, and associated frameworks (such as Node.js, React, jQuery, and PostgreSQL).",
      "Designed mobile-first full-stack applications from concept development to deployment, while learning networking and industry best practices.",
    ],
    tech: ["JavaScript", "React", "HTML", "CSS", "PostgreSQL", "SQL"],
  },
  {
    name: "Mevys Healthy Hair Optimization System",
    url: "https://mevyspro.com/",
    logo: MevysLogo,
    duration: "Jun 2019 - 2021",
    jobs: [
      "Collaborated and coordinated with cross-functional teams to ensure seamless integration of software components.",
      "Provided architectural design and development of the online store to implementing an authentication system for professional stylists.",
      "Lead brainstorming sessions to generate new ideas for features and commercial relationships.",
    ],
    tech: ["JavaScript", "Liquid", "React", "CSS", "HTML", "MongoDB", "DevOps"],
  },
];

export type ProjectItem = {
  title: string;
  img: string;
  repoLink: string;
  prodLink: string;
  description: string;
  tech: string[];
};

export const PROJECTS: ProjectItem[] = [
  {
    title: "eCannab",
    img: ECannaB,
    repoLink: "https://github.com/mariatorrentedev/eCannab-server",
    prodLink: "https://ecannab-client.vercel.app/",
    description:
      "V1 Application created for CBD Wholesale sellers so that they can create single websites, adding products and resources to it. A double registration implemented (user/customer).",
    tech: [
      "JavaScript",
      "React",
      "Express",
      "Vercel",
      "Node",
      "Mocha",
      "Knex",
      "PostgreSQL",
      "Resful-API",
    ],
  },
  {
    title: "Taste Buddy",
    img: TasteBuddy,
    repoLink: "https://github.com/mariatorrentedev/taste-buddy-api",
    prodLink: "https://taste-buddy-client.vercel.app/home",
    description:
      "Full Stack PERN Application to create, save, edit and delete wine tasting sheets.",
    tech: [
      "JavaScript",
      "React",
      "Heroku",
      "Express",
      "Node",
      "Mocha",
      "Knex",
      "PostgreSQL",
      "Resful-API",
    ],
  },
  {
    title: "Random Music Quiz",
    img: RandomQuiz,
    repoLink: "https://github.com/Jeuq/quizapp",
    prodLink: "https://jeuq.github.io/quizapp/",
    description:
      "Simple client-side quiz application to test your random musical knowledge. A collaboration between: Avery O'Banion and Jacq Babb",
    tech: ["jQuery", "HTML", "CSS", "Pages"],
  },
];
