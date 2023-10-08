import React from "react";
import PriceCard from "../components/PriceCard";
import HeaderText from "../components/HeaderText";

const Services = () => {
  const cardData = [
    {
      title: "8-WEEK TOP SHAPE DIET PROGRAM",
      price: "365 AED (100 USD)",
      features: [
        "Suitable for Women and Men",
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
      title: "8-WEEK PREMIUM ONLINE COACHING",
      price: "700 AED (200 USD)",
      features: [
        "Customized plans for all levels",
        "Expert nutrition insights",
        "Personalized training programs",
        "Tailored meal plans",
        "Cardio recommendations",
        "Expert supplement guidance",
        "Continuous support",
        "Access to instructive videos",
        "Exceptional results guaranteed",
      ],
    },

    {
      title: "PERSONALIZED FITNESS PROGRAM",
      price: "360 AED (80 USD)",
      features: [
        "Suitable for Women and Men",
        "Cutting, Diet, Muscle Building",
        " For All Levels",
        "Tailored to Your Goals",
      ],
    },
  ];

  return (
    <>
      <div id="services" className="h-full py-3 pb-10 bg-customdarkblack flex flex-col justify-center items-center">
        <HeaderText text1={"OUR"} text2={"SERVICES"} />
        <div className=" flex flex-col sm:flex-row md:flex-row md:justify-evenly  pt-8">
          {cardData.map((card, index) => (
            <PriceCard key={index} {...card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
  