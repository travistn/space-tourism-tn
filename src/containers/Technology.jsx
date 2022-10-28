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
    <div className='flex flex-col w-screen min-h-screen bg-technology-mobile bg-no-repeat bg-cover bg-center'>
      <Navbar />
      <div className='flex flex-col items-center mt-8 gap-8 md:gap-12'>
        <h5 className='flex flex-row gap-4 text-[16px] md:text-[20px] text-white font-barlow-condensed uppercase tracking-[2.7px] md:tracking-[3.4px] leading-[19px] md:leading-[24px] md:mr-auto md:ml-8 md:mt-4'>
          <span className='opacity-25'>03</span> Space Launch 101
        </h5>
        <img
          src={technology.images.landscape}
          alt='technology-pic'
          className='w-screen h-[170px] md:h-[310px]'
        />
        <div className='flex flex-row gap-6'>
          {technologies.map((tech, index) => (
            <div
              id={tech.name}
              key={tech.name}
              onClick={getTechnology}
              className={`w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full font-bellefair text-[16px] md:text-[24px] tracking-[1px] leading-[18px]
              ${
                tech === technology
                  ? 'bg-white text-black'
                  : 'text-white border-solid border-[1px] border-gray-600'
              }`}>
              {index + 1}
            </div>
          ))}
        </div>
        <div className='flex flex-col items-center w-5/6 md:w-3/5 gap-4 md:mb-8'>
          <h5 className='text-[14px] md:text-[16px] font-barlow-condensed tracking-[2.3px] md:tracking-[2.7px] leading-[17px] md:leading-[19px] text-color-lavendar uppercase'>
            The terminology...
          </h5>
          <h4 className='text-[24px] md:text-[40px] leading-[28px] md:leading-[46px] text-white font-bellefair uppercase'>
            {technology.name}
          </h4>
          <p className='text-[15px] md:text-[16px] leading-[25px] md:leading-[28px] text-color-lavendar font-barlow text-center'>
            {technology.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
