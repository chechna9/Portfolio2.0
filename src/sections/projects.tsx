import React, { useEffect, useState } from "react";
import Project from "../components/project";
import { internetIcon, andoirdIcon } from "../utils/assets";
import useProjects from "../hooks/useProjects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import project from "../utils/interfaces/projectInterface";
import LoadingSpinner from "../components/loadingSpinner";
const Projects = () => {
  const [projects, setProjects] = useState<Array<project>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    useProjects.then((res) => {
      setLoading(false);
      setProjects(res);
    });
  }, []);
  return (
    <div className="bg-prim1">
      <div
        className="bg-prim2 min-h-screen py-10   md:mr-10 mr-5 md:rounded-br-[200px] rounded-br-[100px] md:rounded-tr-[200px] rounded-tr-[100px] relative flex flex-col"
        id="projects"
      >
        <div className="relative w-fit h-fit mb-8 mx-auto">
          <img src={internetIcon} alt="" className="h-4 absolute -left-6" />
          <h1 className="text-white font-bold  text-4xl ">Projects</h1>
          <img
            src={andoirdIcon}
            alt=""
            className="h-5 absolute -right-7 bottom-0"
          />
        </div>
        {loading && (
          <div className="text-center absolute w-full bottom-[50%] translate-y-[50%]">
            <LoadingSpinner />
          </div>
        )}
        {!loading && (
          <div  className= "w-full self-center flex-auto relative flex flex-col justify-center">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              id="projects_swiper"
             className="w-full "
            >
              {projects.map((value, index) => {
                return (
                  <SwiperSlide key={index} className="m-auto">
                    <Project project={value} key={index} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
