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
    <div className='w-screen min-h-screen bg-crew-mobile bg-no-repeat bg-cover bg-center flex flex-col'>
      <Navbar />
      <div className='flex flex-col items-center mt-8 gap-8'>
        <h5 className='text-[16px] md:text-[20px] text-white font-barlow-condensed uppercase tracking-[2.7px] md:tracking-[3.4px] leading-[19px] md:leading-[24px] flex flex-row gap-3 md:mr-auto md:ml-8 md:mb-8 md:mt-8'>
          <span className='font-bold opacity-25'>02</span> Meet your crew
        </h5>
        <img
          src={require(`../assets/crew/image-${crewMember.name
            .split(' ')
            .join('-')
            .toLowerCase()}.png`)}
          alt='crew-pic'
          className='h-[222px] md:h-[572px] md:order-last'
        />
        <div className='h-[1px] w-[87%] bg-white opacity-20 mt-[-2rem] md:hidden' />
        <div className='flex flex-col w-[87%] md:w-[460px] items-center gap-4'>
          <div className='flex flex-row gap-4 mb-6 md:order-last md:mt-4'>
            {crew.map((crew) => (
              <div
                id={crew.name}
                key={crew.name}
                onClick={getCrewMember}
                className={`w-[12px] h-[12px] bg-white rounded-full
                  ${crew === crewMember ? '' : 'opacity-[0.17]'}
                `}
              />
            ))}
          </div>
          <div className='flex flex-col items-center gap-2 font-bellefair uppercase text-white font-normal'>
            <h4 className='opacity-50 text-[16px] md:text-[24px] leading-[18px] md:leading-[28px]'>
              {crewMember.role}
            </h4>
            <h4 className='text-[24px] md:text-[40px] leading-[28px] md:leading-[46px]'>
              {crewMember.name}
            </h4>
          </div>
          <p className='w-content md:h-[90px] font-barlow text-[15px] md:text-[16px] text-center text-color-lavendar'>
            {crewMember.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Crew;
