'use client';

import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import React from 'react';

const Introduction = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn(
        'container flex min-h-[80vh] items-center justify-center space-y-md border-y text-brand',
        className
      )}
    >
      <div className='space-y-lg'>
        <div className=''>
          <h1 className='text-heading'>
            Looking for a developer who can create a visually appealing and
            fully functional website?
          </h1>
        </div>
        <div className='max-w-[700px]'>
          <p className='text-body'>
            Your search ends here! With my knowledge in web development,
            you&apos;ll get a website that sets you apart!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
