import React, { useState } from "react";
import HeaderText from "../components/HeaderText";
import FacebookIcon from "../components/Icons/FacebookIcon";
import InstagramIcon from "../components/Icons/InstagramIcon";
import YoutubeIcon from "../components/Icons/YoutubeIcon";

const Footer = ({text1,text2, customsize}) => {
  return (
    <div className="w-full h-full bg-customblackblack pt-10 flex-col sm:flex-row ">
      {/* left-div */}
      <div className="w-1/2">
        <div>
          <HeaderText text1={"MAJER"} text2={"FITNESS"} />
          <div className="flex ">
            <FacebookIcon customsize={"w-10 mr-3"} />
            <InstagramIcon customsize={"w-10 mr-3"} />
            <FacebookIcon customsize={"w-10 mr-3"} />
            <YoutubeIcon customsize={"w-10 mr-3"} />
          </div>
        </div>
      </div>

      {/* right-div */}
      <div className="w-1/2"></div>
    </div>
  );
};

export default Footer;
