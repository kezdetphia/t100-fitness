import React, { useEffect, useState } from "react";
import bannerbg2 from "../../utilities/bannerbg2.jpg";
import Button from '../Button'

const Banner2 = ({text}) => {
  const [isBannerLoaded, setIsBannerLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsBannerLoaded(true);
    }, 100);
  }, []);

  return (
    <div
      className="w-screen h-screen relative flex flex-col md:flex-row pt-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${bannerbg2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <p
        className={`text-white text-2xl fade-in absolute inset-0 flex items-center justify-center ${
          isBannerLoaded ? "active" : ""
        }`}
      >
        <div>
          <h1 className="font-exo2 text-4xl font-bold  left-0 tracking-wider">
            UNLEASH YOUR <span className="text-customred">POTENTIAL</span>
          </h1>
  
          <p className="font-[poppins, bold] text-sm text-customgray tracking-wider m-2">PROFESSIONAL ONLINE FITNESS COACHING</p>
          <Button text=' CONTACT US' />

        </div>
      </p>
    </div>
  );
};

export default Banner2;
