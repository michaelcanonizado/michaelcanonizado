'use client';

import { MouseEventHandler, useRef } from 'react';

import { cn } from '@/lib/utils';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ComponentBaseProps } from '@/types';

const Card = ({ className, children, ...props }: ComponentBaseProps) => {
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

  const moveXBy = useTransform(xSpring, [-0.5, 0.5], [-20, 20]);
  const moveYBy = useTransform(ySpring, [-0.5, 0.5], [-20, 20]);

  return (
    <motion.div
      {...props}
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x: moveXBy, y: moveYBy }}
      transition={{
        type: 'spring'
      }}
      className={cn(
        'relative h-[500px] w-[350px] space-y-md rounded-lg border bg-muted/20 p-lg backdrop-blur-[8px]',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

const CardImage = ({ className, children }: ComponentBaseProps) => {
  return (
    <div
      className={cn(
        'relative aspect-square w-full overflow-hidden rounded-lg',
        className
      )}
    >
      {children}
    </div>
  );
};

const CardText = ({ className, children }: ComponentBaseProps) => {
  return <div className={cn('', className)}>{children}</div>;
};

Card.Image = CardImage;
Card.Text = CardText;
export default Card;
