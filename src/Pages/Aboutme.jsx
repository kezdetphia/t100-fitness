import React, { useState, useEffect } from "react";
import HeaderText from "../components/HeaderText";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import RedLine from "../components/RedLine";

import m1 from "../utilities/arnold/m1.png";
import m2 from "../utilities/arnold/m2.png";
import m3 from "../utilities/arnold/m3.png";
import m4 from "../utilities/arnold/m4.png";
import m5 from "../utilities/arnold/m5.png";
import m6 from "../utilities/arnold/m6.png";

import { Md10Mp, Md7KPlus } from "react-icons/md";

const Aboutme = ({ text1, text2 }) => {
  const slides = [
    {
      url: m1,
      text: `HI, I'M T-100! I'm a passionate personal terminator trainer dedicated to helping you achieve your fitness goals and survive.`,
    },
    {
      url: m2,
      text: "I'll make sure you're sweating more than a T-800 in a molten metal bath!",
    },
    {
      url: m3,
      text: "Your body fat percentage will be terminated!",
    },
    {
      url: m4,
      text: "I'll push you until you say 'Hasta la vista baby!'",
    },
    {
      url: m5,
      text: "I don't do 'cheat days.' I'll be back with my judgmental red eye if you even think about that extra slice of pizza.",
    },
    {
      url: m6,
      text: "I'll turn your sweat into liquid metal, and your muscles will be more defined than my programming code.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    // Automatically transition to the next slide every 3 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]); // Only start the interval when currentIndex changes

  return (
    <div
      id="about"
      className="w-full h-full bg-customdarkblack relative group md:flex-col sm:flex-col md: items-evenly "
    >
      {/* headertext */}
      <div className="flex items-center justify-center md:pt-7 pt-5">
        <div>
          <HeaderText text1="ABOUT" text2={"ME"} />
          <RedLine />
        </div>
      </div>

      <div className="relative group">
        <div className="flex-col sm:flex-row md:flex p-2  ">
          {/* pic carousel */}
          <div className="md:w-1/2 sm:w1/2 flex justify-end ">
            <div className=" max-w-[790px]  w-full md:h-[600px] h-[400px] py-8 p-4  ">
              {/* bg image div */}
              <div
                className="md:w-full h-full rounded-2xl bg-cover transition duration-500 ease-in-out "
                style={{
                  backgroundImage: `url(${slides[currentIndex].url})`,
                }}
              ></div>
            </div>
          </div>

          {/* text carouse */}
          <div className="sm:w-1/2 md:1/2 flex ">
            <div className="max-w-[790px] w-full md:h-[600px] h-[200px] py-8 px-4   ">
              <div className="md:w-full h-full bg-customdarkblack flex items-center justify-center rounded-xl transition duration-500 ease-in-out shadow-md shadow-customred">
                <p className="text-customgray font-poppins text-l md:text-3xl lg:text-4xl px-5 pb-2 sm:pb-0 text-center md:tracking-[1px] lg:tracking-[1px] md:leading-[80px] lg:leading-[80px] leading-[30px]">
                  {slides[currentIndex].text}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden group-hover:block ">
          {/* left button */}
          <div
            onClick={prevSlide}
            className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-2 cursor-pointer opacity-30 hover:opacity-100 "
          >
            <button className="text-customwhite sm:text-5xl text-3xl ">
              <BsFillArrowLeftCircleFill />{" "}
            </button>
          </div>

          {/* right button */}
          <div
            onClick={nextSlide}
            className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2 cursor-pointer opacity-30 hover:opacity-100"
          >
            <button className=" text-customwhite sm:text-5xl text-3xl">
              <BsFillArrowRightCircleFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;


