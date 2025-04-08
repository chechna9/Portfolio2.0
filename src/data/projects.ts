const quality = "q_10";
type PlatformIcon =
  | "notAvailable.svg"
  | "internetIcon.svg"
  | "github.svg";

interface ProjectAttributes {
  name: string;
  description: string;
  platformIcon: PlatformIcon;
  technologies: string;
  link: string;
  img: string;
}

interface Project {
  id: number;
  attributes: ProjectAttributes;
}
let data:Project[] = [
  {
    id: 1,
    attributes: {
      name: "Khutwa Guide",
      description:
        "I contributed to the development of a mobile app aimed at assisting pilgrimage guides in managing pilgrims throughout their trip, including hotel room arrangements and other features.",
      platformIcon: "notAvailable.svg",
      technologies: "Flutter",

      link: "#",
      img: `https://res.cloudinary.com/dmgeaamqy/image/upload/${quality}/v1744136243/portfolioAssets/projects/khutwaApp_gqnlwh.png`,
    },
  },
  {
    id: 1,
    attributes: {
      name: "Kurio",
      description:
        "Mobile application that uses that uses generative ai to provide a customised learning materials for kids in form of text books , story books and podcasts . Secured the thrid prize of 4k $ in A2SV 2023 hackathon",
      technologies: "Flutter, NodeJs, Generative AI apis",
      platformIcon: "internetIcon.svg",
      link: "https://www.youtube.com/watch?v=pvr8QMkFKgc",
      
      img: `https://res.cloudinary.com/dmgeaamqy/image/upload/${quality}/v1725198433/portfolioAssets/projects/kurio_tubwgh.png`,
    },
  },
  {
    id: 1,
    attributes: {
      name: "Rayhane",
      description:
        "E-learning mobile app for end users , with features such as: payment system, multy language support, rating system, and more...",
      technologies: "Flutter",
      platformIcon: "internetIcon.svg",
      link: "https://play.google.com/store/apps/details?id=dz.createch.rayhane&pcampaignid=web_share",
      
      img: `https://res.cloudinary.com/dmgeaamqy/image/upload/${quality}/v1725198442/portfolioAssets/projects/Rayhane_ylygfe.png`,
    },
  },
  
  {
    id: 1,
    attributes: {
      name: "Chantech",
      description:
        "Mobile application used for managing sites, can handle workers, equipment, and tasks...",
      technologies: "Flutter, NodeJs, MYSQL",
      platformIcon: "github.svg",
      link: "https://github.com/chechna9/Chantech-flutterApp",
      img: `https://res.cloudinary.com/dmgeaamqy/image/upload/${quality}/v1681448361/portfolioAssets/projects/chantech_gh95ax.png`,
    },
  },
  {
    id: 2,
    attributes: {
      name: "Space Pionners",
      description:
        "Mobile quiz application about space and planets, with multiple features such as: documentation, profile management, badge system, ranking...",
      technologies: "Flutter, Supabase",
      platformIcon: "github.svg",
      link: "https://github.com/nadir-ogd/Space-Pioneers",
      img: `https://res.cloudinary.com/dmgeaamqy/image/upload/${quality}/v1681448369/portfolioAssets/projects/spacePioneers_p4enz8.png`,
    },
  },
  {
    id: 12,
    attributes: {
      name: "Valorant Win Prediction",
      description:
        "Web app that predicts the win chance of two teams in Valorant based on an AI model.",
      technologies: "React, Flask, sklearn",
      platformIcon: "internetIcon.svg",
      link: "https://valorant-win-prediction.vercel.app/",
      img: `https://res.cloudinary.com/dmgeaamqy/image/upload/${quality}/v1686423062/portfolioAssets/projects/valoPred_cdly2n.png`,
    },
  },
  {
    id: 3,
    attributes: {
      name: "Enigma Simulator",
      description:
        "Desktop application that simulates the Enigma encryption machine that was used during World War II.",
      technologies: "Flutter",
      platformIcon: "github.svg",
      link: "https://github.com/chechna9/EnigmaMachine_Flutter_Desktop_app",
      img: `https://res.cloudinary.com/dmgeaamqy/image/upload/${quality}/v1681448381/portfolioAssets/projects/enigma_pd1okr.png`,
    },
  },
  {
    id: 4,
    attributes: {
      name: "BrEYEn",
      description:
        "Mobile application built during Devfest21 Algiers hackathon, it allows blind people to perform daily tasks thanks to the camera of smart glasses, which detects objects and describes them to the user.",
      technologies: "Flutter, googleMlkit",
      platformIcon: "github.svg",
      link: "https://github.com/chechna9/Devfest-Hackathon2021",
      img: `https://res.cloudinary.com/dmgeaamqy/image/upload/${quality}/v1681448361/portfolioAssets/projects/devfest21_ymkkvs.png`,
    },
  },
  {
    id: 1,
    attributes: {
      name: "Dash Ai",
      description:
        "Desktop web app for built during a hackathon for analysing clients's feedbacks using a chatbot",
      technologies: "React Js , tailwind css",
      platformIcon: "github.svg",
      link: "https://lablab-hackathon-dash-ai.vercel.app/",
      
      img: `https://res.cloudinary.com/dmgeaamqy/image/upload/${quality}/v1725198437/portfolioAssets/projects/dash_ai_dtq7fa.png`,
    },
  },
  {
    id: 5,
    attributes: {
      name: "SmartFridge",
      description:
        "Mobile app coupled with a smart fridge built during IWD22 Algiers hackathon, with features such as: Ability to automatically order missing ingredients for a recipe, offering a family area to add a shopping list, and providing statistics by calorie consumption...",
      technologies: "Flutter",
      platformIcon: "github.svg",
      link: "https://github.com/chechna9/IWD2022-hackathon",
      img: `https://res.cloudinary.com/dmgeaamqy/image/upload/${quality}/v1681448360/portfolioAssets/projects/iwd22_qqnwec.png`,
    },
  },
  {
    id: 6,
    attributes: {
      name: "WTM Algiers Website",
      description: "I was part of the team that worked on this website.",
      technologies: "NextJs, TailwindCss",
      platformIcon: "internetIcon.svg",
      link: "https://www.wtmalgiers.org/",
      img: `https://res.cloudinary.com/dmgeaamqy/image/upload/${quality}/v1681448429/portfolioAssets/projects/wtmWebsite_bncqwl.png`,
    },
  },
  {
    id: 7,
    attributes: {
      name: "IWD22 Website",
      description: "I was part of the team that worked on this website.",
      technologies: "NextJs, TailwindCss",
      platformIcon: "internetIcon.svg",
      link: "https://iwd22.wtmalgiers.org/",
      img: `https://res.cloudinary.com/dmgeaamqy/image/upload/${quality}/v1681448395/portfolioAssets/projects/iwdWebsite_hazjdm.png`,
    },
  },
  {
    id: 8,
    attributes: {
      name: "Estools",
      description:
        "Estools is a mobile app designed to help students manage their tasks by creating to-do lists, setting reminders, taking notes, and more.",
      technologies: "Flutter, ExpressJs, MongoDb",
      platformIcon: "github.svg",
      link: "https://github.com/chechna9/estools_flutter_app",
      img: `https://res.cloudinary.com/dmgeaamqy/image/upload/${quality}/v1681448353/portfolioAssets/projects/estools_zs6dgh.png`,
    },
  },
  {
    id: 9,
    attributes: {
      name: "My Portfolio v1",
      description: "My first portfolio.",
      technologies: "React js",
      platformIcon: "github.svg",
      link: "https://github.com/chechna9/portfolio",
      img: `https://res.cloudinary.com/dmgeaamqy/image/upload/${quality}/v1681448363/portfolioAssets/projects/portfoliov1_axjjm5.png`,
    },
  },
  {
    id: 10,
    attributes: {
      name: "My Portfolio v2",
      description: "My second portfolio.",
      technologies: "React Js, Cloudinary",
      platformIcon: "github.svg",
      link: "https://github.com/chechna9/Portfolio2.0",
      img: `https://res.cloudinary.com/dmgeaamqy/image/upload/${quality}/v1681448365/portfolioAssets/projects/porfolio_v2_eiltfo.png`,
    },
  },
  {
    id: 11,
    attributes: {
      name: "A translation platform",
      description:
        "A freelance project where I deployed several NLP models using Flask on an AWS EC2 instance and linked it with a website.",
      technologies: "Flask, AWS, React js",
      platformIcon: "notAvailable.svg",
      link: "#",
      img: `https://res.cloudinary.com/dmgeaamqy/image/upload/${quality}/v1681448425/portfolioAssets/projects/freelance_fqfik8.jpg`,
    },
  },
];

export default data;
