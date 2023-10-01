import React from "react";
import HeaderText from "./HeaderText"; // Make sure to import HeaderText

const ContactUsText = () => {
  return (
    <div className="">
      <HeaderText text1="CONTACT" text2="US" showRedLine={true} />
      <div className="pt-3 m-5 px-2 flex ">
        <span className="top-0 left-0 font-family['SF_Compact_Display-Regular',Helvetica] font-normal text-[#999999] text-xl text-justify tracking-[0.72px] leading-[36px]">
          At Majer Fitness, we value your inquiries, feedback, and the
          opportunity to connect with you. Whether you have questions about our
          services or need assistance with anything related, our team is here
          for you.
        </span>
      </div>
    </div>
  );
};

export default ContactUsText;
