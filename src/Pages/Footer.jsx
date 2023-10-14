//hooks
import { useState, useRef } from "react";
//packages
import emailjs from "@emailjs/browser";
import { Link } from "react-scroll";
//components
import HeaderText from "../components/HeaderText";
import FacebookIcon from "../components/Icons/FacebookIcon";
import InstagramIcon from "../components/Icons/InstagramIcon";
import YoutubeIcon from "../components/Icons/YoutubeIcon";
import Button from "../components/Button";

const Footer = ({ width, text1, text2, customsize }) => {
  const form = useRef();
  const [emailAddress, setEmailAddress] = useState("");

  const formInitialDetails = {
    email: "",
    message: "This is a new subscriber to your newsletters",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("SUBSCRIBE");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  //send subsrcubers email to emailaddres
  const sendSubscribe = async (e) => {
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

      setButtonText("SUBSCRIBE");
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);

      setButtonText("SUBSCRIBE");
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <div className="w-full h-full bg-customblackblack flex-row sm:flex-col pt-5 justify-evenly ">
      <div className="sm:flex justify-evenly">
        {/* left-div */}
        <div className="flex sm:w-1/3 w-full ">
          {/* headertext */}
          <div className="flex-col ">
            <div className="flex justify-center sm:justify-start pb-5 sm:pb-0">
              <HeaderText text1={"MAJER"} text2={"FITNESS"} />
            </div>
            <div>
              <p className="text-customgray  flex text-center px-5  sm:text-start   font-poppins text-sm leading-1 tracking-wide">
                Lorem ipsum dolor sit amet consectetur. Nulla et nisl sed diam
                aliquam. Urna morbi egestas dis velit. Non viverra fermentum sit
                sit neque rutrum habitasse auctor facilisi fermentum sit et sed.
              </p>
            </div>

            <div className="icons w-full sm:justify-start flex justify-evenly p-5 space-x-4 ">
              <FacebookIcon customsize={"w-10 mr-3"} />
              <InstagramIcon customsize={"w-10 mr-3"} />
              <FacebookIcon customsize={"w-10 mr-3"} />
              <YoutubeIcon customsize={"w-10 mr-3"} />
            </div>
          </div>
        </div>
        {/* newsletter-div */}
        <div className="sm:w-1/3 w-full sm:flex-col sm:text-start  pt-5 font-poppins px-7   ">
          <p className="text-white pb-5 text-2xl font-bold">Subsribe now</p>
          <p className="text-customgray pb-5">
            Sign up for our newsletter to get informed about our deals
          </p>
          <form ref={form} onSubmit={sendSubscribe}>
            <input
              className="w-full h-10 bg-customdarkblack text-customgray pl-3  "
              placeholder="E-mail"
              type="email"
              name="email"
              onChange={(e) => onFormUpdate("email", e.target.value)}
              value={formDetails.email}
            ></input>
            <Button type="submit" text={buttonText} width="w-full"></Button>
          </form>
        </div>

        {/* mid-div */}
        <div className="p-5 text-left space-y-2">
          <h1 className="text-customwhite text-center sm:text-left font-poppins font-bold text-lg pb-3">
            Pages
          </h1>

          <div className="text-customgray flex sm:flex-col space-x-3 sm:space-x-0 justify-evenly sm:pt-2  sm:space-y-7 cursor-pointer ">
            <Link
              to={"banner"}
              spy={true}
              smooth={true}
              offset={-65}
              duration={500}
            >
              Home
            </Link>
            <Link
              to={"about"}
              spy={true}
              smooth={true}
              offset={-65}
              duration={500}
            >
              About Us
            </Link>
            <Link
              to={"services"}
              spy={true}
              smooth={true}
              offset={-65}
              duration={500}
            >
              Services
            </Link>
            {/* <Link>Vlog</Link> */}
            <Link
              to={"contactUs"}
              spy={true}
              smooth={true}
              offset={-65}
              duration={500}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/3  text-customwhite pt-8 flex-col ">
        <p className="text-sm text-start sm:pl-3 pl-1 ">@2023 Majer Fitness. All Rights Reserved </p>
      </div>
    </div>
  );
};

export default Footer;
