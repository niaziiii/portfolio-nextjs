import {
  SiPostman,
  SiDocker,
  SiJira,
  SiVercel,
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { DiVisualstudio } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const tools = [
  {
    name: "VS Code",
    icon: <DiVisualstudio />,
    background: "#3a94cd",
  },
  {
    name: "Git / GitHub",
    icon: <AiFillGithub />,
    background: "#a3a3a3",
  },
  {
    name: "Docker",
    icon: <SiDocker />,
    background: "#2496ed",
  },
  {
    name: "AWS",
    icon: <FaAws />,
    background: "#ff9900",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    background: "#f76935",
  },
  {
    name: "JIRA",
    icon: <SiJira />,
    background: "#0052cc",
  },
  {
    name: "Vercel",
    icon: <SiVercel />,
    background: "#a3a3a3",
  },
  {
    name: "MongoDB Compass",
    icon: <SiMongodb />,
    background: "#0fa54d",
  },
];

export default tools;
