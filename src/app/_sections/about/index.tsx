'use client';

import { useRef } from 'react';

import { cn } from '@/lib/utils';
import { useScroll, useTransform, motion } from 'framer-motion';
import { ComponentBaseProps } from '@/types';

import { TextBody, TextDisplay, TextHeading } from '@/components/text';
import ProfileCard from './profile-card';

const About = ({ className }: ComponentBaseProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 40%']
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-10, -3]);
  const x = useTransform(scrollYProgress, [0, 1], [-50, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 1], [300, 0, -175]);

  return (
    <section
      id='about'
      ref={containerRef}
      className={cn('container mb-lg space-y-lg !pt-0', className)}
    >
      <div className='flex flex-row justify-center'>
        <TextDisplay className='max-w-[10ch] text-center'>
          {'You can call me Mikey!'}
        </TextDisplay>
      </div>
      <div className='flex flex-col items-center justify-center gap-lg lg:flex-row lg:gap-xl'>
        <motion.div
          style={{
            rotate,
            x,
            y,
            scale: 1.1
          }}
          className='hidden lg:block'
        >
          <ProfileCard />
        </motion.div>
        <div className='!ml-0 block lg:hidden'>
          <ProfileCard className='' />
        </div>

        <div className='ml-0 space-y-md px-md xs:px-lg sm:ml-xl sm:max-w-[550px] sm:pl-lg lg:ml-0 lg:max-w-[500px] lg:space-y-lg'>
          <div className=''>
            <TextHeading>
              I am a self-taught web developer based in the Philippines!
            </TextHeading>
          </div>
          <div className='space-y-md'>
            <TextBody>
              I am a sophomore Computer Science student with 4 years of
              experience in web development.
            </TextBody>
            <TextBody>
              I love building websites that are user-friendly, aesthetic, and
              functional.
            </TextBody>
            <TextBody>
              {
                "I'm here to transform your ideas into a website that elevates your business. My strong work ethic and discipline set me apart as a developer you can rely on!"
              }
            </TextBody>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
