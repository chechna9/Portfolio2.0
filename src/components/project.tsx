import React from "react";
import project from "../utils/interfaces/projectInterface";

interface projectProps{
  project:project,
}
const Project:React.FC<projectProps> = (props:projectProps) => {
  const {project} = props;
  
  return (
    <div className="flex md:flex-row flex-col justify-evenly items-center ">
      <img
        src={ project.imgLink}
        alt=""
        className="md:w-[30vw] w-[60vw] max-w-sm mb-3 md:mb-0"
      />
      <div className="bg-sec rounded-3xl text-white text-xl py-8 px-4 shadow-2xl flex flex-col justify-evenly mx-10 md:w-[40%]  ">
        <p className="mb-4">
          <strong>{project.name}</strong>
          
        </p>
        <p className="mb-4 ml-2">
         
          {project.description}
        </p>
        <p className="mb-4">
          <strong>Technologies : </strong>
          {project.technologies}
        </p>
        <div className="flex flex-row">
          <strong>Links : </strong>
          <div className="flex flex-row items-center">
            {
              project.links.length === 0 ?  "not available":
              project.links.map((value, index) => {
              return (
                <a href={value.link} target="blank" key={index}>
                  <img
                    src={require("../assets/" + value.platformIcon)}
                    alt=""
                    className="w-10 ml-3"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
