import React, { useState, useEffect } from "react";
import p1 from '../utilities/p1.png';
import p2 from '../utilities/p2.png';
import p3 from '../utilities/p3.png';

const Carousel = () => {
  const Pics = [p1, p2, p3];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to switch to the next slide
  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % Pics.length;
    setCurrentSlide(nextIndex);
  };

  useEffect(() => {
    // Automatically switch to the next slide every 3 seconds (adjust the interval as needed)
    const interval = setInterval(nextSlide, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-full"> {/* Add the h-full class here */}
      {/* Carousel wrapper */}
      <div className="relative h-full overflow-hidden rounded-lg md:h-96"> {/* Add the h-full class here */}
        {/* Map through Pics array and render images */}
        {Pics.map((pic, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide ? "" : "hidden"
            } duration-700 ease-in-out`}
            data-carousel-item
          >
            <img
              src={pic}
              className="absolute block w-full h-full object-cover top-0 left-0"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {Pics.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            aria-current={index === currentSlide ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={() => {
          const prevIndex = (currentSlide - 1 + Pics.length) % Pics.length;
          setCurrentSlide(prevIndex);
        }}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
