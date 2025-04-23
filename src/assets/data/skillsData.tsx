import { AiOutlineHtml5 } from "react-icons/ai";
import {
  SiMaterialdesign,
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiMongodb,
  SiNextdotjs,
  SiApollographql,
  SiTypescript,
} from "react-icons/si";
import {
  DiCss3Full,
  DiJavascript1,
  DiBootstrap,
  DiSass,
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
    name: "Bootstrap",
    icon: <DiBootstrap />,
    background: "#8512f3",
  },
  {
    name: "SASS",
    icon: <DiSass />,
    background: "#c76395",
  },
  {
    name: "Material-ui",
    icon: <SiMaterialdesign />,
    background: "#00aaf7",
  },
  {
    name: "Tawilwind",
    icon: <SiTailwindcss />,
    background: "#36b7f0",
  },
  {
    name: "Javascript",
    icon: <DiJavascript1 />,
    background: "#e8d44d",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    background: "#2f74c0",
  },
  {
    name: "ReactJs",
    icon: <DiReact />,
    background: "#00d1f7",
  },
  {
    name: "NextJs",
    icon: <SiNextdotjs />,
    background: "#a3a3a3",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    background: "#7248b6",
  },
  {
    name: "Node Js",
    icon: <DiNodejsSmall />,
    background: "#72b158",
  },
  {
    name: "Apollo Server",
    icon: <SiApollographql />,
    background: "#214ce5",
  },
  {
    name: "ExpressJs",
    icon: <SiExpress />,
    background: "#999999",
  },
  {
    name: "MongoDb",
    icon: <SiMongodb />,
    background: "#0fa54d",
  },
  {
    name: "SQL",
    icon: <TbSql />,
    background: "#214ce5",
  },
];

export default skills;
