'use client';

import React, { useRef } from 'react';

import { cn } from '@/lib/utils';
import { motion, useMotionValue } from 'framer-motion';
import { ComponentBaseProps } from '@/types';

const CursorProvider = ({ className, children }: ComponentBaseProps) => {
  const containerRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const onMouseMove: React.MouseEventHandler = event => {
    if (!containerRef.current) {
      return;
    }

    const { clientX, clientY } = event;

    x.set(clientX - 12);
    y.set(clientY - 12);

    console.log('mouse move: ', clientX, ',', clientY);
  };
  const onMouseLeave = () => {
    console.log('mouse leave!');
  };

  return (
    <div
      ref={containerRef}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseMove}
      onMouseMove={onMouseMove}
      className={cn('relative', className)}
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: -5
        }}
        animate={{
          opacity: 100,
          scale: 1
        }}
        style={{ x, y }}
        className='absolute size-[24px] rounded-full bg-foreground'
      />
      {children}
    </div>
  );
};

export default CursorProvider;
