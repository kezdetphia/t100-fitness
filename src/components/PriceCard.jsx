import React from 'react';
import { MdOutlineDoneAll } from 'react-icons/md';

const PriceCard = ({ title, price, features }) => {
  return (
    <div className=' card-container border border-blue-50 mx-7  h-[600PX] rounded-lg shadow-lg relative text-center bg-gray-200 '>
      <div className='p-5 mb-5  font-[Poppins] text-lg text-gray-200 font-bold bg-black'>
        <p>{title}</p>
      </div>
      <div>
        <span className='font-semibold mb-5 p-5 text-lg'>{price}</span>
      </div>
      <div className>
        <ul className='py-3 space-y-1 list-disc list-inside text-xs md:text-base font-semibold md:font-normal  font-[Poppins]'>
          {features.map((feature, index) => (
            <li key={index} className='flex items-center justify-center'>
              <MdOutlineDoneAll className='m-2' /> {feature}
            </li>
          ))}
        </ul>
      </div>
      {/* <div className='absolute bottom-18 left-0 mt-3 ml-3'>
        <span className=''>Elevate your journey with us!</span>
      </div> */}
      <div className='absolute bottom-10 inset-x-0 flex justify-center'>
        <button className=' border rounded-m shadow-lg bg-black text-gray-200 px-5 py-3 hover:bg-gray-400 hover:text-black text-bold font-[Poppins] cursor-pointer'>Join Me!</button>
      </div>
    </div>
  );
};

export default PriceCard;
