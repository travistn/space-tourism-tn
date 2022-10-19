import React from 'react';

import logo from '../assets/shared/logo.svg';
import menuIcon from '../assets/shared/icon-hamburger.svg';

const Navbar = () => {
  return (
    <div className='w-screen absolute flex flex-row items-center mt-8 pl-8 pr-8 md:pr-0 md:pl-12 md:h-24 md:mt-0 lg:mt-8'>
      <img src={logo} alt='logo' className='w-10 h-10 md:w-12 md:h-12' />
      <img src={menuIcon} alt='menu-icon' className='w-6 h-[21px] ml-auto md:invisible' />
      <div className='hidden md:flex justify-center min-w-[550px] lg:min-w-[830px] 2xl:min-w-[1200px] h-24 items-center bg-navbar-links backdrop-blur-2xl'>
        <div className='flex flex-row justify-center text-white uppercase font-barlow-condensed gap-16 max-w-[356px] text-sm lg:text-base 2xl:text-xl'>
          <h5 className='flex flex-row tracking-[2.3px] lg:tracking-[3px]'>
            <span className='font-bold mr-2 md:hidden lg:flex'>00</span>Home
          </h5>
          <h5 className=' flex flex-row tracking-[2.3px] lg:tracking-[3px]'>
            <span className='font-bold mr-2 md:hidden lg:flex'>01</span>Destination
          </h5>
          <h5 className=' flex flex-row tracking-[2.3px] lg:tracking-[3px]'>
            <span className='font-bold mr-2 md:hidden lg:flex'>02</span>Crew
          </h5>
          <h5 className='flex flex-row tracking-[2.3px] lg:tracking-[3px]'>
            <span className='font-bold mr-2 md:hidden lg:flex'>03</span>Technology
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
