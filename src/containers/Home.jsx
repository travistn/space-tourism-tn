import React from 'react';

const Home = () => {
  return (
    <div className='w-screen h-screen bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-no-repeat bg-cover bg-center'>
      <div className='flex flex-col'>
        <div className='flex flex-col items-center m-auto mt-[8rem] w-[330px]'>
          <h5 className='uppercase text-color-lavendar font-barlow-condensed tracking-[2.7px]'>
            So, you want to travel to
          </h5>
          <h2 className='uppercase text-white text-[80px] font-bellefair mt-4'>Space</h2>
          <p className='text-color-lavendar text-[15px] text-center font-barlow mt-2'>
            Let's face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we'll give you
            a truly out of this world experience!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
