import React from "react";
import Project from "../components/project";
import { brightness } from "../utils/assets";
import useProjects from "../hooks/useProjects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Experience from "../components/experience";
import useExperiences from "../hooks/useExperiences";
const Experiences = () => {
    const listExperiences = useExperiences();
  return (
    <div className="bg-prim1">
      <div className="bg-prim2  py-10 rounded-tr-[200px] rounded-br-[200px] mr-10" id="projects">
          <div className="relative w-fit h-fit mb-8 mx-auto">
           
            <h1 className="text-white font-bold  text-4xl ">Some Wonderful Experiences</h1>
            <img src={brightness} alt="" className="h-5 absolute -right-5 top-0"/>
            </div>
          
              {/* <Swiper
               pagination={{
                dynamicBullets:true,
                clickable:true,
              }}

              modules={[Navigation,Pagination]}
              id="projects_swiper">
            
            </Swiper> */}
        {
            listExperiences.map(
                (value,index)=>(
                     <Experience expreience={value} />
                )
            )
        }
           
          
        
      </div>
    </div>
  );
};

export default Experiences;
