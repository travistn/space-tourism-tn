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
      <div className='flex flex-col items-center mt-8 gap-8'>
        <h5 className='flex flex-row gap-4 text-[16px] text-white font-barlow-condensed uppercase tracking-[2.7px] leading-[19px]'>
          <span className='opacity-25'>03</span> Space Launch 101
        </h5>
        <img
          src={technology.images.landscape}
          alt='technology-pic'
          className='h-[170px] w-screen'
        />
        <div className='flex flex-row gap-6'>
          {technologies.map((tech, index) => (
            <div
              id={tech.name}
              key={tech.name}
              onClick={getTechnology}
              className={`w-[40px] h-[40px] flex items-center justify-center rounded-full font-bellefair font-[16px] tracking-[1px] leading-[18px]
              ${
                tech === technology
                  ? 'bg-white text-black'
                  : 'text-white border-solid border-[1px] border-gray-600'
              }`}>
              {index + 1}
            </div>
          ))}
        </div>
        <div className='flex flex-col items-center w-5/6 gap-4'>
          <h5 className='text-[14px] font-barlow-condensed leading-[17px] text-color-lavendar uppercase'>
            The terminology...
          </h5>
          <h4 className='text-[24px] leading-[28px] text-white font-bellefair uppercase'>
            {technology.name}
          </h4>
          <p className='text-[15px] leading-[25px] text-color-lavendar font-barlow text-center'>
            {technology.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
