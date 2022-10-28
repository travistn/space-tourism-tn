import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import data from '../data.json';

const Crew = () => {
  const crew = data.crew;
  const [crewMember, setCrewMember] = useState(crew[0]);

  const getCrewMember = (e) => {
    const findCrewMember = crew.find((crewMember) => e.currentTarget.id === crewMember.name);

    setCrewMember(findCrewMember);
  };

  return (
    <div className='w-screen min-h-screen bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-no-repeat bg-cover bg-center flex flex-col'>
      <Navbar />
      <div className='flex flex-col lg:flex-row items-center mt-8 gap-8 lg:justify-center'>
        <h5 className='text-[16px] md:text-[20px] lg:text-[28px] text-white font-barlow-condensed uppercase tracking-[2.7px] md:tracking-[3.4px] lg:tracking-[4.7px] leading-[19px] md:leading-[24px] lg:leading-[34px] flex flex-row gap-3 md:mr-auto lg:mr-0 md:ml-8 lg:ml-0 md:mb-8 md:mt-8 lg:hidden'>
          <span className='font-bold opacity-25'>02</span> Meet your crew
        </h5>
        <div className='md:order-last'>
          <img
            src={crewMember.images.png}
            alt='crew-pic'
            className='h-[222px] md:h-[572px] lg:h-[650px] 2xl:h-[700px] md:order-last lg:fixed lg:bottom-0 lg:right-[6rem] 2xl:right-[10rem]'
          />
        </div>
        <div className='h-[1px] w-[87%] bg-white opacity-20 mt-[-2rem] md:hidden' />
        <div className='flex flex-col w-[87%] md:w-[460px] items-center gap-4 lg:w-[700px] 2xl:w-[800px] lg:h-[550px] 2xl:h-[650px] lg:items-start lg:mr-[16rem] lg:mt-[4rem] 2xl:mt-[6rem]'>
          <div className='flex flex-row gap-4 mb-6 md:order-last md:mt-8 lg:mt-auto 2xl:mb-[5rem]'>
            {crew.map((crew) => (
              <div
                id={crew.name}
                key={crew.name}
                onClick={getCrewMember}
                className={`w-[12px] h-[12px] md:w-[14px] md:h-[14px] bg-white rounded-full lg:hover:cursor-pointer
                  ${crew === crewMember ? '' : 'opacity-[0.17]'}
                `}
              />
            ))}
          </div>
          <h5 className='md:hidden lg:flex flex-row gap-3 text-[28px] 2xl:text-[32px] text-white font-barlow-condensed uppercase tracking-[4.7px] lg:leading-[34px]'>
            <span className='font-bold opacity-25'>02</span> Meet your crew
          </h5>
          <div className='flex flex-col items-center gap-2 font-bellefair uppercase text-white font-normal lg:items-start lg:mt-[7rem]'>
            <h4 className='opacity-50 text-[16px] md:text-[24px] lg:text-[32px] 2xl:text-[38px] leading-[18px] md:leading-[28px] lg:leading-[37px] 2xl:leading-[46px]'>
              {crewMember.role}
            </h4>
            <h4 className='text-[24px] md:text-[40px] lg:text-[56px] 2xl:text-[72px] leading-[28px] md:leading-[46px] lg:leading-[64px] 2xl:leading-[82px]'>
              {crewMember.name}
            </h4>
          </div>
          <p className='w-content lg:w-[444px] 2xl:w-[500px] md:h-[90px] font-barlow text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] md:leading-[28px] lg:leading-[32px] 2xl:leading-[36px] text-center text-color-lavendar lg:text-start'>
            {crewMember.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Crew;
