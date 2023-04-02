import Certeficate from "../components/certeficate";
import { dataCamp } from "../utils/assets";
const Certeficates = () => {
    return ( 
        <div className="bg-prim2">
        <div className="bg-prim1 h-screen flex flex-col md:flex-row justify-evenly  items-center ml-10 rounded-bl-[200px] rounded-tl-[200px]" id="home">
            <div>
                <Certeficate imgPath={dataCamp}/>
            </div>
         
        </div>
    </div>
   );
}
 
export default Certeficates;