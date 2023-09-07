import React, { useEffect, useState } from "react";
import Bg from "../../utilities/bg.jpg";
import pic1 from "../../utilities/pic1.jpg";
import p1 from "../../utilities/p1.png";
import p3 from "../../utilities/p3.png";
import p2 from "../../utilities/p2.png";
import bg3 from "../../utilities/bg3.jpg";

const Banner = () => {

  return (
    // <div className='w-screen h-screen bg-cover bg-center flex' style={{ backgroundImage: `url(${Bg})` }}>
    <div className="w-screen h-screen bg-black flex flex-col md:flex-row pt-10">


        


      {/* <div className="w-screen h-screen bg-black flex flex-col md:flex-row pt-10">  */}
      <div
        className="w-full  h-screen bg-cover md:w-full md:h-full"
        style={{ backgroundImage: `url(${p2})` }}
      ></div>
      <div className="w-full h-full md:w-1/2 md:bg-transparent bg-transparent  p-4 md:mr-20">
        <ul className="p-5 text-gray-400 font-[Poppins] text-m mt-16 md:text-3xl lg:text-4xl">
          <li>Positivity</li>
          <li>Purpose </li>
          <li>Determination </li>
        </ul>
        <h1 className="text-gray-400  font-[Poppins] text-m mt-16 md:text-2xl lg:text-3xl">
          Welcome to [Your Name]'s Fitness World Transform Your Life with Expert
          Guidance Are you ready to take your fitness journey to the next level?
          Look no further! [Your Name] is here to guide you on a path of
          strength, wellness, and vitality.
        </h1>
      </div>
    </div>
  );
};

export default Banner;
