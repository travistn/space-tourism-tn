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
      <div className='flex flex-col items-center mt-8 mb-4 gap-8'>
        <h5 className='text-[16px] text-white font-barlow-condensed uppercase tracking-[2.7px] leading-[19px] flex flex-row gap-3'>
          <span className='font-bold opacity-25'>02</span> Meet your crew
        </h5>
        <img
          src={require(`../assets/crew/image-${crewMember.name
            .split(' ')
            .join('-')
            .toLowerCase()}.png`)}
          alt='crew-pic'
          className='h-[222px]'
        />
        <div className='h-[1px] w-[87%] bg-white opacity-20 mt-[-2rem]' />
        <div className='flex flex-col w-[87%] items-center gap-4'>
          <div className='flex flex-row gap-4 mb-6'>
            {crew.map((crew) => (
              <div
                id={crew.name}
                key={crew.name}
                onClick={getCrewMember}
                className={`w-[10px] h-[10px] bg-white rounded-full
                  ${crew === crewMember ? '' : 'opacity-[0.17]'}
                `}
              />
            ))}
          </div>
          <div className='flex flex-col items-center gap-2 font-bellefair uppercase text-white font-normal'>
            <h4 className='opacity-50 text-[16px] leading-[18px]'>{crewMember.role}</h4>
            <h4 className='text-[24px] leading-[28px]'>{crewMember.name}</h4>
          </div>
          <p className='w-content font-barlow text-[15px] text-center text-color-lavendar'>
            {crewMember.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Crew;
