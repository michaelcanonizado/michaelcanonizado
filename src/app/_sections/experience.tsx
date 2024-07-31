'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { motion, useAnimate } from 'framer-motion';

import {
  TextBody,
  TextDisplay,
  TextHeading,
  TextSub
} from '@/components/ui/text';

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

  const variants = {
    initial: {
      left: '50%',
      top: '50%',
      x: '-50%',
      y: '-50%'
    },
    close: {
      rotate: '0deg'
    },
    open: {
      rotate: '90deg'
    }
  };

  return (
    <div id='add-icon' className='relative size-[16px]'>
      <motion.div
        id='add-icon-h'
        variants={variants}
        initial='initial'
        animate={isOpen ? 'open' : 'close'}
        transition={{
          rotate: {
            duration: 0.1
          }
        }}
        className={cn(
          'absolute h-[2px] w-full duration-300 group-hover:bg-foreground-secondary',
          bgColor
        )}
      />
      <div
        id='add-icon-v'
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

    animate(
      '#add-icon',
      { rotate: '90deg' },
      { ease: 'linear', duration: 0.2 }
    );
  };
  const onMouseLeave = () => {
    if (isOpen) return;

    animate('#overlay', { x: '-100%' }, { ease: 'easeOut', duration: 0.1 });

    animate(
      '#add-icon',
      { rotate: '-90deg' },
      { ease: 'linear', duration: 0.2 }
    );
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
      height: '100px'
    },
    show: {
      x: '0%'
    },
    open: {
      height: 'auto'
    },
    close: {
      height: '100px'
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
      className='group relative box-border flex w-full overflow-hidden border-b px-0'
      {...props}
    >
      <div
        id='overlay'
        className='absolute inset-0 z-0 translate-x-[-100%] bg-foreground'
      />
      <div
        id='text'
        className={cn(
          'z-10 flex w-full flex-col pb-md duration-300 ease-in group-hover:px-md group-hover:text-foreground-secondary',
          isOpen ? 'px-md text-foreground-secondary' : 'text-foreground'
        )}
      >
        <div className='flex w-full flex-row items-center justify-between py-lg'>
          <div className=''>
            <TextHeading
              className={cn(
                'group-hover:text-foreground-secondary',
                isOpen ? 'text-foreground-secondary' : 'text-foreground'
              )}
            >
              {heading}
            </TextHeading>
          </div>
          <div className='flex flex-row items-center gap-sm md:gap-md'>
            <TextBody className='mb-[-2px]'>{time}</TextBody>
            <Add isOpen={isOpen} />
          </div>
        </div>

        <div className=''>
          <TextBody>{description}</TextBody>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn(
        'container flex flex-col items-center space-y-lg',
        className
      )}
    >
      <div className=''>
        <TextDisplay className='text-center'>Experience</TextDisplay>
      </div>
      <div className='w-full overflow-hidden'>
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
