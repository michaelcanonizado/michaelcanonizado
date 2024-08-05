'use client';

import { useState } from 'react';

import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';

const Hamburger = ({ className }: ComponentBaseProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const hamburgerTVariants: Variants = {
    close: {
      translateY: '0px'
    },
    open: {
      translateY: '3px',
      rotate: '45deg'
    }
  };
  const hamburgerBVariants: Variants = {
    close: {
      translateY: '0px'
    },
    open: {
      translateY: '-3px',
      rotate: '-45deg'
    }
  };

  return (
    <motion.div
      animate={isOpen ? 'open' : 'close'}
      onClick={() => setIsOpen(prev => !prev)}
      className={cn(
        'flex aspect-square flex-col items-center justify-center gap-[4px] rounded-full bg-brand p-[12px] hover:cursor-pointer',
        className
      )}
    >
      <motion.div
        variants={hamburgerTVariants}
        className='h-[2px] w-[24px] bg-foreground'
      />
      <motion.div
        variants={hamburgerBVariants}
        className='h-[2px] w-[24px] bg-foreground'
      />
    </motion.div>
  );
};

export default Hamburger;
