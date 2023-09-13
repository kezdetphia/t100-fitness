import React from 'react';

const Button = ({text}) => {

  return (
    <div>
      <button className="font-exo2 font-bold italic bg-customred text-customwhite text-m py-3 px-6 m-2 shadow-lg transition duration-500 hover:scale-110  ">
        {text}
      </button>
      
    </div>
  );
};

export default Button;