import React, { useState } from "react";

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
   <div className="flex h-screen justify-start items-center  bg-gray-800">
  <div className="w-2/3 px-10 py-10  flex flex-col items-center bg-transparent ">
    <h1 className="text-white text-3xl pb-20 justify-start font-[Poppins]">Get in touch</h1>
    <form onSubmit={handleSubmit} className="flex flex-col space-y-12">
      <div className="flex space-x-4 w-full">
        <input
          type="text"
          name="firstname"
          value={formDetails.firstName}
          placeholder="First name"
          onChange={(e) => onFormUpdate("firstName", e.target.value)}
          className="flex-1 bg-transparent border border-white rounded-xl p-3 text-xl text-white font-[Poppins] "
        />
        <input
          type="text"
          name="lastname"
          value={formDetails.lastName}
          onChange={(e) => onFormUpdate("lastName", e.target.value)}
          placeholder="Last name"
          className="flex-1 bg-transparent border border-white rounded-xl p-3 text-xl text-white font-[Poppins] "
        />
      </div>
      <div className="flex space-x-4 w-full">
        <input
          type="email"
          name="email"
          value={formDetails.email}
          onChange={(e) => onFormUpdate("email", e.target.value)}
          placeholder="Email address"
          className="flex-1 bg-transparent border border-white rounded-xl p-3 text-xl text-white font-[Poppins] "
        />
        <input
          type="tel"
          name="phone"
          value={formDetails.phone}
          onChange={(e) => onFormUpdate("phone", e.target.value)}
          placeholder="Phone Number"
          className="flex-1 bg-transparent border border-white rounded-xl p-3 text-xl text-white font-[Poppins] "
        />
      </div>
      <textarea
        name="message"
        value={formDetails.message}
        onChange={(e) => onFormUpdate("message", e.target.value)}
        placeholder="Message"
        className="w-full bg-transparent border border-white rounded-xl p-3 text-xl text-white font-[Poppins] "
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        <span>{buttonText}</span>
      </button>
    </form>
  </div>
</div>
  );
};

export default Contact;
