import ContactForm from "../components/ContactForm";
import HeaderText from "../components/HeaderText";
import ContactUsText from "../components/ContactUsText";

const ContactUs = ({ text1, text2, showRedLine }) => {
  return (
    <div
      id="contactUs"
      className="bg-customdarkblack h-full  flex sm:p-5 flex-col  md:p-10 md:px-20 md:flex-row"
    >
      <ContactUsText />
      <ContactForm />
    </div>
  );
};

export default ContactUs;
