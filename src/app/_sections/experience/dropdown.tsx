'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { motion, useAnimate } from 'framer-motion';
import { TextBody, TextHeading } from '@/components/text';

const OpenStateIcon = ({ isOpen }: { isOpen: boolean }) => {
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
    <div id='open-state-icon' className='relative size-[16px]'>
      <motion.div
        id='open-state-icon-h'
        variants={variants}
        initial='initial'
        animate={isOpen ? 'open' : 'close'}
        transition={{
          rotate: {
            duration: 0.1
          }
        }}
        className='absolute h-[2px] w-full bg-brand duration-300'
      />
      <div
        id='open-state-icon-v'
        className='absolute left-[50%] top-[50%] h-[2px] w-full translate-x-[-50%] translate-y-[-50%] rotate-90 bg-brand duration-300'
      />
    </div>
  );
};

const Dropdown = ({
  heading,
  description,
  time,
  index,
  className,
  ...props
}: ComponentBaseProps & {
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
      '#open-state-icon',
      { rotate: '90deg' },
      { ease: 'linear', duration: 0.2 }
    );
  };
  const onMouseLeave = () => {
    if (isOpen) return;

    animate('#overlay', { x: '-100%' }, { ease: 'easeOut', duration: 0.1 });

    animate(
      '#open-state-icon',
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
      className={cn(
        'group relative box-border flex w-full overflow-hidden border-b px-0',
        className
      )}
      {...props}
    >
      <div
        id='overlay'
        className='absolute inset-0 z-0 translate-x-[-100%] bg-muted'
      />
      <div
        id='text'
        className={cn(
          'z-10 flex w-full flex-col pb-md text-foreground duration-300 ease-in group-hover:px-md group-hover:text-foreground',
          isOpen ? 'px-md' : ''
        )}
      >
        <div className='flex w-full flex-row items-center justify-between py-lg'>
          <div>
            <TextHeading showAnimation={false}>{heading}</TextHeading>
          </div>
          <div className='flex flex-row items-center gap-sm md:gap-md'>
            <TextBody showAnimation={false} className='mb-[-2px]'>
              {time}
            </TextBody>
            <OpenStateIcon isOpen={isOpen} />
          </div>
        </div>

        <div>
          <TextBody showAnimation={false}>{description}</TextBody>
        </div>
      </div>
    </motion.div>
  );
};

export default Dropdown;
