import { AiOutlineHtml5 } from "react-icons/ai";
import {
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiMongodb,
  SiNextdotjs,
  SiApollographql,
  SiTypescript,
  SiSupabase,
  SiGraphql,
} from "react-icons/si";
import {
  DiCss3Full,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
} from "react-icons/di";
import { TbSql } from "react-icons/tb";

const skills = [
  {
    name: "HTML",
    icon: <AiOutlineHtml5 />,
    background: "#e44d26",
  },
  {
    name: "CSS",
    icon: <DiCss3Full />,
    background: "#214ce5",
  },
  {
    name: "JavaScript",
    icon: <DiJavascript1 />,
    background: "#e8d44d",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    background: "#2f74c0",
  },
  {
    name: "React",
    icon: <DiReact />,
    background: "#00d1f7",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    background: "#a3a3a3",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    background: "#7248b6",
  },
  {
    name: "Node.js",
    icon: <DiNodejsSmall />,
    background: "#72b158",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    background: "#999999",
  },
  {
    name: "GraphQL",
    icon: <SiGraphql />,
    background: "#e535ab",
  },
  {
    name: "Apollo",
    icon: <SiApollographql />,
    background: "#214ce5",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    background: "#0fa54d",
  },
  {
    name: "SQL",
    icon: <TbSql />,
    background: "#214ce5",
  },
  {
    name: "Supabase",
    icon: <SiSupabase />,
    background: "#3ecf8e",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    background: "#36b7f0",
  },
];

export default skills;
