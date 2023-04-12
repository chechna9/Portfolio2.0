import { brightness } from "../utils/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Experience from "../components/experience";
import useExperiences from "../hooks/useExperiences";
import { useEffect, useState } from "react";
import experience from "../utils/interfaces/experienceInterface";
import LoadingSpinner from "../components/loadingSpinner";
const Experiences = () => {
  const [loading,setLoading] = useState(true);
  const [listExperiences,setListExperiences] = useState<Array<experience>>([]);
  useEffect(()=>{
    useExperiences
    .then(
      (res)=>{
        setLoading(false);
        setListExperiences(res);
      }
    );
  },[]);
  return (
    <div className="bg-prim1">
      <div className="bg-prim2 h-screen py-10 md:mr-10 mr-5 md:rounded-br-[200px] rounded-br-[100px] md:rounded-tr-[200px] rounded-tr-[100px] relative">
        <div className="relative w-fit h-fit mb-8 mx-auto">
          <h1 className="text-white font-bold  md:text-4xl sm:text-2xl text-xl">
            Some Wonderful Experiences
          </h1>
          <img
            src={brightness}
            alt=""
            className="h-5 absolute -right-5 top-0"
          />
        </div>
        {loading && (
          <div className="text-center absolute w-full bottom-[50%] translate-y-[50%]">
            <LoadingSpinner />
          </div>
        )}
       {!loading && <div className=" w-full absolute  bottom-[50%] translate-y-[50%]">
          <Swiper
         
            id="exprSwiper"
            slidesPerView={1}
            centeredSlides={true}
            modules={[Navigation]}
            navigation={true}
            
          >
            {listExperiences.map((value, index) => (
              <SwiperSlide key={index}  className="m-auto">
                <Experience experience={value} key={index}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>}
      </div>
    </div>
  );
};

export default Experiences;
