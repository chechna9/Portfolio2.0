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
import certeficate from "../utils/interfaces/certeficateInterface";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/loadingSpinner";
const Certeficates = () => {
  const [certeficateList, setCerteficateList] = useState<
    Array<Array<certeficate>>
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    useCerteficates.then((res) => {
      setLoading(false);
      setCerteficateList(res);
    });
  }, []);
  return (
    <div className="bg-prim2">
      <div className="bg-prim1 h-screen md:ml-10 ml-5 md:rounded-bl-[200px] rounded-bl-[100px] md:rounded-tl-[200px] rounded-tl-[100px] relative">
        <div className="relative w-fit h-fit mb-8 mx-auto top-3">
          <h1 className="text-white font-bold  text-4xl ">Certeficates</h1>
          <img src={brain} alt="" className="h-5 absolute -left-6 top-0" />
        </div>
        <div className="absolute bottom-[50%] translate-y-[50%] w-[99%] right-0 rounded-[50px] overflow-clip p-1">
          {" "}
          {loading && <LoadingSpinner />}
          {!loading && (
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              freeMode={true}
              modules={[FreeMode]}
            >
              {certeficateList.map((page, pIdex) => (
                <SwiperSlide key={pIdex}>
                  <div className="grid md:grid-rows-2 grid-rows-3 grid-flow-col">
                    {page.map((value, index) => (
                      <Certeficate certeficate={value} key={index} />
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default Certeficates;
