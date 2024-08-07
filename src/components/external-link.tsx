'use client';

import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

import { TextSub } from '@/components/text';
import { MouseEventHandler, useRef } from 'react';
import MagneticHover from '@/components/magnetic-hover';
import { default as NextLink } from 'next/link';

const ExternalLink = ({
  className,
  children,
  href
}: { href: string } & ComponentBaseProps) => {
  const containerRef = useRef<HTMLAnchorElement | null>(null);

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

  const moveTextXBy = useTransform(xSpring, [-0.5, 0.5], [-6, 6]);
  const moveTextYBy = useTransform(ySpring, [-0.5, 0.5], [-3, 3]);

  const transition = {
    type: 'spring',
    stiffness: 200
  };

  const AnimatedLink = motion(NextLink);

  return (
    <AnimatedLink
      href={href}
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x: moveTextXBy, y: moveTextYBy }}
      transition={transition}
      target='_blank'
      className={cn(
        'group relative flex w-fit flex-row items-center gap-xs px-lg py-md',
        className
      )}
    >
      <MagneticHover
        xIntensity={10}
        yIntensity={5}
        className='absolute inset-0 rounded-bl-[50%] rounded-br-[50%] rounded-tl-[50%] rounded-tr-[50%] border-2 border-brand bg-transparent'
      />
      {children}
    </AnimatedLink>
  );
};

export default ExternalLink;
