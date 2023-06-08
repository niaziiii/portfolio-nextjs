import {
  SiVisualstudio,
  SiHeroku,
  SiMongodb,
  SiNetlify,
  SiVercel,
  SiPostman,
} from "react-icons/si";

import { AiFillGithub, AiFillCompass } from "react-icons/ai";
import { FaBitbucket } from "react-icons/fa";

const tools = [
  {
    name: "Visual Studio",
    icon: <SiVisualstudio />,
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
    icon: <SiVercel />,
    background: "black",
  },
  {
    name: "Netlify",
    icon: <SiNetlify />,
    background: "#24c1b1",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    background: "#000",
  },
  {
    name: "Bitbucket",
    icon: <FaBitbucket />,
    background: "#085dd7",
  },
];

export default tools;
