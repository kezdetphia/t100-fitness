import React, { useState, useEffect } from "react";
import HeaderText from "../components/HeaderText";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import RedLine from "../components/RedLine";

import bg from "../utilities/bg.jpg";
import bg2 from "../utilities/bg2.jpg";
import p1 from "../utilities/p1.png";
import p4 from "../utilities/p4.png";

import pic1 from "../utilities/pic1.jpg";
import m1 from "../utilities/majer/m1.jpg";
import m2 from "../utilities/majer/m2.jpg";
import m3 from "../utilities/majer/m3.jpg";
import m4 from "../utilities/majer/m4.jpg";
import m5 from "../utilities/majer/m5.jpg";
import m6 from "../utilities/majer/m6.jpg";
import m7 from "../utilities/majer/m7.jpg";
import m8 from "../utilities/majer/m8.jpg";
import m9 from "../utilities/majer/m9.jpg";
import m10 from "../utilities/majer/m10.jpg";
import m11 from "../utilities/majer/m11.jpg";
import m12 from "../utilities/majer/m12.jpg";
import m13 from "../utilities/majer/m13.jpg";
import m14 from "../utilities/majer/m14.jpg";
import m15 from "../utilities/majer/m15.jpg";
import m16 from "../utilities/majer/m16.jpg";
import m17 from "../utilities/majer/m17.jpg";
import m18 from "../utilities/majer/m18.jpg";
import m19 from "../utilities/majer/m19.jpg";
import m20 from "../utilities/majer/m20.jpg";
import { Md10Mp, Md7KPlus } from "react-icons/md";

const Aboutme = ({ text1, text2 }) => {
  const slides = [
    {
      url: m1,
      text: `HI, I'M MAJER KRISZTIAN . I'm a passionate personal trainer dedicated to helping you achieve your fitness goals.`,
    },
    {
      url: m2,
      text: `Welcome to my fitness journey! I'm your trusted personal trainer, here to help you achieve your fitness aspirations.`,
    },
    {
      url: m3,
      text: `Ready to transform your life through fitness? Let me be your guide on this incredible journey to a healthier you.`,
    },
    {
      url: m4,
      text: `Let's embark on a fitness adventure together! I'm a dedicated personal trainer committed to empowering you.`,
    },
    {
      url: m5,
      text: `Hello and welcome! I'm a passionate personal trainer on a mission to help you unlock your fitness potential.`,
    },
    {
      url: m6,
      text: `Get ready to conquer your fitness goals with my expert guidance! I'm committed to your success.`,
    },
    {
      url: m7,
      text: `Your fitness journey starts here! I'm a dedicated personal trainer, ready to make your fitness dreams a reality.`,
    },
    {
      url: m8,
      text: `Are you prepared to make a change and achieve your fitness goals? I'm here to be your motivator and support.`,
    },
    {
      url: m9,
      text: `Unlock your potential and transform your body with my dedicated guidance. I'm committed to your empowerment.`,
    },
    {
      url: m10,
      text: `Join me on a fitness adventure! I'm your personal trainer, committed to helping you live a healthier and happier life.`,
    },
    {
      url: m11,
      text: `Ready to take control of your fitness journey? I'm a passionate personal trainer, here to help you succeed.`,
    },
    {
      url: m12,
      text: `Welcome to a world of fitness and well-being! I'm a personal trainer dedicated to assisting you in reaching your fitness goals.`,
    },
    {
      url: m13,
      text: `Let's make your fitness dreams a reality together! I'm a personal trainer eager to support your fitness journey.`,
    },
    {
      url: m14,
      text: `Hello there! I'm your personal trainer, and I'm thrilled to be part of your fitness transformation journey.`,
    },
    {
      url: m15,
      text: `Get ready to achieve your fitness goals with my guidance! I'm a dedicated personal trainer ready to help you succeed.`,
    },
    {
      url: m16,
      text: `Your fitness journey starts here! I'm a passionate personal trainer committed to helping you become the best version of yourself.`,
    },
    {
      url: m17,
      text: `Ready to make a positive change in your life? I'm a personal trainer, and I'm here to support and motivate you on your fitness journey.`,
    },
    {
      url: m18,
      text: `Join me in the pursuit of a healthier, fitter you! I'm your personal trainer, committed to helping you reach your fitness aspirations.`,
    },
    {
      url: m19,
      text: `Are you ready to take the first step toward a healthier you? I'm a passionate personal trainer, dedicated to guiding you on your fitness journey.`,
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


