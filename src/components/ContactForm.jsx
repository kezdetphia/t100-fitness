import { useState, useRef } from "react";
import Button from "./Button";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("SUBMIT");
  const [status, setStatus] = useState({});
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setButtonText("SENDING...");

    try {
      const response = await emailjs.sendForm(
        "service_v9q9spf",
        "template_tno0efd",
        form.current,
        "-timrCBD-0YqBuVaU"
      );

      console.log("Email sent successfully", response);

      setButtonText("Send");
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);

      setButtonText("Send");
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <div className="w-full  bg-customgrey">
      <form
        ref={form}
        className="gap-5 text-left my-10 mx-5 "
        onSubmit={sendEmail}
      >
        <div className="grid grid-cols-2 gap-5  ">
          <div className="flex flex-col w-full ">
            <label className="text-customwhite mb-2">First Name</label>
            <input
              className="bg-customgray w-full h-8 mb-5 opacity-50 "
              type="text"
              name="firstName"
              value={formDetails.firstName}
              onChange={(e) => onFormUpdate("firstName", e.target.value)}
            />
          </div>

          <div className="flex flex-col ">
            <div className="flex flex-col w-full ">
              <label className="text-customwhite mb-2">Last Name</label>
              <input
                className="bg-customgray w-full h-8 mb-5 opacity-50 "
                type="text"
                name="lastName"
                value={formDetails.lastName}
                onChange={(e) => onFormUpdate("lastName", e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col ">
          <div className="flex flex-col w-full ">
            <label className="text-customwhite mb-2">Email</label>
            <input
              className="bg-customgray w-full h-8 mb-5 opacity-50 "
              type="email"
              name="email"
              value={formDetails.email}
              onChange={(e) => onFormUpdate("email", e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-col w-full ">
            <label className="text-customwhite mb-2">Phone Number</label>
            <input
              className="bg-customgray w-full h-8 mb-5 opacity-50 "
              type="tel"
              name="phone"
              value={formDetails.phone}
              onChange={(e) => onFormUpdate("phone", e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-col w-full ">
            <label className="text-customwhite mb-2">Message</label>
            <textarea
              className="bg-customgray w-full mb-5 opacity-50 h-24 "
              type="text"
              name="message"
              value={formDetails.message}
              onChange={(e) => onFormUpdate("message", e.target.value)}
            />
          </div>
        </div>

        <Button text={buttonText} width="w-full" type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
