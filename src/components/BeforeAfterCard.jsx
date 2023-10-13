import React from "react";
import { useState } from "react";

const BeforeAfterCard = ({prop}) => {


  return (
    <div
      className="
        flex
        justify-center

        p-6 w-[500px] h-[500px] bg-slate-300 md:p-10  md:bg-customdarkblack
        items-center
        drop-shadow-md	
        rounded-md"
    >
      <div
        className="md:w-full h-full rounded-2xl bg-cover transition duration-500 ease-in-out "
        style={{
          backgroundImage: `url(${prop})`,
        }}
      ></div>
    </div>
  );
}

export default BeforeAfterCard;
