import Certeficate from "../components/certeficate";
import useCerteficates from "../hooks/useCerteficates";
import { Swiper, SwiperSlide } from "swiper/react";
import { brain } from "../utils/assets";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode,Autoplay } from "swiper";
import certeficate from "../utils/interfaces/certeficateInterface";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/loadingSpinner";
import { motion } from "framer-motion";

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
    <div className="bg-prim2 overflow-clip">
      <motion.div 
       initial={{ x: +200, opacity: 0}}
       whileInView={{ x: 0, opacity: 1 }}
       transition={{ease: "easeOut", delay: 0.2 }}
       viewport={{ once: false, amount: "some" }}

      className="bg-prim1 h-screen md:ml-10 ml-5 md:rounded-bl-[200px] rounded-bl-[100px] md:rounded-tl-[200px] rounded-tl-[100px] relative">
        <div className="relative w-fit h-fit mb-8 mx-auto top-3">
          <h1 className="text-white font-bold  text-4xl ">Certificates</h1>
          <img src={brain} alt="" className="h-5 absolute -left-6 top-0" />
        </div>
        <div className="absolute bottom-[50%] translate-y-[50%] w-[99%] right-0 rounded-[50px] overflow-clip p-1">
          {" "}
          {loading && <LoadingSpinner />}
          {!loading && (
            <Swiper
            
              autoplay={{
                delay: 1000,
              }}
              speed={1000}
              slidesPerView={1}
              spaceBetween={30}
              freeMode={true}
              modules={[FreeMode,Autoplay]}
            >
              {certeficateList.map((page, pIdex) => (
                <SwiperSlide key={pIdex}>
                  <div className="grid sm:grid-rows-2 grid-rows-3 grid-flow-col">
                    {page.map((value, index) => (
                      <Certeficate certeficate={value} key={index} />
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Certeficates;
