import React from 'react';

import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className='w-screen h-screen bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-no-repeat bg-cover bg-center flex flex-col'>
      <Navbar />
      <div className='h-screen flex flex-col lg:flex-row lg:items-center lg:mr-[10rem] lg:mt-[5rem] 2xl:mr-[20rem]'>
        <div className='flex flex-col items-center lg:items-start m-auto w-[330px] md:w-[450px] mt-12 md:mt-[8rem] 2xl:gap-4 '>
          <h5 className='uppercase text-color-lavendar font-barlow-condensed md:text-[20px] lg:text-[28px] 2xl:text-[32px] tracking-[2.7px] md:tracking-[3.4px] lg:tracking-[4.7px] leading-5 md:leading-6 lg:leading-[34px]'>
            So, you want to travel to
          </h5>
          <h2 className='uppercase text-white text-[80px] md:text-[150px] 2xl:text-[180px] font-bellefair mt-4 leading-[100px] md:leading-[150px] lg:leading-[172px]'>
            Space
          </h2>
          <p className='text-color-lavendar text-[15px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] text-center lg:text-start font-barlow mt-2 leading-[25px] md:leading-[28px] lg:leading-[32px]'>
            Let's face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we'll give you
            a truly out of this world experience!
          </p>
        </div>
        <div className='flex justify-center mt-auto lg:mt-0 2xl:mt-0 mb-12'>
          <div className='flex justify-center items-center w-[150px] md:w-[242px] lg:w-[274px] 2xl:w-[300px] h-[150px] md:h-[242px] lg:h-[274px] 2xl:h-[300px] bg-white rounded-full'>
            <p className='uppercase font-bellefair text-xl md:text-[32px] 2xl:text-[40px] tracking-wider md:tracking-[2px] md:leading-[37px]'>
              Explore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
