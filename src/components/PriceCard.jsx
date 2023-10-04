import React from "react";
import { MdOutlineDoneAll } from "react-icons/md";
import Button from '../components/Button'
import RedLine from "./RedLine";

const PriceCard = ({ title, price, features }) => {
  return (
    <div className=" card-container mb-7 md:mb-0  mx-7 h-[600px]   rounded-lg shadow-lg relative  bg-customblack ">
      <div className="px-5 pt-7 font-poppins text-lg text-gray-200 font-bold">
        <p>{title}</p>
        <div className="pt-2">
          <RedLine />
        </div>
      </div>
      <div className="pt-7 ">
        <ul className="mx-3 py-1 space-y-1 list-disc list-inside text-l md:text-base font-semibold md:font-normal font-poppins">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center  text-customgray">
              <MdOutlineDoneAll className="m-2" /> {feature}
            </li>
          ))}
        </ul>
      </div>
   
      <div className="absolute bottom-10 inset-x-0 flex flex-col justify-center">
        <span className="font-semibold mb-1 p-5 text-lg text-poppins text-customred">
          {price}
        </span>
        <Button text="JOIN ME"></Button>
      </div>
    </div>
  );
};

export default PriceCard;
