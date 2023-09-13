import React from "react";

const ContactUs = () => {
  return (
    <div className="flex  w-full h-screen bg-customdarkblack">
      <div className="left flex flex-col w-1/2 bg-customblack ml-10 my-20 ">
        <div className="font-exo2 flex items-start m-5 text-3xl ">
          <span className="text-customwhite ">
            CONTACT <span className="text-customred">US</span>
          </span>
        </div>
        <div className="w-20 border border-customred ml-5"></div>
        <div className="">
          <span className=" w-[620px] h-[169px] top-0 left-0 [font-family:'SF_Compact_Display-Regular',Helvetica] font-normal text-[#999999] text-[24px] text-justify tracking-[0.72px] leading-[36px]">
            At Majer Fitness, we value your inquiries, feedback, and the
            opportunity to connect with you. Whether you have questions about
            our services or need assistance with anything related, our team is
            here for you.
          </span>
        </div>
      </div>

      <div className="right"></div>
    </div>
  );
};

export default ContactUs;

// import React from "react";
// const ContactUs = () => {
//   return (
//     <div className="w-full h-full">
//       <div className=" w-full h-[665px] top-0 left-0">
//         <div className="w-full h-[665px] bg-[#1a1a1a] relative shadow-[0px_8px_18px_#0000001a,0px_32px_32px_#00000017,0px_72px_43px_#0000000d,0px_128px_51px_#00000003,0px_200px_56px_transparent]">
//           <p className="absolute w-[620px] h-[44px] top-[40px] left-[40px] [font-family:'Exo_2-Bold',Helvetica] font-bold text-transparent text-[48px] tracking-[0] leading-[normal] whitespace-nowrap">
//             <span className="[font-family:'Exo_2-BoldItalic',Helvetica] italic text-[#f2f2f2]">
//               CONTACT
//             </span>
//             <span className="[font-family:'Exo_2-BoldItalic',Helvetica] italic text-[#ee393d]">
//               {" "}
//               US
//             </span>
//           </p>
//           <p className="absolute w-[620px] h-[169px] top-[134px] left-[40px] [font-family:'SF_Compact_Display-Regular',Helvetica] font-normal text-[#999999] text-[24px] text-justify tracking-[0.72px] leading-[36px]">
//             At Majer Fitness, we value your inquiries, feedback, and the
//             opportunity to connect with you. Whether you have questions about
//             our services or need assistance with anything related, our team is
//             here for you.
//           </p>
//           <div className="absolute w-[80px] h-[4px] top-[102px] left-[40px] bg-[#ee393d]" />
//           <div className="absolute w-[610px] h-[36px] top-[306px] left-[40px]">
//             <div className="absolute w-[560px] h-[32px] top-0 left-[48px] [font-family:'SF_Compact_Display-Regular',Helvetica] font-normal text-[#999999] text-[24px] tracking-[0.72px] leading-[36px] whitespace-nowrap">
//               +929 123 4567
//             </div>
//             <img
//               className="absolute w-[36px] h-[36px] top-0 left-0"
//               alt="Ri phone fill"
//               src="ri-phone-fill.svg"
//             />
//           </div>
//           <div className="absolute w-[610px] h-[36px] top-[366px] left-[40px]">
//             <div className="absolute w-[560px] h-[32px] top-0 left-[48px] [font-family:'SF_Compact_Display-Regular',Helvetica] font-normal text-[#999999] text-[24px] tracking-[0.72px] leading-[36px] whitespace-nowrap">
//               info@majerfitness.com
//             </div>
//             <img
//               className="absolute w-[36px] h-[36px] top-0 left-0"
//               alt="Ic sharp mail"
//               src="ic-sharp-mail.svg"
//             />
//           </div>
//           <div className="absolute w-[610px] h-[36px] top-[426px] left-[40px]">
//             <p className="absolute w-[560px] h-[32px] top-0 left-[48px] [font-family:'SF_Compact_Display-Regular',Helvetica] font-normal text-[#999999] text-[24px] tracking-[0.72px] leading-[36px] whitespace-nowrap">
//               1234 Newkirk Ave, Queens, NY 13245
//             </p>
//             <img
//               className="absolute w-[36px] h-[36px] top-0 left-0"
//               alt="Ion location sharp"
//               src="ion-location-sharp.svg"
//             />
//           </div>
//           <div className="absolute w-[564px] h-[106px] top-[519px] left-[40px]">
//             <div className="absolute h-[36px] top-0 left-0 [font-family:'SF_Compact_Display-Semibold',Helvetica] font-normal text-[#f2f2f2] text-[24px] tracking-[0.72px] leading-[36px] whitespace-nowrap">
//               Business Hours
//             </div>
//             <p className="absolute w-[560px] h-[54px] top-[52px] left-0 [font-family:'SF_Compact_Display-Regular',Helvetica] font-normal text-[#999999] text-[24px] tracking-[0.72px] leading-[36px]">
//               Mon-Fri 10 am - 8 pm
//               <br />
//               Sat, Sun Closed
//             </p>
//           </div>
//           <div className="absolute w-[745px] h-[665px] top-0 left-[700px] bg-[#2c2c2c]">
//             <div className="absolute w-[667px] h-[135px] top-[385px] left-[40px]">
//               <div className="absolute w-[665px] h-[96px] top-[39px] left-0 bg-[#f2f2f2] opacity-5" />
//               <div className="absolute w-[665px] top-0 left-0 [font-family:'SF_Compact_Display-Regular',Helvetica] font-normal text-[#999999] text-[24px] tracking-[0.72px] leading-[36px] whitespace-nowrap">
//                 Message
//               </div>
//             </div>
//             <button className="absolute w-[667px] h-[70px] top-[555px] left-[40px] all-[unset] box-border">
//               <div className="w-[665px] h-[70px] bg-[#ee393d] relative shadow-[0px_8px_18px_#0000001a,0px_32px_32px_#00000017,0px_72px_43px_#0000000d,0px_128px_51px_#00000003,0px_200px_56px_transparent]">
//                 <div className="absolute w-[446px] h-[28px] top-[24px] left-[110px] [font-family:'Exo_2-BoldItalic',Helvetica] font-bold italic text-[#f2f2f2] text-[32px] text-center tracking-[0.96px] leading-[normal] whitespace-nowrap">
//                   SUBMIT
//                 </div>
//               </div>
//             </button>
//             <div className="absolute w-[667px] h-[91px] top-[155px] left-[40px]">
//               <div className="absolute w-[665px] h-[48px] top-[43px] left-0 bg-[#f2f2f2] opacity-5" />
//               <div className="absolute w-[665px] top-0 left-0 [font-family:'SF_Compact_Display-Regular',Helvetica] font-normal text-[#999999] text-[24px] tracking-[0.72px] leading-[36px] whitespace-nowrap">
//                 E-Mail
//               </div>
//             </div>
//             <div className="absolute w-[317px] h-[91px] top-[40px] left-[40px]">
//               <div className="absolute w-[315px] h-[48px] top-[43px] left-0 bg-[#f2f2f2] opacity-5" />
//               <div className="absolute w-[315px] top-0 left-0 [font-family:'SF_Compact_Display-Regular',Helvetica] font-normal text-[#999999] text-[24px] tracking-[0.72px] leading-[36px] whitespace-nowrap">
//                 First Name
//               </div>
//             </div>
//             <div className="absolute w-[317px] h-[91px] top-[40px] left-[390px]">
//               <div className="absolute w-[315px] h-[48px] top-[43px] left-0 bg-[#f2f2f2] opacity-5" />
//               <div className="absolute w-[315px] top-0 left-0 [font-family:'SF_Compact_Display-Regular',Helvetica] font-normal text-[#999999] text-[24px] tracking-[0.72px] leading-[36px] whitespace-nowrap">
//                 Last Name
//               </div>
//             </div>
//             <div className="absolute w-[667px] h-[91px] top-[270px] left-[40px]">
//               <div className="absolute w-[665px] h-[48px] top-[43px] left-0 bg-[#f2f2f2] opacity-5" />
//               <div className="absolute w-[665px] top-0 left-0 [font-family:'SF_Compact_Display-Regular',Helvetica] font-normal text-[#999999] text-[24px] tracking-[0.72px] leading-[36px] whitespace-nowrap">
//                 Phone Number
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
