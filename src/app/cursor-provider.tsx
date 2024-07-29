'use client';

import React, { useRef } from 'react';

import { cn } from '@/lib/utils';
import { motion, useMotionValue } from 'framer-motion';
import { ComponentBaseProps } from '@/types';
import useMousePosition from '@/hooks/useCursor';

const CursorProvider = ({ className, children }: ComponentBaseProps) => {
  const containerRef = useRef(null);
  const { x, y } = useMousePosition();

  const cursorSize = 24;

  return (
    <motion.div
      style={{
        width: `${cursorSize}px`,
        height: `${cursorSize}px`
      }}
      animate={{ x, y }}
      className='absolute top-0 rounded-full bg-foreground'
    />
  );
};

export default CursorProvider;
