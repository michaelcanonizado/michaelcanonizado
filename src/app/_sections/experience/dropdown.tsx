'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { motion, useAnimate } from 'framer-motion';
import { TextBody, TextHeading, TextSub } from '@/components/text';

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
      animate('#overlay', { x: '0%' }, { damping: 100 });
    } else {
      animate('#overlay', { x: '-100%' }, { ease: 'easeOut', duration: 0.1 });
      animate(
        '#open-state-icon',
        { rotate: '-90deg' },
        { ease: 'linear', duration: 0.2 }
      );
    }
  }, [isOpen]);

  const variants = {
    open: {
      height: 'auto'
    },
    close: {
      height: '0px'
    }
  };

  return (
    <motion.div
      ref={scope}
      initial={{
        x: '-100%'
      }}
      whileInView={{
        x: '0%'
      }}
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
        'group relative flex w-full overflow-hidden !border-x-0 border-b px-0',
        className
      )}
      {...props}
    >
      <div
        id='overlay'
        className='absolute inset-0 z-0 translate-x-[-100%] bg-muted'
      />
      <div
        className={cn(
          'z-10 flex w-full flex-col text-foreground duration-300 ease-in group-hover:text-foreground'
        )}
      >
        <div
          className={cn(
            'flex w-full flex-row items-center justify-between gap-sm py-lg duration-300 ease-in md:gap-md',
            isOpen
              ? 'px-md md:px-lg'
              : 'px-0 group-hover:px-md md:group-hover:px-lg'
          )}
        >
          <div className='flex grow flex-col items-start justify-between gap-sm xs:flex-row xs:items-center xs:gap-0'>
            <TextHeading showAnimation={false}>{heading}</TextHeading>

            <TextSub showAnimation={false} className='mb-[-2px]'>
              {time}
            </TextSub>
          </div>

          <OpenStateIcon isOpen={isOpen} />
        </div>

        <motion.div
          variants={variants}
          animate={isOpen ? 'open' : 'close'}
          className={cn('mb-lg px-md md:px-lg')}
          style={{
            margin: isOpen ? '' : '0px'
          }}
        >
          <TextBody showAnimation={false}>{description}</TextBody>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dropdown;
