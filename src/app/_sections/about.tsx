import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import React from 'react';

const About = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn('container min-h-[80vh] space-y-xl border-b', className)}
    >
      <div className=''>
        <h1 className='text-display text-center'>About</h1>
      </div>
    </section>
  );
};

export default About;
