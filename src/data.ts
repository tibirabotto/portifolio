import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { Service, Skill, IProject } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services:Service[] = [

    {
        Icon: RiComputerLine,
        title: "Frontend Development",
        about:
          "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
      },
      {
        Icon: FaServer,
        title: "Backend  Development",
        about:
          "handle database, server, api using <b>Express </b> & other popular frameworks",
      },
      {
        Icon: AiOutlineApi,
        title: "API Development",
        about:
          "I can develop robust  REST API using <b>Node API</b> ",
      },
]

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Ruby On Rails",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind CSS",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "MongoDB",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "MySQL",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "PostgreSQL",
    level: "60",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Visual Code",
    level: "85",
  }
];

export const projects: IProject[] = [
  { 
    name: "My Portfolio",
    description:
      "This app shows my portifolio",
    image_path: "/images/portfolio.png",
    deployed_url: "https://portifolio-3g7imy18h-tibirabotto.vercel.app//",
    github_url: "https://github.com/tibirabotto/portifolio",
    category: ["react"],
    key_techs: ["React", "Tailwind CSS", "Frame Motion"],
  }
];