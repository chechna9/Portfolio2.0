import { useRef } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Popup from "reactjs-popup";
import { PopupActions } from "reactjs-popup/dist/types";
interface certeficateProps {
  imgPath: string;
}
const Certeficate: React.FC<certeficateProps> = (certeficateProps) => {
  const ref = useRef<PopupActions>(null);
  const props = certeficateProps;
  return (
    <div className="rounded-[15%] bg-prim2 m-4  transition-all duration-300">
      <Popup
       ref={ref}
        trigger={
          <img
            src={props.imgPath}
            alt=""
            className="rounded-[15%] -translate-x-2 -translate-y-2 hover:blur-sm hover:cursor-pointer transition-all duration-300"
          />
        }
        modal={true}
      > 
        <div className="relative m-5">
          <button className="absolute right-0 -translate-y-[100%]"
          onClick={()=> ref.current?.close()}
          >
            <AiOutlineCloseCircle color="red" />
          </button>
         
            <img src={props.imgPath} alt="" className="" />
         
          
        </div> 
      </Popup>
    </div>
  );
};

export default Certeficate;
