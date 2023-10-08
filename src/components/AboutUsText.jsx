import React, { useState, useEffect } from "react";

const AboutUsText = () => {
  const texts = [
    {
      text: "Hello, My name is Krisztian Majer. I'm a passionate personal trainer dedicated to helping you achieve your fitness goals.",
    },
    {
      text: "With years of experience, I'm committed to your health and well-being",
    },
    {
      text: "My training approach is tailored to your unique needs and abilities",
    },
    {
      text: "Let's work together to transform your fitness journey into a success story",
    },
    {
      text: "I believe in the power of consistent effort and a positive mindset",
    },
    {
      text: "Your fitness goals are my top priority; let's conquer them together",
    },
    {
      text: "I believe in the power of consistent effort and a positive mindset",
    },
    {
      text: "Whether you're a beginner or an athlete, I'm here to guide and motivate you",
    },
    {
      text: "I'm not just your trainer; I'm your partner in achieving a healthier lifestyle.",
    },
    {
      text: "Whether you're a beginner or an athlete, I'm here to guide and motivate you",
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
      <div className="max-w-[790px] w-full md:h-[700px] h-[200px] sm:py-4 md:py-8 px-4 relative group">
        <div className="md:w-full h-full bg-customgrey flex items-center justify-center rounded-xl transition duration-500 ease-in-out">
          <p className="text-customgray font-poppins text-l md:text-6xl px-5 text-center md:tracking-[1px] md:leading-[80px] leading-[30px]">
            {texts[currentIndex].text}
          </p>
        </div>

        {/* left button */}
        {/* <div
          onClick={prevText}
          className="md:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-2 cursor-pointer"
        >
          <button>L</button>
        </div> */}

        {/* right button */}
        {/* <div
          onClick={nextText}
          className="md:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2 cursor-pointer"
        >
          <button className="cursor-pointer">R</button>
        </div> */}
      </div>
    </div>
  );
};

export default AboutUsText;
