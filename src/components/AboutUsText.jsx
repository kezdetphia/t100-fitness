import React, { useState, useEffect } from "react";

const AboutUsText = () => {
  const texts = [
    {
      text: "hello my name is",
    },
    {
      text: "i build muscle",
    },
    {
      text: "yoooooo",
    },
    {
      text: "im 200meter tall",
    },
    {
      text: "i weitgh 250",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevText = () => {
    const isFirstText = currentIndex === 0;
    const newIndex = isFirstText ? texts.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextText = () => {
    const isLastText = currentIndex === texts.length - 1;
    const newIndex = isLastText ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    // Automatically transition to the next slide every 3 seconds
    const interval = setInterval(() => {
      nextText();
    }, 3000);
    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]); //

  return (
    <div className="sm:w-1/2 md:1/2 md:pl-5 pb-6 p-3 flex justify-center">
      <div className="max-w-[790px] w-full md:h-[700px] h-[300px] py-8 px-4 relative group">
        <div className="md:w-full h-full   transition duration-500 ease-in-out">
          <h2>{texts[currentIndex].text}</h2>
        </div>

        {/* left button */}
        <div
          onClick={prevText}
          className="md:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-2 cursor-pointer"
        >
          <button>L</button>
        </div>

        {/* right button */}
        <div
          onClick={nextText}
          className="md:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2 cursor-pointer"
        >
          <button className="cursor-pointer">R</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsText;
