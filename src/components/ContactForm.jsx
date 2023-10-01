import { useState } from "react";
import Button from "./Button";

const defaultFormFields = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  message: "",
};

const ContactForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, email, phoneNumber, message } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // const handleSubmit=async(event)=>{
  //   event.preventDefault
  // }

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e);
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="w-full h-full mr-5  bg-customgrey">
      <form className="gap-5 text-left my-10 mx-5" onSubmit={handleChange}>
        <div className="grid grid-cols-2 gap-5  ">
          <div className="flex flex-col w-full ">
            <span className="text-customwhite mb-2">First Name</span>
            <input
              className="bg-customgray w-full h-8 mb-5 opacity-50 "
              label="First Name"
              required
              onChange={handleChange}
              type="text"
              name="firstName"
              value={firstName}
            />
          </div>

          <div className="flex flex-col ">
            <span className="text-customwhite mb-2">Last Name</span>
            <input
              className="bg-customgray w-full h-8 mb-5 opacity-50 "
              label="Last Name"
              required
              onChange={handleChange}
              type="text"
              name="lastName"
              value={lastName}
            />
          </div>
        </div>

        <div className="flex flex-col ">
          <span className="text-customwhite mb-2">E-Mail</span>
          <input
            className="bg-customgray w-full h-8 mb-5 opacity-50 "
            label="First Name"
            required
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
          />
        </div>
        <div className="flex flex-col ">
          <span className="text-customwhite mb-2">Phone Number</span>
          <input
            className="bg-customgray w-full h-8 mb-5 opacity-50 "
            label="Phone Number"
            required
            onChange={handleChange}
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
          />
        </div>
        <div className="flex flex-col ">
          <span className="text-customwhite mb-1">Message</span>
          <textarea
            className="bg-customgray w-full h-40 mb-5 opacity-50"
            label="Message"
            required
            onChange={handleChange}
            type="text"
            name="message"
            value={message}
          />
        </div>

        <Button text="SUBMIT" width="w-full" onSubmit={handleChange} />
        {/* <button className='font-exo2 font-bold italic bg-customred text-customwhite text-m py-3 px-6 m-2 shadow-lg transition duration-500 hover:scale-110 w-full'  > SUBMIT</button> */}
      </form>
    </div>
  );
};

export default ContactForm;
