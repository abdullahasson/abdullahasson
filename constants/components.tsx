// Icons
import {
  StarIcon,
  Component,
  HomeIcon,
  ScrollText,
  Phone
} from 'lucide-react';
import { RiReactjsFill, RiNextjsLine } from "react-icons/ri";
import { TbBrandTypescript , TbBrandJavascript } from "react-icons/tb";


// Dock Components Link & contect
export const dockData = [
  {
    title: 'nav1',
    icon: (
      <HomeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'nav2',
    icon: (
      <ScrollText className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#expertise',
  },
  {
    title: 'nav3',
    icon: (
      <Component className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#projects',
  },
  {
    title: 'nav4',
    icon: (
      <StarIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#testimonials',
  },
  {
    title: 'nav5',
    icon: (
      <Phone className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#contact',
  }
];

// Expert list
export const technologie = [
  {
    name: "Core Frontend Tools",
    technologies: "Next / React / Javascript / HTML / CSS",
  },
  {
    name: "State Managers",
    technologies: "Redux / Context API",
  },
  {
    name: "React Ecosystem Libraries",
    technologies: "Axios / React Hook Form & Zod / React Router / Tanstack Router / Tanstack Query",
  },
  {
    name: "CSS",
    technologies: "Tailwind / SASS / Emotion/Styled Components / CSS Modules",
  },
  {
    name: "UI",
    technologies: "Material UI / shadcn/ui / Bootstrap",
  },
  {
    name: "Animations",
    technologies: "GSAP / AOS",
  },
  {
    name: "Bundling Tools",
    technologies: "Vite",
  },
  {
    name: "Code Quality",
    technologies: "ESLint / Prettier / BEM / Chrome Developer Tools / React Profiler / Git / Core Web Vitals",
  },
  {
    name: "Unit Testing",
    technologies: "Jest / React Testing Library",
  },
  {
    name: "Performance Analysis Tool",
    technologies: "GTmetrix | Lighthouse",
  },
  {
    name: "Code Editor",
    technologies: "Visual Studio Code",
  },
];

// Expert List (Icons)
export const techIcon = [
  {
    name: 'Next',
    icon: <RiNextjsLine className="text-c2 text-9xl" />
  },
  {
    name: 'React',
    icon: <RiReactjsFill className="text-c2 text-9xl" />
  },
  {
    name: 'Typescript',
    icon: <TbBrandTypescript className="text-c2 text-9xl" />
  },
  {
    name: 'Javascript',
    icon: <TbBrandJavascript className="text-c2 text-9xl" />
  },
]