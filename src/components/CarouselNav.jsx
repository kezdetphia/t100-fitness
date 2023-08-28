import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg from '../utilities/bg.jpg'


const CarouselNav = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="rounded-xl">
      <Slider {...settings}>
        <div>
          <img
            src={bg}
            alt="Slide 1"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/800x400?text=Slide+2"
            alt="Slide 2"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/800x400?text=Slide+3"
            alt="Slide 3"
            className="h-full w-full object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselNav;

