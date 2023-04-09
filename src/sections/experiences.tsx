import { brightness } from "../utils/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Experience from "../components/experience";
import useExperiences from "../hooks/useExperiences";
const Experiences = () => {
  const listExperiences = useExperiences();
  return (
    <div className="bg-prim1">
      <div className="bg-prim2 h-screen py-10 md:mr-10 mr-5 md:rounded-br-[200px] rounded-br-[100px] md:rounded-tr-[200px] rounded-tr-[100px] flex flex-col ">
        <div className="relative w-fit h-fit mb-8 mx-auto">
          <h1 className="text-white font-bold  text-4xl ">
            Some Wonderful Experiences
          </h1>
          <img
            src={brightness}
            alt=""
            className="h-5 absolute -right-5 top-0"
          />
        </div>
        <div className="w-[100%] m-auto">
          <Swiper
            
            slidesPerView={1}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            navigation={true}
          >
            {listExperiences.map((value, index) => (
              <SwiperSlide className="bg-slate-50">
                <Experience expreience={value} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
