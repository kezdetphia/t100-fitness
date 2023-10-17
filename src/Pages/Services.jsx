import React from "react";
import PriceCard from "../components/PriceCard";
import HeaderText from "../components/HeaderText";

const Services = () => {
  const cardData = [
    {
      title: "8-WEEK TOP SHAPE DIET PROGRAM",
      price: "150 USD ",
      features: [
        "Affordable and effective option",
        "Basic surviving training ",
        "Balanced rescue operations",
        "Guided combat training",
        "Active lifestyle strategies",
        "Support via Skynet",
        "Suitable for cyberdyne and humans",
        "Access to data analysis",
      ],
    },
    {
      title: "8-WEEK PREMIUM ONLINE COACHING",
      price: "250 USD ",
      features: [
        "Exceptional support system",
        "Advanced Nutritional wisdom",
        "Customized plans for all levels",
        "Individualized workout warfare",
        "Robotic fitness schemes",
        "Access to instructive videos",
        "Cardio recommendations",
        "Continuous support",
        "Supplement Wisdom: like a machine",
      ],
    },

    {
      title: "PERSONALIZED FITNESS PROGRAM",
      price: "100 USD ",
      features: [
        "Shredding, fueling, terminator growth",
        "Customized for your mission",
        "For cyberdyne and humans",
        "Suitable for resistance members",
      ],
    },
  ];

  return (
    <>
      <div
        id="services"
        className="h-full py-3 pb-1 bg-customdarkblack flex flex-col justify-center items-center"
      >
        <HeaderText text1={"OUR"} text2={"SERVICES"} />
        <div className=" flex flex-col w-full sm:flex-row md:flex-row md:justify-evenly pt-8 pb-3">
          {cardData.map((card, index) => (
            <PriceCard key={index} {...card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
