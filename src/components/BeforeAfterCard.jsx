import React from "react";
import { useState } from "react";

const BeforeAfterCard = ({prop}) => {


  return (
    <div
      className="
        flex
        justify-center
  
        sm:w-[500px] sm:h-[300px] w-full h-full  bg-slate-300 p-2  md:bg-customdarkblack
        items-center
        drop-shadow-md	
        rounded-md
          transition-transform scale-10"
    >
      <div
        className="md:w-full h-full w-full rounded-2xl bg-cover transition duration-500 ease-in-out "
        style={{
          backgroundImage: `url(${prop})`,
        }}
      ></div>
    </div>
  );
}

export default BeforeAfterCard

