'use client';

import React, { useRef } from 'react';

import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { motion, useScroll, useTransform } from 'framer-motion';

import { TextBody, textBodyVariants, TextHeading } from '@/components/text';
import ProfileCard from './profile-card';

const Arrow = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        {...props}
        className={className}
        viewBox='0 0 127 109'
        fill='currentColor'
      >
        <g clip-path='url(#clip0_104_3)'>
          <path d='M105.872 12.6941C105.655 14.3969 105.116 16.0473 105.06 17.7763C104.87 32.9742 97.9617 45.3435 88.3203 56.2759C85.0022 60.0411 80.384 63.1814 75.7082 65.2364C62.4493 71.2779 48.4388 74.0523 33.9231 73.1031C29.7392 72.8378 25.5358 71.7417 21.4459 70.0018C22.7548 69.635 24.1586 69.2007 25.5341 68.9274C29.4991 68.0812 33.5306 67.3286 37.4575 66.228C39.1174 65.7526 40.7295 64.6072 42.1802 63.4357C42.7492 63.0315 43.0045 61.5832 42.7005 60.9545C42.3965 60.3258 41.0964 59.7009 40.5558 59.9442C30.7673 63.2385 20.4267 63.5463 10.267 64.7111C6.70961 65.1269 5.36341 66.6464 6.02009 69.9808C7.72338 78.2027 11.2098 85.7209 16.2515 92.4155C16.3845 92.6026 16.9632 92.6138 17.9309 92.7709C22.0635 86.7378 16.1027 81.963 15.4629 75.238C16.9243 75.8891 18.0631 76.4877 19.1638 76.8319C41.4144 82.8439 62.7009 79.2641 83.0914 69.0006C86.1738 67.5145 89.0753 65.1715 91.5878 62.6826C100.756 53.4942 106.992 42.5882 109.555 29.9275C110.358 25.837 109.967 21.4696 109.708 17.2894C109.669 15.6278 108.539 14.0374 107.893 12.5255C107.219 12.5817 106.546 12.6379 105.872 12.6941Z' />
        </g>
        <defs>
          <clipPath id='clip0_104_3'>
            <rect
              width='121'
              height='47'
              fill='white'
              transform='matrix(-0.815202 0.579177 0.579177 0.815202 99.2091 0.302734)'
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
Arrow.displayName = 'Arrow';

const Introduction = ({ className }: ComponentBaseProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end 70%']
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const y = useTransform(scrollYProgress, [0, 1], [-150, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  const text = {
    heading:
      'Looking for a developer who can create a visually appealing and fully functional website?',
    body: [
      'Your search ends here! With my knowledge in web development, you&apos;ll get a website that sets you apart!'
    ]
  };

  return (
    <section ref={containerRef} className={cn('container my-0', className)}>
      <div className='flex flex-col items-center justify-center gap-lg overflow-hidden rounded-xl bg-muted pb-xl pt-lg lg:mb-0 lg:flex-row lg:gap-xl lg:py-2xl'>
        <motion.div
          style={{
            y,
            rotate: rotate,
            scale
          }}
          className='hidden lg:block'
        >
          <ProfileCard />
        </motion.div>
        <div className='block lg:hidden'>
          <ProfileCard className='' />
        </div>

        <div className='relative max-w-[480px] space-y-md px-md xs:px-lg md:px-0'>
          <div>
            <TextHeading variants={textBodyVariants}>
              {text.heading}
            </TextHeading>
          </div>

          <div>
            {text.body.map((textBody, index) => {
              return <TextBody key={index}>{textBody}</TextBody>;
            })}
          </div>
          <div>
            <Arrow className='h-[100px] text-brand' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
