import React from "react";
import bannerbg from "../../utilities/bannerbg.jpg";
import Carousel from "../Carousel";

const AboutUs = () => {
  return (
    <div className="flex w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${bannerbg})` }}>

      <div className="flex flex-col bg-black bg-opacity-40 h-full w-1/2 items-center   ">
        <div className="text-center mt-5  ">
          <h1 className="text-4xl font-bold font-exo2 text-customwhite my-10">
            About <span className="text-customred">Me</span>
          </h1>
          <div className="bg-customred w-12 h-1 border border-customred mb-5"></div>
      </div>
        <p className="text-md md:text-2xl font-poppins text-customwhite m-5">
        👋 Hello! I'm **Krisztian Majer**, an IFBB ELITE PRO ATHLETE and
          experienced FITNESS TRAINER, dedicated to helping you reach your
          fitness goals. With a passion for fitness, I'll guide you on your
          journey to a healthier, fitter, and happier you. ### My Journey My own
          fitness journey started when I faced personal health challenges.
          Through hard work and a commitment to a healthier lifestyle, I
          transformed my life. This ignited my desire to empower others to
          achieve their fitness goals and overcome obstacles. ### My Approach I
          believe fitness is about feeling strong, confident, and energized. My
          training programs focus on holistic well-being, combining effective
          workouts, balanced nutrition, and mental resilience. ### What I Offer
          - **Customized Training:** Tailored to your unique goals, whether it's
          weight loss, muscle gain, or overall fitness improvement. -
          **Nutritional Guidance:** Fuel your body with the right nutrients for
          success with practical nutrition advice and meal plans. - **Motivation
          and Accountability:** Stay inspired and accountable throughout your
          journey. ### Let's Begin Your fitness journey starts here. Together,
          we'll work towards your desired results while cultivating a love for a
          healthier lifestyle. If you're ready to take the first step, [contact
          me](#contact) today for a personalized consultation. ###
          Certifications - IFBB ELITE PRO ATHLETE - Certified Personal Trainer
          (CPT) - Nutrition Specialist - CPR/AED Certified
          
        </p>
      </div>
      
      <div className="flex  flex-col w-1/2 h-full ">
        <Carousel />
      </div>
   
    </div>
  );
};

export default AboutUs;