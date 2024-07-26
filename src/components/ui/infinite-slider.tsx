'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap
} from 'framer-motion';

type InfiniteSliderProps = {
  baseVelocity?: number;
  stopOnHover?: boolean;
};

const InfiniteSlider = ({
  className,
  children,
  baseVelocity = 3,
  stopOnHover = true
}: ComponentBaseProps & InfiniteSliderProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseX = useMotionValue(0);

  /* Track scroll */
  const { scrollY } = useScroll();
  /* Get scroll velocity */
  const scrollVelocity = useVelocity(scrollY);
  /* Smoothen/add spring to scroll */
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  /* Transform the velocity value to a smaller range */
  const velocityFactor = useTransform(smoothVelocity, [0, 5000], [0, 10], {
    clamp: false
  });

  const x = useTransform(baseX, v => `${wrap(-20, -45, v)}%`);
  const directionFactor = { current: 1 };
  useAnimationFrame((t, delta) => {
    /* Each frame the slider will move depending on how much velocity there is in the scroll. If the slider isHovered, the moveBy value will be 0. */
    let moveBy = 0;
    if (isHovered === false || !stopOnHover) {
      moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    }

    /* Change direction depending on the scroll direction. */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  const onMouseEnter = () => {
    setIsHovered(true);
  };
  const onMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={cn(
        'group flex flex-row flex-nowrap overflow-hidden border-y p-0',
        className,
        stopOnHover ? 'hover:cursor-pointer hover:bg-foreground' : ''
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        id='slide'
        className={cn('flex w-fit flex-row flex-nowrap')}
        style={{ x }}
      >
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export default InfiniteSlider;
