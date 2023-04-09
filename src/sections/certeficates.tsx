import Certeficate from "../components/certeficate";
import useCerteficates from "../hooks/useCerteficates";
import { Swiper, SwiperSlide } from "swiper/react";
import { brain } from "../utils/assets";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode } from "swiper";
const Certeficates = () => {
  const certeficateList = useCerteficates();
  return (
    <div className="bg-prim2">
      <div className="bg-prim1  py-10 rounded-tl-[200px] rounded-bl-[200px] ml-10">
      <div className="relative w-fit h-fit mb-8 mx-auto">
         
          <h1 className="text-white font-bold  text-4xl ">Certeficates</h1>
          <img
            src={brain}
            alt=""
            className="h-5 absolute -left-6 top-0"
          />
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
        >
          {certeficateList.map((page) => (
            <SwiperSlide>
              <div className="grid grid-rows-2 grid-flow-col">
                {page.map((value, index) => (
                  <Certeficate imgPath={value.imgPath} key={index} />
                ))}
              </div>{" "}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Certeficates;
