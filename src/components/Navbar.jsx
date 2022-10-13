import React from 'react';

import logo from '../assets/shared/logo.svg';

const Navbar = () => {
  return (
    <div className='w-screen h-24 absolute mt-8 flex flex-row items-center'>
      <div className='pl-12'>
        <img src={logo} alt='logo' className='w-12 h-12' />
      </div>
      <div className='h-[1px] w-1/3 bg-white opacity-25 ml-16'></div>
      <div className='w-7/12 backdrop-blur-2xl ml-auto'>
        <div className='flex flex-row text-base uppercase gap-16 font-barlow-condensed text-white justify-center'>
          <h5 className='tracking-[2.7px]'>
            <span className='font-bold'>00</span> Home
          </h5>
          <h5 className='tracking-[2.7px]'>
            <span className='font-bold'>01</span> Destination
          </h5>
          <h5 className='tracking-[2.7px]'>
            <span className='font-bold'>02</span> Crew
          </h5>
          <h5 className='tracking-[2.7px]'>
            <span className='font-bold'>03</span> Technology
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
