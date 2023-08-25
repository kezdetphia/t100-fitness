import React, { useState } from "react";
import p1 from "../utilities/p1.png";

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    console.log(e);
  };

  return (
    <div className="py-10 bg-stone-900">
  <div className="p-4 text-center">
    <h1 className="text-white text-3xl pb-4 font-[Poppins]">Get in touch</h1>
  </div>
  <div className="flex flex-col lg:flex-row p-4 space-y-4 lg:space-y-0">
    <div className="lg:w-1/3 p-4 text-center">
      <img src={p1} alt="Your Image" className="mx-auto max-w-xs h-auto" />
    </div>
    <div className="w-full  md:w-2/3 px-4 lg:px-10 py-10 bg-transparent">
      <form onSubmit={handleSubmit} className="flex flex-col  space-y-6">
        <input
          type="text"
          name="firstname"
          value={formDetails.firstName}
          placeholder="First name"
          onChange={(e) => onFormUpdate("firstName", e.target.value)}
          className="bg-transparent border border-white rounded-lg p-2 text-white font-[Poppins] w-full"
        />
        <input
          type="text"
          name="lastname"
          value={formDetails.lastName}
          onChange={(e) => onFormUpdate("lastName", e.target.value)}
          placeholder="Last name"
          className="bg-transparent border border-white rounded-lg p-2 text-white font-[Poppins] w-full"
        />
        <input
          type="email"
          name="email"
          value={formDetails.email}
          onChange={(e) => onFormUpdate("email", e.target.value)}
          placeholder="Email address"
          className="bg-transparent border border-white rounded-lg p-2 text-white font-[Poppins] w-full"
        />
        <input
          type="tel"
          name="phone"
          value={formDetails.phone}
          onChange={(e) => onFormUpdate("phone", e.target.value)}
          placeholder="Phone Number"
          className="bg-transparent border border-white rounded-lg p-2 text-white font-[Poppins] w-full"
        />
        <textarea
          name="message"
          value={formDetails.message}
          onChange={(e) => onFormUpdate("message", e.target.value)}
          placeholder="Message"
          rows="4"
          className="bg-transparent border border-white rounded-lg p-2 text-white font-[Poppins] w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded w-full"
        >
          <span>{buttonText}</span>
        </button>
      </form>
    </div>
  </div>
</div>

  
  );
};

export default Contact;
