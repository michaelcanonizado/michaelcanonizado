import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import React from 'react';

const Picture = () => {
  return (
    <div className='overflow-hidden rounded-xl'>
      <div className='h-[600px] w-[500px] bg-foreground' />
    </div>
  );
};

const About = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn(
        'container flex min-h-[80vh] flex-col items-center space-y-xl border-b',
        className
      )}
    >
      <div className=''>
        <h1 className='text-display text-center'>About</h1>
      </div>

      <div className='grid grid-cols-2 gap-xl'>
        <Picture />
        <div className='max-w-[450px] space-y-md'>
          <div className='mb-lg'>
            <h1 className='text-heading'>Who am I?</h1>
          </div>
          <p className='text-body'>
            Hi there, I'm Michael {'(you can call me Mikey!)'}. I am a
            self-taught web developer based in the Philippines.
          </p>
          <p className='text-body'>
            I love building websites that are user-friendly, aesthetic, and
            functional. I am a 2nd year Computer Science student with 4 years of
            experience in web development.
          </p>
          <p className='text-body'>
            I'm here to transform your ideas into a website that elevates your
            business. My strong work ethic and discipline set me apart as a
            developer you can rely on.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
