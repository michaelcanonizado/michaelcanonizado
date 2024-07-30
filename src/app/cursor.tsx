'use client';

import { motion } from 'framer-motion';
import { useCursorContext } from '@/context/cursor';

const Cursor = () => {
  const { cursor } = useCursorContext();
  const { x, y } = cursor.mousePosition;

  const size = 32;

  const variants = {
    default: {
      scale: 1,
      x: x - size / 2,
      y: y - size / 2
    },
    hidden: {
      opacity: 0,
      scale: 0
    }
  };

  return (
    <motion.div
      variants={variants}
      animate={'default'}
      transition={{
        type: 'tween',
        ease: 'backOut',
        duration: 0
      }}
      style={{
        width: `${size}px`,
        height: `${size}px`
      }}
      className='pointer-events-none fixed left-0 top-0 scale-[0] rounded-full bg-foreground'
    />
  );
};

export default Cursor;
