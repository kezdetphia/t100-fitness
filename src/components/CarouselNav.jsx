import React from "react";
import ba1 from '../utilities/ba1.png'
import ba2 from '../utilities/ba2.png'
import ba3 from '../utilities/ba3.png'
import ba4 from '../utilities/ba4.png';

const CarouselNav = () => {
  return (
    <div className="overflow-x-scroll whitespace-no-wrap my-10">
      <div className="flex space-x-4 animate-scroll">
        <img src={ba1} alt="Slide 1" className="w-screen h-screen object-cover" />
        <img src={ba2} alt="Slide 2" className="w-screen h-screen object-cover" />
        <img src={ba3} alt="Slide 3" className="w-screen h-screen object-cover" />
        <img src={ba4} alt="Slide 4" className="w-screen h-screen object-cover" />
      </div>
    </div>
  );
};

export default CarouselNav;
