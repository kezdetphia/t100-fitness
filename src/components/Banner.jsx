import React from "react";
import Bg from "../utilities/bg.jpg";
import pic1 from "../utilities/pic1.jpg";
import p1 from "../utilities/p1.png";
import p2 from "../utilities/p2.png";
import p3 from "../utilities/p3.png";

const Banner = () => {
  return (
    // <div className='w-screen h-screen bg-cover bg-center flex' style={{ backgroundImage: `url(${Bg})` }}>
    <div className="w-screen h-screen bg-gradient-to-r from-gray-500 to-black flex flex-col md:flex-row pt-10">
      <div
        className="w-full h-1/2 bg-cover md:w-1/2 md:h-full"
        style={{ backgroundImage: `url(${p2})` }}
      ></div>
      <div className="w-full md:w-1/2 md:mt-0 p-4">
        <ul className="p-5 text-gray-400 font-[Poppins] text-m mt-16 md:text-3xl lg:text-4xl">
          <li>Positivity</li>
          <li>Purpose </li>
          <li>Determination </li>
        </ul>
        <h1 className="text-gray-400  font-[Poppins] text-m mt-16 md:text-2xl lg:text-3xl">
          I specialize in turning fitness aspirations into accomplishments.
          Let's forge a path to wellness that embodies your inner strength.
        </h1>
      </div>
    </div>
  );
};

export default Banner;
