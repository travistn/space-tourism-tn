import React, { useState } from 'react';

import data from '../data.json';
import Navbar from '../components/Navbar';

const Destination = () => {
  const destinations = data.destinations;
  const [destination, setDestination] = useState(destinations[0]);

  const getDestination = (e) => {
    const findDestination = destinations.find(
      (destination) => e.currentTarget.textContent === destination.name
    );

    setDestination(findDestination);
  };

  return (
    <div className='w-screen min-h-[100vh] bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop bg-no-repeat bg-cover bg-center flex flex-col items-center'>
      <Navbar />
      <div className='flex flex-col lg:flex-row items-center gap-8 mb-8 mt-8 md:mt-12 lg:gap-[10rem] 2xl:gap-[15rem] 2xl:mt-[6rem]'>
        <div className='flex flex-col items-center gap-8'>
          <h5 className='uppercase text-white font-barlow-condensed text-[16px] md:text-[20px] lg:text-[28px] tracking-[2.7px] md-tracking[3.4px] lg:tracking-[4.7px] leading-[19px] md:leading-[24px] lg:leading-[34px]'>
            <span className='font-bold mr-4 opacity-25'>01</span>Pick your destination
          </h5>
          <img
            src={require(`../assets/destination/image-${destination.name.toLowerCase()}.png`)}
            alt='destination-pic'
            className='w-[170px] md:w-[300px] lg:w-[445px] 2xl:w-[500px] h-[170px] md:h-[300px] lg:h-[445px] 2xl:h-[500px] md:mt-4 lg:mt-[4rem]'
          />
        </div>
        <div className='flex flex-col items-center gap-8 lg:gap-12 lg:w-[450px] 2xl:w-[480px] lg:mt-12'>
          <div className='flex flex-row gap-8 text-color-lavendar font-barlow-condensed text-[14px] md:text-[16px] lg:text-[20px] 2xl:text-[24px] tracking-[2.3px] md:tracking-[2.7px] md:leading-[19px] uppercase'>
            {destinations.map((activeDestination) => (
              <p
                onClick={getDestination}
                key={activeDestination.name}
                className={`lg:hover:cursor-pointer lg:hover:text-white 
                ${
                  activeDestination === destination ? 'border-b-[2px] pb-2 md:pb-4 text-white ' : ''
                }`}>
                {activeDestination.name}
              </p>
            ))}
          </div>
          <h3 className='text-white font-bellefair text-[56px] md:text-[80px] lg:text-[100px] 2xl:text-[120px] leading-[64px] md:leading-[92px] lg:leading-[115px] 2xl:leading-[140px] uppercase font-normal'>
            {destination.name}
          </h3>
          <p className='w-[330px] md:w-[573px] lg:w-[444px] 2xl:w-[480px] 2xl:h-[130px] text-color-lavendar text-[15px] md:text-[16px] lg:text-[18px] font-barlow leading-[25px] md:leading-[28px] lg:leading-[32px] 2xl:leading-[36px] text-center mt-[-1.5rem] lg:text-start'>
            {destination.description}
          </p>
          <div className='w-[330px] md:w-[573px] lg:w-[444px] 2xl:w-[480px] h-[1px] bg-[#383B4B]'></div>
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
    </div>
  );
};

export default Destination;
