/* eslint-disable no-unused-vars */
import React from "react";
import { linkedIn,emailIcon,github,insta,fb } from "../utils/assets";
const ContactMe = () => {
  return (
    <div className="bg-gradient-to-r from-prim2 via-prim1 to-prim1 px-4 py-8 h-[50vh] text-center flex flex-col " id="contactMe">
      <h1 className="text-white font-bold text-2xl">You can Find me here</h1>
      <div className="flex flex-row justify-evenly m-auto w-full">
        <div className="flex flex-row  items-center">
          <img src={emailIcon} alt="" className="w-7 mr-2" />
          <p className="text-white text-sm">bayacine9919@gmail.com</p>
        </div>
        <div className="md:flex md:flex-row grid grid-cols-2 gap-5  justify-evenly">
          <a href="https://www.linkedin.com/in/ahmedyacinebouchouareb/" target="blank">
            <img src={linkedIn} alt="" className="w-7 md:mr-2" />
          </a>
          <a href="https://github.com/chechna9" target="blank">
            <img src={github} alt="" className="w-7 md:mr-2" />
          </a>
          <a href="https://www.facebook.com/freeyacine" target="blank">
            <img src={fb} alt="" className="w-7 md:mr-2" />
          </a>
          <a href="https://www.instagram.com/ahmed_yacine_bouchouareb/" target="blank">
            <img src={insta} alt="" className="w-7 md:mr-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
