import React from 'react';

const Hero = () => {
  return (
    <>
      <div className='hero-height container flex flex-col items-center justify-center overflow-hidden border-b-[1px] text-center'>
        <div className='mb-lg'>
          <div className='size-[72px] rounded-full bg-foreground' />
        </div>
        <div className='mb-[-16px]'>
          <p className='font-bold'>Hello! I&apos;m Michael</p>
        </div>
        <div className='text-display mb-lg flex max-w-[810px] flex-col items-center'>
          <h1 className=''>Creator.</h1>
          <h1 className=''>Storyteller.</h1>
          <h1 className='text-brand'>Web Developer.</h1>
        </div>
        <div className=''>
          <p className='font-bold'>
            Creating a digital experience that bridge aesthetics and
            functionality
          </p>
        </div>
      </div>
      <div className='text-sub container !m-0 grid h-[64px] grid-cols-3 border-b-[1px] bg-background'>
        <div className='flex items-center justify-start'>
          <p className=''>{'// Code & Engage'}</p>
        </div>
        <div className='flex items-center justify-center space-x-md'>
          <p className=''>Link</p>
          <p className=''>Link</p>
          <p className=''>Link</p>
        </div>
        <div className='flex items-center justify-end'>
          <p className=''>michaelxaviercanonizado@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
