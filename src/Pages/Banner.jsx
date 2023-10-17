import React, { useEffect, useState } from "react";
import m1 from '../utilities/arnold/m1.png'
import Button from '../components/Button'
import HeaderText from "../components/HeaderText";
import { Link } from "react-scroll";

const Banner2 = ({text, text1, text2}) => {
  const [isBannerLoaded, setIsBannerLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsBannerLoaded(true);
    }, 100);
  }, []);

  return (
    <div
      id="banner"
      className="w-screen h-screen relative flex flex-col md:flex-row sm:flex-row pt-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1)), url(${m1})`,
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
          <HeaderText text1="ACTIVATE YOUR" text2="POTENTIAL" />

          <p className="font-[poppins, bold] text-sm text-customgray tracking-wider m-2">
            ADVANCED DIGITAL FITNESS GUIDANCE
          </p>
          <Link
            to={"contactUs"}
            spy={true}
            smooth={true}
            offset={-65}
            duration={500}
          >
            {" "}
            <Button text=" CONTACT US" />{" "}
          </Link>
        </div>
      </p>
    </div>
  );
};

export default Banner2;
