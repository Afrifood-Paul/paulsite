import { FaFacebook, FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { BiLogoBootstrap } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaGit } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { TbBrandTypescript } from "react-icons/tb";

export const Sections = [
  {
    title: "Basic Skills",
    items: ["Html5", "CSS3", "Bootstraps", "TailwindCSS", "Saas"],
  },
  {
    title: "Other Skills",
    items: ["Git", "Github", "Ant Design", "Framer Motion"],
  },
  {
    title: "Advanced Skills",
    items: ["Javascript", "React.Js", "Typescript", "Next.Js"],
  },
  // {
  //   title: "Solution",
  //   items: ["Marketing", "Analysis", "Commerce", "Data"],
  // },
];

export const technologies = [
  {
    icon: <FaHtml5 />,
    text: "HTML5",
    description:
      "I used this HyperText Markup Language to structure and present content on the web.It introduces new elements and attributes making it easier to build Web Applications.",
  },
  {
    icon: <FaCss3 />,
    text: "CSS3",
    description:
      "I used Cascading Style Sheets Language for styling and creating layout which enable me to create visually rich and responsive web designs.",
  },
  {
    icon: <BiLogoBootstrap />,
    text: "BOOTSTRAP",
    description:
      "This is powerful front-end framework which I used for building responsive, mobile-first websites quickly and efficiently.",
  },
  {
    icon: <TbBrandGithubFilled />,
    text: "GITHUB",
    description:
      "This is a platform which i used to collaborate with other developers when working on a project.It is also a place i used to save some of my projects.",
  },
  {
    icon: <SiTailwindcss />,
    text: "TAILWINDCSS",
    description:
      "This is an utility first CSS framework which provides low-level utility classes for designing custom user interfaces without writing traditional CSS",
  },
  {
    icon: <FaGit />,
    text: "GIT",
    description:
      "Git is a distributed version control system that i used to track changes in source code during software development.",
  },
  {
    icon: <RiJavascriptFill />,
    text: "JAVASCRIPT",
    description:
      "JavaScript happen to be the most versatile programming language used to create interactive and dynamic content on web pages.",
  },
  {
    icon: <GrReactjs />,
    text: "REACT JS",
    description:
      "React is my most loved javascript library which i used for building user interfaces allowing me to create reuseable UI components and manage state efficiently",
  },
  {
    icon: <TbBrandTypescript />,
    text: "TYPESCRIPT",
    description:
      "TypeScript is a statically typed superset of JavaScript that adds type definitions to enable better tooling and error checking.",
  },
];
