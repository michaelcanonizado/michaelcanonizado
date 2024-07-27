'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { motion, useAnimate } from 'framer-motion';

import { TextBody, TextHeading, TextSub } from '@/components/ui/text';

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

const Add = ({ isOpen }: { isOpen: boolean }) => {
  const bgColor = isOpen ? 'bg-foreground-secondary' : 'bg-foreground';

  return (
    <div className='relative size-[16px]'>
      <div
        className={cn(
          'absolute left-[50%] top-[50%] h-[2px] w-full translate-x-[-50%] translate-y-[-50%] rotate-0 duration-300 group-hover:bg-foreground-secondary',
          bgColor
        )}
      />
      <div
        className={cn(
          'absolute left-[50%] top-[50%] h-[2px] w-full translate-x-[-50%] translate-y-[-50%] rotate-90 duration-300 group-hover:bg-foreground-secondary',
          bgColor
        )}
      />
    </div>
  );
};

const Dropdown = ({
  heading,
  description,
  time,
  index,
  ...props
}: {
  heading: string;
  description: string;
  time: string;
  index: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();

  const onMouseEnter = () => {
    animate('#overlay', { x: '0%' }, { ease: 'easeIn', duration: 0.2 });
  };
  const onMouseLeave = () => {
    if (isOpen) return;

    animate('#overlay', { x: '-100%' }, { ease: 'easeOut', duration: 0.1 });
  };
  const onClick = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      animate('#overlay', { x: '0%' });
    }
  }, [isOpen]);

  const variants = {
    hidden: {
      x: '-100%',
      height: '60px'
    },
    show: {
      x: '0%'
    },
    open: {
      height: 'auto'
    },
    close: {
      height: '60px'
    }
  };

  return (
    <motion.div
      ref={scope}
      variants={variants}
      initial='hidden'
      whileInView={{
        x: '0%'
      }}
      animate={isOpen ? 'open' : 'close'}
      transition={{
        x: {
          delay: 0.1 * index,
          duration: 0.5
        },
        height: {
          duration: 0.2,
          ease: 'easeIn'
        }
      }}
      viewport={{ once: true }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className='group relative box-border flex w-full overflow-hidden border-b px-0 hover:cursor-pointer'
      {...props}
    >
      <div
        id='overlay'
        className='absolute inset-0 z-0 translate-x-[-100%] bg-foreground'
      />
      <div
        id='text'
        className={cn(
          'z-10 flex w-full flex-col pb-md duration-200 ease-in group-hover:px-sm group-hover:text-foreground-secondary',
          isOpen ? 'px-sm text-foreground-secondary' : 'text-foreground'
        )}
      >
        <div className='flex w-full flex-row items-center justify-between py-md'>
          <div className=''>
            <TextBody className='font-bold'>{heading}</TextBody>
          </div>
          <div className='flex flex-row items-center gap-sm'>
            <TextSub className='mb-[-2px]'>{time}</TextSub>
            <Add isOpen={isOpen} />
          </div>
        </div>

        <div className=''>
          <TextSub>{description}</TextSub>
        </div>
      </div>
    </motion.div>
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
      <div className='w-full max-w-[600px] overflow-hidden'>
        {experiences.map((experience, index) => {
          return (
            <Dropdown
              heading={experience.heading}
              description={experience.description}
              time={experience.time}
              key={index}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
