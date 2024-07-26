'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import {
  AnimationDefinition,
  AnimationPlaybackControls,
  motion,
  useAnimate,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap
} from 'framer-motion';
import { TextBody, TextHeading } from '@/components/ui/text';
import { ComponentBaseProps } from '@/types';
import { NameFirst } from '../../../public/name/name-first';

const InfiniteEmailSlider = () => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 5000], [0, 10], {
    clamp: false
  });
  const baseVelocity = 3;

  const x = useTransform(baseX, v => `${wrap(-20, -45, v)}%`);
  const directionFactor = { current: 1 };
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  const Content = (
    <span className='mx-lg font-display text-[100px] font-bold group-hover:text-foreground-secondary'>
      michaelxaviercanonizado@gmail.com
    </span>
  );

  return (
    <>
      <div className='group flex flex-row flex-nowrap overflow-hidden border-y py-sm hover:cursor-pointer hover:bg-foreground'>
        <motion.div
          id='slide'
          className={cn('flex w-fit flex-row flex-nowrap')}
          style={{ x }}
        >
          {Content}
          {Content}
          {Content}
          {Content}
        </motion.div>
      </div>
    </>
  );
};

const Footer = ({ className }: ComponentBaseProps) => {
  return (
    <section className={cn('w-full space-y-md', className)}>
      <InfiniteEmailSlider />
      <div className='flex flex-col justify-end bg-foreground !py-0'>
        <div className='flex grow flex-row justify-between px-xl py-xl'>
          <div className='max-w-[500px]'>
            <TextHeading className='text-background'>
              Creating a digital experience that bridge aesthetics and
              functionality
            </TextHeading>
          </div>
          <div className='flex flex-row gap-xl border'>
            <div className='space-y-md'>
              <div className=''>
                <TextHeading className='text-background'>Site Map</TextHeading>
              </div>
              <div className='text-background'>
                <TextBody>About</TextBody>
                <TextBody>Projects</TextBody>
                <TextBody>Experience</TextBody>
              </div>
            </div>
            <div className='space-y-md'>
              <div className=''>
                <TextHeading className='text-background'>Follow Me</TextHeading>
              </div>
              <div className='text-background'>
                <TextBody>LinkedIn</TextBody>
                <TextBody>Github</TextBody>
                <TextBody>Discord</TextBody>
              </div>
            </div>
          </div>
        </div>
        <div className='px-md pb-md'>
          <NameFirst variant='white' />
        </div>
      </div>
    </section>
  );
};

export default Footer;
