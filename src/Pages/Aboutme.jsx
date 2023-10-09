import React, { useState, useEffect } from "react";
import HeaderText from "../components/HeaderText";
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import bg from "../utilities/bg.jpg";
import bg2 from "../utilities/bg2.jpg";
import p1 from "../utilities/p1.png";
import p4 from "../utilities/p4.png";
import jakob from "../utilities/jakob.jpg";
import pic1 from "../utilities/pic1.jpg";

const Aboutme = ({ text1, text2 }) => {
  const slides = [
    {
      url: p4,
      text: `HI, I'M MAJER KRISZTIAN . I'm a passionate personal trainer dedicated to helping you achieve your fitness goals.`,
    },
    {
      url: bg2,
      text: "With years of experience, I'm committed to your health and well-being",
    },
    {
      url: p4,
      text: "My training approach is tailored to your unique needs and abilities",
    },
    {
      url: pic1,
      text: "I believe in the power of consistent effort and a positive mindset",
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
      <div className="flex items-center justify-center md:pt-10 pt-5">
        <HeaderText text1="ABOUT" text2={"ME"} />
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
              <div className="md:w-full h-full bg-customgrey flex items-center justify-center rounded-xl transition duration-500 ease-in-out shadow-md shadow-customred">
                <p className="text-customgray font-poppins text-l md:text-3xl lg:text-4xl px-5 text-center md:tracking-[1px] lg:tracking-[1px] md:leading-[80px] lg:leading-[80px] leading-[30px]">
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
