import ContactForm from "../components/ContactForm";
import HeaderText from "../components/HeaderText";
import ContactUsText from "../components/ContactUsText";

const ContactUs = ({ text1, text2, showRedLine }) => {
  return (
    <div
      id="contactUs"
      className="bg-customdarkblack md:p-10 sm:p-5 h-full flex flex-col  md:flex-row"
    >
      <ContactUsText />
      <ContactForm />
    </div>
  );
};

export default ContactUs;
