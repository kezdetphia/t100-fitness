import React from 'react';
import Bg from '../utilities/bg.jpg'

const Banner = () => {
  return (
    <div className='w-screen h-screen bg-blue-300 bg-cover bg-center' style={{ backgroundImage: `url(${Bg})` }}>
 
      hello
    </div>
  );
};

export default Banner;