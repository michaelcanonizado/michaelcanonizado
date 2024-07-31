'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { textBodyVariants } from '@/styles/variants';

export const TextDisplay = ({ className, children }: ComponentBaseProps) => {
  return (
    <h1
      className={cn(
        'font-display text-[calc((137/16)*1rem)] font-[700] leading-[0.8] tracking-[calc((0/16)*1rem)] text-brand',
        className
      )}
    >
      {children}
    </h1>
  );
};

export const TextHeading = ({ className, children }: ComponentBaseProps) => {
  return (
    <motion.h2
      variants={textBodyVariants}
      initial='hidden'
      whileInView='show'
      className={cn(
        'font-display text-[calc((32/16)*1rem)] font-[600] leading-[1.1] tracking-[calc((0/16)*1rem)]',
        className
      )}
    >
      {children}
    </motion.h2>
  );
};

export const TextBody = ({ className, children }: ComponentBaseProps) => {
  return (
    <motion.p
      variants={textBodyVariants}
      initial='hidden'
      whileInView='show'
      className={cn(
        'text-[calc((20/16)*1rem)] font-[400] leading-[1.4] tracking-[calc((1/16)*1rem)]',
        className
      )}
    >
      {children}
    </motion.p>
  );
};

export const TextSub = ({ className, children }: ComponentBaseProps) => {
  return (
    <p
      className={cn(
        'font-display text-[calc((14/16)*1rem)] font-[500] leading-[1.2] tracking-[calc((1/16)*1rem)]',
        className
      )}
    >
      {children}
    </p>
  );
};
