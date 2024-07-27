'use client';

import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { motion, useAnimate } from 'framer-motion';

import { TextBody, TextHeading, TextSub } from '@/components/ui/text';
import { useRef } from 'react';

const experiences = [
  {
    heading: 'Discovered the world of programming',
    description:
      'Etiam ante lorem, consectetur sit amet magna eu, venenatis aliquet arcu. Vestibulum in lacus a nisl.',
    time: '2020 - 2021'
  },
  {
    heading: 'Freelancing',
    description:
      'venenatis aliquet arcu. Vestibulum in lacus a suscipit condimentum risu.',
    time: '2022-2023'
  },
  {
    heading: 'Studying at Bicol University',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit condimentum risus, vitae fermentum nisi efficitur et.',
    time: '2023 - Present'
  }
];

const Dropdown = ({
  heading,
  description,
  time,
  ...props
}: {
  heading: string;
  description: string;
  time: string;
}) => {
  const [scope, animate] = useAnimate();

  const onMouseEnter = () => {
    animate('#overlay', { x: '0%' }, { ease: 'easeIn', duration: 0.2 });
  };
  const onMouseLeave = () => {
    animate('#overlay', { x: '-100%' }, { ease: 'easeOut', duration: 0.1 });
  };

  return (
    <div
      ref={scope}
      className='group relative flex w-full overflow-hidden border-b px-0 py-md hover:cursor-pointer'
      {...props}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        id='overlay'
        className='absolute inset-0 z-0 translate-x-[-100%] bg-foreground'
      />
      <div
        id='text'
        className='z-10 flex w-full flex-row items-center justify-between duration-200 ease-in group-hover:px-sm group-hover:text-foreground-secondary'
      >
        <div className=''>
          <TextBody className='font-bold'>{heading}</TextBody>
        </div>
        <div className=''>
          <TextSub>{time}</TextSub>
        </div>
      </div>
    </div>
  );
};

const Experience = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn(
        'container !mt-0 flex flex-col items-center space-y-lg !pt-0',
        className
      )}
    >
      <div className=''>
        <TextHeading className='text-center'>Experience</TextHeading>
      </div>
      <div className='w-full max-w-[600px]'>
        {experiences.map((experience, index) => {
          return (
            <Dropdown
              heading={experience.heading}
              description={experience.description}
              time={experience.time}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
