import React from "react";
import Project from "../components/project";
import { internetIcon, andoirdIcon } from "../utils/assets";
import useProjects from "../hooks/useProjects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Projects = () => {
  const { projects } = useProjects();
  return (
    <div className="bg-prim1">
      <div
        className="bg-prim2  py-10   md:mr-10 mr-5 md:rounded-br-[200px] rounded-br-[100px] md:rounded-tr-[200px] rounded-tr-[100px]"
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

        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          id="projects_swiper"
        >
          {projects.map((value, index) => {
            return (
              <SwiperSlide>
                <Project project={value} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
