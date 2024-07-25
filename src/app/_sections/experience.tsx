'use client';

import { cn } from '@/lib/utils';
import { TextDisplay } from '@/components/ui/text';
import { ComponentBaseProps } from '@/types';

const Experience = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn(
        'container flex min-h-[100vh] flex-col items-center space-y-xl',
        className
      )}
    >
      <div className=''>
        <TextDisplay className='text-center'>Experience</TextDisplay>
      </div>
    </section>
  );
};

export default Experience;
