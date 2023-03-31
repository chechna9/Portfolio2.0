import React from "react";
import Project from "../components/project";
import { internetIcon,andoirdIcon } from "../utils/assets";
const Projects = () => {
  interface link{
    platformIcon:string,
    link:string,
  }
  interface project {
    name:string,
    description:string,
  imgLink: string,
  links:Array<link>,
  technologies: string,
  }
  const projects:Array<project> = [
    {
      name: "Chantech",
      description:
        "Mobile  application used for managing sites , can handle workers , equipments and tasks ...",
      imgLink: "chantech.png",
      links: [
        {
          platformIcon: "github.svg",
          link: "https://github.com/chechna9/Chantech-flutterApp",
        },
      ],
      technologies: "Flutter , NodeJs , MYSQL",
    },
    // {
    //   name: "Chantech",
    //   description:
    //     "Mobile  application used for managing sites , can handle workers , equipments and tasks ...",
    //   imgLink: "chantech.png",
    //   links: [
    //     {
    //       platformIcon: "github.svg",
    //       link: "https://github.com/chechna9/Chantech-flutterApp",
    //     },
    //   ],
    //   technologies: "Flutter , NodeJs , MYSQL",
    // },
    
    
  ];
  return (
    <div className="bg-prim1">
      <div className="bg-prim2  py-10 rounded-tr-[200px] rounded-br-[200px] mr-10" id="projects">
          <div className="relative w-fit h-fit mb-8 mx-auto">
            <img src={internetIcon} alt="" className="h-4 absolute -left-6"/>
            <h1 className="text-white font-bold  text-4xl ">Projects</h1>
            <img src={andoirdIcon} alt="" className="h-5 absolute -right-7 bottom-0"/>
            </div>
          {
              projects.map((value,index)=>{
                  
                  return <div><Project project={value}/></div> ;
              })
          }
        
      </div>
    </div>
  );
};

export default Projects;
