import ContactForm from "../components/ContactForm";
import HeaderText from "../components/HeaderText";
import ContactUsText from "../components/ContactUsText";




const ContactUs = ({text1, text2, showRedLine}) => {
  return (
  <div className="bg-customdarkblack w-full h-full flex flex-col md:flex-row">
    <ContactUsText />
    <ContactForm />

  </div>
  )
}


    
// const ContactUs = ({text1, text2, showRedLine}) => {
//   return (
//     <div className="flex w-full bg-customdarkblack ">
//       <div className="left flex flex-col w-1/2 bg-customblack ml-20 my-20  ">
//         <ContactUsText />
//       </div>

//       <div className="right flex flex-col w-1/2 mr-20 my-20 bg-customblack">
//         <ContactForm />
//       </div>
//     </div>
//   );
// };

export default ContactUs;
