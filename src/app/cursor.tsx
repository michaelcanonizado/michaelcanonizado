'use client';

import { motion } from 'framer-motion';
import { useCursorContext } from '@/context/cursor';
import { cn } from '@/lib/utils';

const Cursor = () => {
  const { cursor } = useCursorContext();
  const { x, y } = cursor.mousePosition;
  const { isHidden = true } = cursor;

  const size = 32;

  const variants = {
    default: {
      scale: 1,
      x: x - size / 2,
      y: y - size / 2,
      transition: {
        type: 'tween',
        ease: 'backOut',
        duration: 0
      }
    },
    hidden: {
      x: x - size / 2,
      y: y - size / 2,
      opacity: 0,
      scale: 0
    }
  };

  return (
    <motion.div
      variants={variants}
      animate={isHidden ? 'hidden' : 'default'}
      style={{
        width: `${size}px`,
        height: `${size}px`
      }}
      className={cn(
        'pointer-events-none fixed left-0 top-0 scale-0 rounded-full',
        isHidden ? 'bg-background' : 'bg-foreground'
      )}
    />
  );
};

export default Cursor;
