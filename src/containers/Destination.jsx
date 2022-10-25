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
    <div className='w-screen min-h-[100vh] bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop bg-no-repeat bg-cover bg-center flex flex-col items-center'>
      <Navbar />
      <div className='flex flex-col m-auto items-center gap-8 mb-8 mt-8 md:mt-12'>
        <h5 className='uppercase text-white font-barlow-condensed text-[16px] md:text-[20px] tracking-[2.7px] md-tracking[3.4px] leading-[19px] md:leading-[24px]'>
          <span className='font-bold mr-4 opacity-25'>01</span>Pick your destination
        </h5>
        <img
          src={require(`../assets/destination/image-${destination.name.toLowerCase()}.png`)}
          alt='destination-pic'
          className='w-[170px] md:w-[300px] h-[170px] md:h-[300px] md:mt-4'
        />
        <div className='flex flex-row gap-8 text-color-lavendar font-barlow-condensed text-[14px] md:text-[16px] tracking-[2.3px] md:tracking-[2.7px] md:leading-[19px]  uppercase'>
          {destinations.map((destination) => (
            <p onClick={activeDestination} key={destination.name}>
              {destination.name}
            </p>
          ))}
        </div>
        <h3 className='text-white font-bellefair text-[56px] md:text-[80px] leading-[64px] md:leading-[92px] uppercase font-normal'>
          {destination.name}
        </h3>
        <p className='w-[330px] md:w-[573px] text-color-lavendar text-[15px] md:text-[16px] font-barlow leading-[25px] md:leading-[28px] text-center mt-[-1.5rem]'>
          {destination.description}
        </p>
        <div className='w-[330px] md:w-[573px] h-[1px] bg-[#383B4B]'></div>
        <div className='flex flex-col md:flex-row gap-8 md:gap-16'>
          <div className='flex flex-col gap-4 items-center'>
            <h5 className='text-[15px] uppercase text-color-lavendar font-barlow-condensed leading-[17px] tracking-[2.3px]'>
              Avg. Distance
            </h5>
            <h4 className='text-[28px] text-white font-bellefair uppercase leading-[32px] '>
              {destination.distance}
            </h4>
          </div>
          <div className='flex flex-col gap-4 items-center'>
            <h5 className='text-[15px] uppercase text-color-lavendar font-barlow-condensed leading-[17px] tracking-[2.3px]'>
              Est. Travel Time
            </h5>
            <h4 className='text-[28px] text-white font-bellefair uppercase leading-[32px]'>
              {destination.travel}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
