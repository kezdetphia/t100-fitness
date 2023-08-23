import React from 'react';
import Bg from '../utilities/bg.jpg'
import bg2 from '../utilities/bg2.jpg'

const Banner = () => {
  return (
    <div className='w-screen h-screen bg-cover bg-center' style={{ backgroundImage: `url(${Bg})` }}>
    </div>
  );
};

export default Banner;