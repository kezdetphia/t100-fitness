import React, { useState, useEffect } from "react";
import HeaderText from "../components/HeaderText";
import Carousel from "../components/Carousel";
import AboutUsText from "../components/AboutUsText";

const AboutUs = () => {


  return (
    <div
      id="about"
      className="w-full h-full  md:flex-col sm:flex-col  bg-customdarkblack "
    >
      <div className="flex items-center justify-center">
        <HeaderText text1="ABOUT" text2={"ME"} />
      </div>

      <div className="md:flex sm:flex">
        <Carousel />
        <AboutUsText />
      </div>
    </div>
  );
};

export default AboutUs;
