import {
  SiNetlify,
  SiHeroku,
  SiMongodb,
  // SiNetlify,
  SiPostman,
} from "react-icons/si";

import { AiFillGithub, AiFillCompass } from "react-icons/ai";
import { FaBitbucket } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { RiVercelLine } from "react-icons/ri";

const tools = [
  {
    name: "Visual Studio",
    icon: <DiVisualstudio />,
    background: "#3a94cd",
  },
  {
    name: "Compass",
    icon: <AiFillCompass />,
    background: "#0fa54d",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    background: "#f76935",
  },

  {
    name: "Heroku",
    icon: <SiHeroku />,
    background: "#635ea1",
  },
  {
    name: "Vercel",
    icon: <RiVercelLine />,
    background: "#a3a3a3",
  },
  {
    name: "Netlify",
    icon: <SiNetlify />,
    background: "#24c1b1",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    background: "#a3a3a3",
  },
  {
    name: "Bitbucket",
    icon: <FaBitbucket />,
    background: "#085dd7",
  },
];

export default tools;
