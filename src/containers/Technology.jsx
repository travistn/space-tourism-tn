import React, { useState } from 'react';

import Navbar from '../components/Navbar';

import data from '../data.json';

const Technology = () => {
  const technologies = data.technology;
  const [technology, setTechnology] = useState(technologies[0]);

  const getTechnology = (e) => {
    const findTechnology = technologies.find((tech) => e.currentTarget.id === tech.name);

    setTechnology(findTechnology);
  };

  return (
    <div className='flex flex-col w-screen min-h-screen bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop bg-no-repeat bg-cover bg-center'>
      <Navbar />
      <h5 className='md:hidden lg:flex flex-row gap-4 lg:text-[28px] 2xl:text-[36px] text-white font-barlow-condensed uppercase lg:tracking-[4.7px] leading-[19px] lg:leading-[34px] ml-[11rem] 2xl:ml-[13rem] mt-[4rem] 2xl:mt-[5rem]'>
        <span className='opacity-25'>03</span> Space Launch 101
      </h5>
      <div className='flex flex-col lg:flex-row items-center mt-8 gap-8 md:gap-12'>
        <h5 className='flex flex-row gap-4 text-[16px] md:text-[20px]  text-white font-barlow-condensed uppercase tracking-[2.7px] md:tracking-[3.4px] leading-[19px] md:leading-[24px] md:mr-auto md:ml-8 md:mt-4 lg:hidden'>
          <span className='opacity-25'>03</span> Space Launch 101
        </h5>
        <img
          src={technology.images.landscape}
          alt='technology-pic'
          className='w-screen h-[170px] md:h-[310px] lg:hidden'
        />
        <img
          src={technology.images.portrait}
          alt='technology-pic'
          className='hidden lg:flex w-[515px] h-[527px] 2xl:w-[600px] 2xl:h-[600px] order-last absolute right-0 top-[15rem]'
        />
        <div className='flex flex-col items-center gap-8 lg:flex-row lg:ml-[10rem] 2xl:ml-[12rem] lg:gap-[5rem] lg:mt-[5rem]'>
          <div className='flex flex-row lg:flex-col gap-6'>
            {technologies.map((tech, index) => (
              <div
                id={tech.name}
                key={tech.name}
                onClick={getTechnology}
                className={`w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] 2xl:w-[90px] 2xl:h-[90px] flex items-center justify-center rounded-full font-bellefair text-[16px] md:text-[24px] lg:text-[32px] tracking-[1px] md:tracking-[1.5px] lg:tracking-[2px] leading-[18px] md:leading-[28px] lg:leading-[37px] lg:hover:cursor-pointer
              ${
                tech === technology
                  ? 'bg-white text-black'
                  : 'text-white border-solid border-[1px] border-gray-600'
              }`}>
                {index + 1}
              </div>
            ))}
          </div>
          <div className='flex flex-col items-center lg:items-start w-5/6 md:w-3/5 lg:w-[500px] 2xl:w-[650px] gap-4 md:mb-8 lg:mb-0'>
            <h5 className='text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] font-barlow-condensed tracking-[2.3px] md:tracking-[2.7px] lg:tracking-[3.2px] leading-[17px] md:leading-[19px] lg:leading-[21px] 2xl:leading-[23px] text-color-lavendar uppercase'>
              The terminology...
            </h5>
            <h4 className='text-[24px] md:text-[40px] lg:text-[56px] 2xl:text-[72px] leading-[28px] md:leading-[46px] lg:leading-[64px] 2xl:leading-[82px] text-white font-bellefair uppercase'>
              {technology.name}
            </h4>
            <p className='text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] leading-[25px] md:leading-[28px] lg:leading-[32px] 2xl:leading-[36px] text-color-lavendar font-barlow text-center lg:text-start'>
              {technology.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
