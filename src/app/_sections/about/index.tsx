'use client';

import { useRef } from 'react';

import { cn } from '@/lib/utils';
import { useScroll, useTransform, motion } from 'framer-motion';
import { ComponentBaseProps } from '@/types';

import { TextBody, TextDisplay, TextHeading } from '@/components/text';
import ProfileCard from './profile-card';

function getYearDifference(year: number, month: number): number {
  const schoolYearEndingMonth = 5;
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  let dif = currentYear - year;
  if (currentMonth >= schoolYearEndingMonth) {
    dif += 1;
  }
  return dif;
}

function getYearTitle() {
  const dif = getYearDifference(2023, 5);
  switch (dif) {
    case 1:
      return 'Freshman';
    case 2:
      return 'Sophomore';
    case 3:
      return 'Junior';
    case 4:
      return 'Senior';
    default:
      return 'Alumnus / Extra Year';
  }
}

const About = ({ className }: ComponentBaseProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 40%']
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-10, -3]);
  const x = useTransform(scrollYProgress, [0, 1], [-50, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 1], [300, 65, -175]);

  const text = {
    heading: 'Developing scalable user-centric solutions',
    body: [
      `I am a ${getYearTitle()} Computer Science student with ${getYearDifference(2021, 6)} years of experience.`,
      'I love diving deep into system design, scalable software architectures, and UI/UX design, allowing me to create web-apps that are user-friendly, aesthetic, and functional.'
    ]
  };

  return (
    <section
      id='about'
      ref={containerRef}
      className={cn('container mb-lg space-y-lg', className)}
    >
      <div className='flex flex-row justify-center'>
        <TextDisplay className='max-w-[10ch] text-center'>
          {'You can call me Mike!'}
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
            <TextHeading>{text.heading}</TextHeading>
          </div>
          <div className='space-y-md'>
            {text.body.map((body, index) => {
              return <TextBody key={index}>{body}</TextBody>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
