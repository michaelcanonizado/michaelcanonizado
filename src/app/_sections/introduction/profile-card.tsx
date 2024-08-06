'use client';

import React, { useState } from 'react';

import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { motion, Variants } from 'framer-motion';

import Image from 'next/image';
import Username from '@/../public/introduction/username';
import { TextSub } from '@/components/text';
import Card from '@/components/card';

const Sparkle = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        {...props}
        className={className}
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      >
        <path d='M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z' />
      </svg>
    );
  }
);
Sparkle.displayName = 'Sparkle';

const Sparkles = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        {...props}
        className={className}
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      >
        <path d='M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z' />
        <path d='M20 3v4' />
        <path d='M22 5h-4' />
        <path d='M4 17v2' />
        <path d='M5 18H3' />
      </svg>
    );
  }
);
Sparkles.displayName = 'Sparkles';

const textList = ['Responsive Design', 'Beautiful UI', 'High SEO'];

const ProfileCard = ({ className }: ComponentBaseProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = () => {
    setIsHovered(true);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
  };

  const iconVariants: Variants = {
    initial: {
      stroke: 'currentColor',
      fill: 'currentColor',
      scale: 1.3,
      rotate: '8deg'
    },
    hovered: index => ({
      stroke: 'currentColor',
      fill: 'currentColor',
      scale: 1.3,
      rotate: '8deg',
      transition: {
        delay: 0.2 * index
      }
    }),
    normal: index => ({
      stroke: 'currentColor',
      fill: 'none',
      scale: 1,
      rotate: '0deg',
      transition: {
        delay: 0.2 * (index + 0.2)
      }
    })
  };

  const textVaraints: Variants = {
    initial: {
      paddingLeft: '0px'
    },
    hovered: index => ({
      paddingLeft: '6px',
      transition: {
        delay: 0.2 * index
      }
    }),
    normal: index => ({
      paddingLeft: '0px',

      transition: {
        delay: 0.2 * (index + 0.2)
      }
    })
  };

  return (
    <a
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href='https://www.linkedin.com/in/michaelcanonizado/'
      target='_blank'
    >
      <Card className={cn('space-y-0 bg-background/20', className)}>
        <Card.Image>
          <Image
            fill
            className='object-cover'
            src='/introduction/card-image.png'
            alt='profile picture'
          />
        </Card.Image>
        <Card.Text className=''>
          <div className='py-sm'>
            <Username />
          </div>
          <div className='flex flex-col gap-[2px]'>
            {textList.map((text, index) => {
              const iconClasses = 'size-[18px] text-brand';

              const AnimatedSparkle = motion(Sparkle);
              const AnimatedSparkles = motion(Sparkles);

              return (
                <motion.div
                  initial='initial'
                  animate={isHovered ? 'hovered' : 'normal'}
                  className='flex flex-row items-center gap-xs'
                  key={index}
                >
                  {isHovered ? (
                    <AnimatedSparkles
                      custom={index}
                      animate='hovered'
                      variants={iconVariants}
                      className={iconClasses}
                    />
                  ) : (
                    <AnimatedSparkle
                      custom={index}
                      animate='normal'
                      initial='initial'
                      variants={iconVariants}
                      className={iconClasses}
                    />
                  )}

                  <motion.div custom={index} variants={textVaraints}>
                    <TextSub showAnimation={false} className='mb-[-4px]'>
                      {text}
                    </TextSub>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </Card.Text>
      </Card>
    </a>
  );
};

export default ProfileCard;
