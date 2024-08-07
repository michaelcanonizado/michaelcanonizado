'use client';

import { MouseEventHandler, useRef } from 'react';

import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { useMotionValue, useSpring, useTransform, motion } from 'framer-motion';

type MagneticHoverProps = {
  xIntensity?: number;
  yIntensity?: number;
};

const MagneticHover = ({
  className,
  children,
  xIntensity = 20,
  yIntensity = 20,
  ...props
}: MagneticHoverProps & ComponentBaseProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const onMouseMove: MouseEventHandler = event => {
    if (!containerRef.current) {
      return;
    }

    const { clientX, clientY } = event;
    const { width, height, left, top } =
      containerRef.current.getBoundingClientRect();

    const mouseX = (clientX - left) / width - 0.5;
    const mouseY = (clientY - top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const onMouseLeave: MouseEventHandler = event => {
    x.set(0);
    y.set(0);
  };

  const moveXBy = useTransform(
    xSpring,
    [-0.5, 0.5],
    [xIntensity * -1, xIntensity]
  );
  const moveYBy = useTransform(
    ySpring,
    [-0.5, 0.5],
    [yIntensity * -1, yIntensity]
  );

  return (
    <motion.div
      {...props}
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x: moveXBy, y: moveYBy }}
      transition={{
        type: 'spring',
        damping: 10,
        stiffness: 30
      }}
      className={cn('hover:cursor-pointer', className)}
    >
      {children}
    </motion.div>
  );
};

export default MagneticHover;
