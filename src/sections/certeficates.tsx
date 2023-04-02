import Certeficate from "../components/certeficate";
import useCerteficates from "../hooks/useCerteficates";
import { Swiper, SwiperSlide } from "swiper/react";

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
      <div className="bg-prim1 h-screen flex flex-col md:flex-row justify-evenly  items-center ml-10 rounded-bl-[200px] rounded-tl-[200px] pl-9">
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
