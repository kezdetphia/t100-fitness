import React, { useEffect, useState } from "react";
import bannerbg2 from "../utilities/bannerbg2.jpg";
import Button from '../components/Button'
import HeaderText from "../components/HeaderText";

const Banner2 = ({text, text1, text2}) => {
  const [isBannerLoaded, setIsBannerLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsBannerLoaded(true);
    }, 100);
  }, []);

  return (
    <div
      className="w-screen h-screen relative flex flex-col md:flex-row sm:flex-row pt-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1)), url(${bannerbg2})`,
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
          <HeaderText text1="UNLEASH YOUR" text2="POTENTIAL"/>
         
          <p className="font-[poppins, bold] text-sm text-customgray tracking-wider m-2">PROFESSIONAL ONLINE FITNESS COACHING</p>
          <Button text=' CONTACT US' />

        </div>
      </p>
    </div>
  );
};

export default Banner2;
