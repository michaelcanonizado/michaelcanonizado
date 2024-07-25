'use client';

import { cn } from '@/lib/utils';
import {
  AnimationDefinition,
  AnimationPlaybackControls,
  motion,
  Transition,
  useAnimate,
  ValueAnimationTransition
} from 'framer-motion';
import { TextDisplay } from '@/components/ui/text';
import { ComponentBaseProps } from '@/types';
import { useEffect, useState } from 'react';

const Experience = ({ className }: ComponentBaseProps) => {
  const [scope, animate] = useAnimate();
  const [controls, setControls] = useState<AnimationPlaybackControls | null>(
    null
  );

  const animations = {
    x: '-100%'
  };
  const transitions: ValueAnimationTransition = {
    duration: 10,
    type: 'tween',
    repeat: Infinity,
    ease: 'linear'
  };

  useEffect(() => {
    const animationControls = animate('#target', animations, transitions);
    setControls(animationControls);
  }, []);

  const onMouseEnter = () => {
    if (controls) {
      controls.pause();
    }
  };
  const onMouseLeave = () => {
    console.log('mouse leave!!');
    if (controls) {
      controls.play();
    }
  };

  return (
    <section
      className={cn(
        'container flex min-h-[100vh] flex-col items-center space-y-xl',
        className
      )}
    >
      <div className=''>
        <TextDisplay className='text-center'>Experience</TextDisplay>
      </div>

      <div
        className='group flex w-[200px] flex-row flex-nowrap bg-blue-500 hover:cursor-pointer hover:bg-foreground'
        ref={scope}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div
          id='target'
          className='mx-sm h-[75px] min-w-[75px] bg-foreground group-hover:bg-blue-500'
        />
        <div
          id='target'
          className='mx-sm h-[75px] min-w-[75px] bg-foreground group-hover:bg-blue-500'
        />
        <div
          id='target'
          className='mx-sm h-[75px] min-w-[75px] bg-foreground group-hover:bg-blue-500'
        />
        <div
          id='target'
          className='mx-sm h-[75px] min-w-[75px] bg-foreground group-hover:bg-blue-500'
        />
        <div
          id='target'
          className='mx-sm h-[75px] min-w-[75px] bg-foreground group-hover:bg-blue-500'
        />
      </div>
    </section>
  );
};

export default Experience;
