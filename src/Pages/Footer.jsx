import React, { useState } from "react";
import HeaderText from "../components/HeaderText";
import FacebookIcon from "../components/Icons/FacebookIcon";
import InstagramIcon from "../components/Icons/InstagramIcon";
import YoutubeIcon from "../components/Icons/YoutubeIcon";
import { Link } from "react-scroll";

const Footer = ({ text1, text2, customsize }) => {
  return (
    <div className="w-full h-full bg-customblackblack flex-row md:flex pt-5 ">
      {/* left-div */}
      <div className="flex  sm:w-1/3  ">
        {/* headertext */}
        <div >
          <HeaderText text1={"MAJER"} text2={"FITNESS"} />
          <div>
            <p className="text-customgray sm:pl-5 flex text-center px-5  sm:text-start   font-poppins text-sm leading-1 tracking-wide">
              Lorem ipsum dolor sit amet consectetur. Nulla et nisl sed diam
              aliquam. Urna morbi egestas dis velit. Non viverra fermentum sit
              sit neque rutrum habitasse auctor facilisi fermentum sit et sed.
            </p>
          </div>

          <div className="icons w-full sm:justify-start flex justify-evenly     p-5 space-x-4 ">
            <FacebookIcon customsize={"w-10 mr-3"} />
            <InstagramIcon customsize={"w-10 mr-3"} />
            <FacebookIcon customsize={"w-10 mr-3"} />
            <YoutubeIcon customsize={"w-10 mr-3"} />
          </div>
        </div>
      </div>

      {/* mid-div */}
      <div className="p-5 sm:pl-20 text-left space-y-2">
        <h1 className="text-customwhite text-center sm:text-left font-poppins font-bold text-lg pb-3">
          Pages
        </h1>

        <div className="text-customgray flex sm:flex-col space-x-3 sm:space-x-0 justify-evenly  sm:space-y-1 cursor-pointer ">
          <Link
            to={"banner"}
            spy={true}
            smooth={true}
            offset={-65}
            duration={500}
          >
            Home
          </Link>
          <Link
            to={"about"}
            spy={true}
            smooth={true}
            offset={-65}
            duration={500}
          >
            About Us
          </Link>
          <Link
            to={"services"}
            spy={true}
            smooth={true}
            offset={-65}
            duration={500}
          >
            Services
          </Link>
          <Link>Vlog</Link>
          <Link
            to={"contactUs"}
            spy={true}
            smooth={true}
            offset={-65}
            duration={500}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;



  // <div className="text-customwhite text-start pl-5 flex flex-col sm:flex-row pt-12 pb-8 cursor-pointer ">
  //           <Link className="mr-8">Terms anbd condition</Link>
  //           <Link>Privacy Policy</Link>
  //           </div>