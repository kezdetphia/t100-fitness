import React from "react";

import Bg from "../../utilities/bg.jpg";
import pic1 from "../../utilities/pic1.jpg";
import p1 from "../../utilities/p1.png";
import p3 from "../../utilities/p3.png";
import p2 from "../../utilities/p2.png";
import bg3 from "../../utilities/bg3.jpg";
import bannerbg from "../../utilities/bannerbg.jpg";
import bannerbg2 from "../../utilities/bannerbg2.jpg";
import bannerbg3 from "../../utilities/bannerbg3.jpg";

const Banner2 = () => {
  return (
    <div className="w-screen h-screen relative flex flex-col md:flex-row pt-10 ">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${bannerbg2})`, // Use linear gradient for fading effect
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
 
      <div
        className="absolute inset-0 bg-black bg-opacity-30"
        style={{ mixBlendMode: "multiply" }}
      ></div>

      {/* Mobile view layout for centered p1 image */}
       {/* <div className="md:w-1/2 h-full md:justify-center md:flex">
        <img
          src={p1}
          alt="Image"
          className="h-auto md:h-full mx-auto"
          style={{ opacity: 0.5 }} // Adjust the opacity value (0 to 1)
        />
      </div>  */}

      <div className="w-1/2 h-full flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Your Title</h1>
          <p className="text-lg">Your description goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
