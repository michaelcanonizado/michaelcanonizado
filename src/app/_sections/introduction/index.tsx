'use client';

import { useRef } from 'react';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ComponentBaseProps } from '@/types';
import { motion, useScroll, useTransform } from 'framer-motion';

import {
  TextBody,
  textBodyVariants,
  TextHeading,
  TextSub
} from '@/components/text';
import Card from '@/components/card';
import ProfileCard from './profile-card';

const Introduction = ({ className }: ComponentBaseProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end 70%']
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const y = useTransform(scrollYProgress, [0, 1], [-150, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

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

        <div className='max-w-[480px] space-y-md px-md xs:px-lg md:px-0'>
          <div>
            <TextHeading variants={textBodyVariants}>
              Looking for a developer who can create a visually appealing and
              fully functional website?
            </TextHeading>
          </div>

          <div>
            <TextBody>
              Your search ends here! With my knowledge in web development,
              you&apos;ll get a website that sets you apart!
            </TextBody>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
