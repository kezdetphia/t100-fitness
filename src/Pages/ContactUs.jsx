import ContactForm from "../components/ContactForm";
import HeaderText from "../components/HeaderText";

const ContactUs = ({text1, text2, showRedLine}) => {
  return (
    <div className="flex w-full bg-customdarkblack ">
      <div className="left flex flex-col w-1/2 bg-customblack ml-20 my-20  ">
        {/* <div className="font-exo2 flex items-start m-5 text-3xl "> */}
        <HeaderText text1="CONTACT" text2="US" showRedLine={true}/>
        {/* </div> */}
        {/* <div className="w-20 border border-customred mx-5"></div> */}
        <div className="pt-10 m-5 flex">
          <span className=" w-[620px] h-[169px] top-0 left-0 [font-family:'SF_Compact_Display-Regular',Helvetica] font-normal text-[#999999] text-[24px] text-justify tracking-[0.72px] leading-[36px]">
            At Majer Fitness, we value your inquiries, feedback, and the
            opportunity to connect with you. Whether you have questions about
            our services or need assistance with anything related, our team is
            here for youoo.
          </span>
        </div>
      </div>

      <div className="right flex flex-col w-1/2 mr-20 my-20 bg-customblack">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
