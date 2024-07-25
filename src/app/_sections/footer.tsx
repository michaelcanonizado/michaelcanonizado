'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import {
  AnimationDefinition,
  AnimationPlaybackControls,
  motion,
  useAnimate,
  ValueAnimationTransition
} from 'framer-motion';
import { TextBody, TextHeading } from '@/components/ui/text';
import { ComponentBaseProps } from '@/types';
import { NameFirst } from '../../../public/name/name-first';

const InfiniteEmailSlider = () => {
  const [scope, animate] = useAnimate();
  const [controls, setControls] = useState<AnimationPlaybackControls | null>(
    null
  );

  const animations: AnimationDefinition = {
    x: '-100%'
  };
  const transitions: ValueAnimationTransition = {
    duration: 10,
    type: 'tween',
    repeat: Infinity,
    ease: 'linear'
  };

  useEffect(() => {
    const animationControls = animate('#slide', animations, transitions);
    setControls(animationControls);
  }, []);

  const onMouseEnter = () => {
    if (controls) {
      controls.pause();
    }
  };

  const onMouseLeave = () => {
    if (controls) {
      controls.play();
    }
  };

  const Slide = (
    <motion.div id='slide' className={cn('flex w-fit flex-row flex-nowrap')}>
      <span className='mx-lg font-display text-[100px] font-bold group-hover:text-foreground-secondary'>
        michaelxaviercanonizado@gmail.com
      </span>
    </motion.div>
  );

  return (
    <div
      className='group flex flex-row flex-nowrap overflow-hidden border-y py-sm hover:cursor-pointer hover:bg-foreground'
      ref={scope}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {Slide}
      {Slide}
      {Slide}
      {Slide}
    </div>
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
