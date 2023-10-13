import React from "react";
import YoutubeIcon from "./Icons/YoutubeIcon";
import FacebookIcon from "./Icons/FacebookIcon";
import InstagramIcon from "./Icons/InstagramIcon";

import animationData from "../utilities/gym.json";
import Lottie from "lottie-react";

const ContactDetails = ({
  showYoutubeTitle,
  showFacebookTitle,
  showInstagramTitle,
  customsize
  
}) => {
  return (
    <div className="w-full mt-8">
      <div className="flex items-center ml-5 pb-2">
        <InstagramIcon showInstagramTitle={true} customsize={"w-5 mr-3"} />
      </div>

      <div className="flex items-center ml-5 pb-2">
        <FacebookIcon showFacebookTitle={true} customsize={"w-5 mr-3"} />
      </div>

      <div className="flex items-center ml-5 pb-2">
        <YoutubeIcon showYoutubeTitle={true} customsize={"w-5 mr-3"} />
      </div>

      <div className="flex items-center ml-5 pb-2 duration-500 hover:scale-110">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 mr-3 text-customred"
        >
          <path
            fillRule="evenodd"
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.970c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
            clipRule="evenodd"
          />
        </svg>
        <div className="text-customgray">+917-497-2035</div>
      </div>

      <div className="flex items-center ml-5 pb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 mr-3 text-customred"
        >
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>

        <div className="text-customgray">info@majerfitness.com</div>
      </div>

      {/* Add more contact details as needed */}

      <div className="flex pb-5  ">
        <div className="flex flex-col mt-10 w-full">
          <span className="text-customwhite flex ml-5  [font-family:'SF_Compact_Display-Regular',Helvetica]">
            Business Hours
          </span>
          <span className="text-customgray pl-5 flex justify-start ">
            Mon-Fri 10am - 8pm
          </span>
          <span className="text-customgray pl-5 flex justify-start ">
            Sat, Sun Closed
          </span>
        </div>
        <Lottie className="w-40" animationData={animationData} />
      </div>
    </div>
  );
};

export default ContactDetails;
