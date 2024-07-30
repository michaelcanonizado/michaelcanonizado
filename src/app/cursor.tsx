'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type MousePosition = {
  x: number;
  y: number;
};

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0
  });

  const size = 32;

  const updateMousePosition: EventListener = (e: MouseEventInit): void => {
    if (!e.clientX || !e.clientY) {
      return;
    }

    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - size / 2,
      y: mousePosition.y - size / 2
    }
  };

  return (
    <motion.div
      variants={variants}
      animate='default'
      transition={{
        type: 'tween',
        ease: 'backOut',
        duration: 0
      }}
      style={{
        width: `${size}px`,
        height: `${size}px`
      }}
      className='fixed left-0 top-0 rounded-full bg-foreground'
    />
  );
};

export default Cursor;
