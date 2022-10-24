import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/shared/logo.svg';
import menuIcon from '../assets/shared/icon-hamburger.svg';
import closeIcon from '../assets/shared/icon-close.svg';

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuToggle(false);
  }, [location]);

  return (
    <>
      <div className='w-screen flex flex-row items-center mt-8 pl-8 pr-8 md:pr-0 md:pl-12 md:h-24 md:mt-0 lg:mt-8'>
        <img src={logo} alt='logo' className='w-10 h-10 md:w-12 md:h-12' />
        <img
          src={menuIcon}
          alt='menu-icon'
          className='w-6 h-[21px] ml-auto md:invisible'
          onClick={() => setMenuToggle(!menuToggle)}
        />
        <div className='hidden md:flex justify-center min-w-[550px] lg:min-w-[830px] 2xl:min-w-[1200px] h-24 items-center bg-navbar-links backdrop-blur-2xl'>
          <div className='flex flex-row justify-center text-white uppercase font-barlow-condensed gap-16 max-w-[356px] text-sm lg:text-base 2xl:text-xl'>
            <div className='flex flex-row tracking-[2.3px] lg:tracking-[3px]'>
              <span className='font-bold mr-2 md:hidden lg:flex'>00</span>
              <Link to='/'>Home</Link>
            </div>
            <div className=' flex flex-row tracking-[2.3px] lg:tracking-[3px]'>
              <span className='font-bold mr-2 md:hidden lg:flex'>01</span>
              <Link to='/destination'>Destination</Link>
            </div>
            <div className=' flex flex-row tracking-[2.3px] lg:tracking-[3px]'>
              <span className='font-bold mr-2 md:hidden lg:flex'>02</span>
              <Link to='/crew'>Crew</Link>
            </div>
            <div className='flex flex-row tracking-[2.3px] lg:tracking-[3px]'>
              <span className='font-bold mr-2 md:hidden lg:flex'>03</span>
              <Link to='/technology'>Technology</Link>
            </div>
          </div>
        </div>
      </div>
      {menuToggle && (
        <div className='absolute w-[70%] h-screen bg-navbar-links backdrop-blur-2xl right-0 md:hidden'>
          <img
            src={closeIcon}
            alt='close-icon'
            className='ml-auto mr-8 mt-8'
            onClick={() => setMenuToggle(false)}
          />
          <div className=' flex flex-col gap-6 p-10 mt-14 text-white font-barlow-condensed text-[16px] tracking-[2.7px] uppercase'>
            <div className='flex gap-2'>
              <span className=''>00</span>
              <Link to='/'>Home</Link>
            </div>
            <div className='flex gap-2'>
              <span className=''>01</span>
              <Link to='/destination'>Destination</Link>
            </div>
            <div className='flex gap-2'>
              <span className=''>02</span>
              <Link to='/crew'>Crew</Link>
            </div>
            <div className='flex gap-2'>
              <span className=''>03</span>
              <Link to='/technology'>Technology</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
