import { useRef } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Popup from "reactjs-popup";
import { PopupActions } from "reactjs-popup/dist/types";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import certeficate from "../utils/interfaces/certeficateInterface";
interface certeficateProps {
  certeficate: certeficate;
}
const Certeficate: React.FC<certeficateProps> = ({ certeficate }) => {
  const ref = useRef<PopupActions>(null);

  return (
    <div className="rounded-[15%] bg-prim2 m-4  transition-all duration-300  select-none  sm:w-[25vw] w-[40vw] h-[25vw] sm:h-[15vw]">
      <Popup
        ref={ref}
        trigger={
          <img
            src={certeficate.imgUrl}
            alt=""
            className="rounded-[15%] sm:-translate-x-3 -translate-x-2 sm:-translate-y-3 -translate-y-2 sm:hover:blur-sm hover:cursor-pointer transition-all duration-300  w-full h-full object-cover"
          />
        }
        modal={true}
      >
        <div className="relative m-5">
          <button
            className="absolute right-0 -translate-y-[100%]"
            onClick={() => ref.current?.close()}
          >
            <AiOutlineCloseCircle color="red" />
          </button>

          <LazyLoadImage src={certeficate.imgUrl} alt="" className="" />
        </div>
      </Popup>
    </div>
  );
};

export default Certeficate;
