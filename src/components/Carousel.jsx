import React, { useState, useEffect } from "react";
import bg from "../utilities/bg.jpg";
import bg2 from "../utilities/bg2.jpg";
import p1 from "../utilities/p1.png";
import p4 from "../utilities/p4.png";
import jakob from "../utilities/jakob.jpg";
import pic1 from "../utilities/pic1.jpg";

const Carousel = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
      url: bg2,
    },
    {
      url: p4,
    },
    {
      url: pic1,
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
    }, 3000);
    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]); // Only start the interval when currentIndex changes

  return (
    
    <div className="md:w-1/2 sm:w1/2 flex p-3 pb-2 ">
      <div className=" max-w-[790px] w-full md:h-[700px] h-[400px] py-8 px-4 mx-auto my-auto relative group">
        {/* bg image div */}
        <div
          className="md:w-full h-full rounded-2xl bg-cover  transition duration-500 ease-in-out"
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        ></div>

        {/* left button */}
        <div
          onClick={prevSlide}
          className="md:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-2 cursor-pointer"
        >
          <button>L</button>
        </div>

        {/* right button */}
        <div
          onClick={nextSlide}
          className="md:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2 cursor-pointer"
        >
          <button className="cursor-pointer">R</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
