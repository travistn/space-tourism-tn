import React, { useState } from 'react';

import data from '../data.json';
import Navbar from '../components/Navbar';

const Destination = () => {
  const destinations = data.destinations;
  const [destination, setDestination] = useState(destinations[0]);

  const activeDestination = (e) => {
    const findDestination = destinations.find(
      (destination) => e.currentTarget.textContent === destination.name
    );

    setDestination(findDestination);
  };

  return (
    <div className='w-screen h-screen bg-destination-mobile bg-no-repeat bg-cover bg-center flex flex-col items-center overflow-auto'>
      <Navbar />
      <div className='flex flex-col m-auto items-center gap-8 mb-[2rem] mt-8'>
        <h5 className='uppercase text-white font-barlow-condensed text-[16px] tracking-[2.7px] leading-[19px]'>
          <span className='font-bold mr-4 opacity-25'>01</span>Pick your destination
        </h5>
        <img
          src={require(`../assets/destination/image-${destination.name.toLowerCase()}.png`)}
          alt='destination-pic'
          className='w-[170px] h-[170px]'
        />
        <div className='flex flex-row gap-8 text-color-lavendar font-barlow-condensed text-[14px] tracking-[2.3px] uppercase'>
          {destinations.map((destination) => (
            <p onClick={activeDestination} key={destination.name}>
              {destination.name}
            </p>
          ))}
        </div>
        <h3 className='text-white font-bellefair text-[56px] leading-[64px] uppercase font-normal'>
          {destination.name}
        </h3>
        <p className='w-[330px] text-color-lavendar text-[15px] font-barlow leading-[25px] text-center mt-[-1.5rem]'>
          {destination.description}
        </p>
        <div className='w-[330px] h-[1px] bg-[#383B4B]'></div>
        <h5 className='text-[15px] uppercase text-color-lavendar font-barlow-condensed leading-[17px] tracking-[2.3px]'>
          Avg. Distance
        </h5>
        <h4 className='text-[28px] text-white font-bellefair uppercase leading-[32px] mt-[-1rem]'>
          {destination.distance}
        </h4>
        <h5 className='text-[15px] uppercase text-color-lavendar font-barlow-condensed leading-[17px] tracking-[2.3px]'>
          Est. Travel Time
        </h5>
        <h4 className='text-[28px] text-white font-bellefair uppercase leading-[32px] mt-[-1rem]'>
          {destination.travel}
        </h4>
      </div>
    </div>
  );
};

export default Destination;
