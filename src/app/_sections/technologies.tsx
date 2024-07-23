import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import React from 'react';

const Technologies = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn(
        'min-h-[80vh] w-full border bg-foreground py-xl',
        className
      )}
      style={{
        marginLeft: 'calc(50%-50vw)',
        marginRight: 'calc(50%-50vw)'
      }}
    >
      <div className='flex flex-row items-center justify-center'>
        <h1 className='text-heading text-background'>Technologies</h1>
      </div>
    </section>
  );
};

export default Technologies;
