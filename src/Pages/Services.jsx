import React from "react";
import PriceCard from "../components/PriceCard";
import HeaderText from "../components/HeaderText";

const Services = () => {
  const cardData = [
    {
      title: "8-Week Top Shape Diet Program",
      price: "365 AED (100 USD)",
      features: [
        "Suitable for both Women and Men",
        "Fundamental nutrition principles",
        "Guided dietary initiation",
        "Active lifestyle strategies",
        "Basic training programs",
        "Balanced meal plan guidance",
        "Support via WhatsApp",
        "Access to select videos",
        "Affordable and effective option",
      ],
    },
    {
      title: "8-Week Premium Online Coaching",
      price: "700 AED (200 USD)",
      features: [
        "Customized plans for all levels",
        "Expert nutrition insights",
        "Personalized training programs",
        "Tailored meal plans",
        "Cardio fitness recommendations",
        "Expert supplement guidance",
        "Continuous support via WhatsApp",
        "Access to instructive videos",
        "Exceptional results guaranteed",
      ],
    },

    {
      title: "PERSONALIZED FITNESS PROGRAM",
      price: "360 AED (80 USD)",
      features: [
        "Suitable for both Women and Men",
        "Cutting, Diet, Muscle Building",
        " For All Levels",
        "Tailored to Your Goals",
      ],
    },
  ];

  return (
    <>
      {/* <div className="">
        <HeaderText text1="OUR" text2="SERVICES" />
      </div> */}
    <div className="h-full flex flex-col md:flex-row md:justify-evenly bg-gradient-to-b from-black bg-opacity-20 to-customblack">
      {cardData.map((card, index) => (
        <PriceCard key={index} {...card} />
      ))}
    </div>
        </>
  );
};

export default Services;
