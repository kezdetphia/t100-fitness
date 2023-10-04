import React from "react";
import HeaderText from "./HeaderText"; // Make sure to import HeaderText
import ContactDetails from "../components/ContactDetails";

const ContactUsText = () => {
  return (
    <div className="md:w-10/12 sm:full  px-4 bg-customblack">
      <HeaderText text1="CONTACT" text2="US" showRedLine={true} />
      <div className="pt-3 m-3 px-2 flex ">
        <span className="top-0 left-0 font-family['SF_Compact_Display-Regular',Helvetica] font-normal text-[#999999] text-l text-justify md:tracking-[0.1px] md:leading-[26px] leading-[30px]">
          At Majer Fitness, we value your inquiries, feedback, and the
          opportunity to connect with you. Whether you have questions about our
          services or need assistance with anything related, our team is here
          for you.
        </span>
      </div>
      <ContactDetails />
    </div>
  );
};

export default ContactUsText;
