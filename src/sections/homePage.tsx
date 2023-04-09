import useBio from "../hooks/useBio";
import { handEmojie, myPict } from "../utils/assets";

const Home: React.FC = () => {
  const bio = useBio();
  return (
    <div className="bg-prim2">
      <div
        className="bg-prim1 h-screen flex flex-col md:flex-row justify-evenly  items-center ml-10 rounded-bl-[200px]"
        id="home"
      >
        <div className=" flex flex-col justify-center ">
          <div className=" flex flex-row justify-center my-7 ">
            <h1 className="text-white font-bold text-3xl md:text-4xl">
              Hi I am Yacine
            </h1>
            <img src={handEmojie} alt="" className="ml-2 w-10 animate-waving" />
          </div>

          <img
            src={myPict}
            alt=""
            className="w-[40%]   mx-auto  bg-sec rounded-full  p-1 "
            // className="w-[30%] md:w-[40%] min-w-[100px] mx-auto  bg-sec rounded-full  pr-2 pb-2 md:pr-4  "
          />
        </div>
        <div className=" md:scale-[1.1] flex flex-row justify-around text-lg  h-2/5  md:w-[40vw] md:mr-9 min-w-[40vw] max-w-[500px]">
          <div className="flex flex-col justify-start">
            <h1 className="text-white font-bold text-4xl mr-10 animate-slowed_bounce">
              {"{"}
            </h1>
          </div>
          <div className="flex flex-col space-y-2 justify-center">
            <p className="text-white">
              <span className="text-blue-500">first_name : </span>
              {`"${bio.fname}"`} ,
            </p>

            <p className="text-white">
              <span className="text-blue-500">last_name : </span>
              {`"${bio.lname}"`} ,
            </p>

            <p className="text-white">
              <span className="text-blue-500">status : </span>
              {`"${bio.status}"`} ,
            </p>

            <p className="text-white">
              <span className="text-blue-500">skills : </span>
              {"["}

              <div className="flex flex-wrap space-x-2">
                <span>{`"${bio.mob}"`} ,</span>
                <span>{`"${bio.web}"`} ,</span>
                <span>{`"${bio.uiux}"`} ,</span>
                <span>{`"${bio.ai}"`} ,</span>
                <span>{`"${bio.ds}"`} ,</span>
                <span>{`"${bio.loading}"`}</span>
              </div>

              {"]"}
            </p>
          </div>
          <div className="flex flex-col justify-start rotate-180">
            <h1 className="text-white font-bold text-4xl ml-10 animate-slowed_bounce ">
              {"{"}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
