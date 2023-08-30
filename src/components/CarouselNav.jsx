import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import ba1 from '../utilities/ba1.png'
import ba2 from '../utilities/ba2.png'
import ba3 from '../utilities/ba3.png'
import ba4 from '../utilities/ba4.png';

const images = [ba1,ba2,ba3,ba4]
 

const CarouselNav = () => {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      // Add logic to pause the carousel animation
      // You might need to use the 'animate-scroll' CSS animation you provided
    }
  }, [isPaused]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

    <div className="w-full h-[300px] relative">
      <Carousel
        autoPlay={!isPaused}
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        emulateTouch
        className="overflow-hidden"
        >
        {images.map((image, index) => (
          <div
          key={index}
          className={`w-full h-full bg-cover bg-center ${
            isPaused ? '' : 'animate-scroll'
          }`}
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => setIsPaused(!isPaused)}
          />
          ))}
      </Carousel>
    </div>
          </div>
  );
};

export default CarouselNav;
