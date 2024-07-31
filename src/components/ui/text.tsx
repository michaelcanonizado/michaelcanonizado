'use client';

import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { textBodyVariants } from '@/styles/variants';

type TextProps = {
  showAnimation?: boolean;
} & ComponentBaseProps;

export const TextDisplay = ({
  className,
  children,
  showAnimation = true
}: TextProps) => {
  return (
    <motion.h1
      initial={showAnimation ? 'hidden' : ''}
      whileInView={showAnimation ? 'show' : ''}
      className={cn(
        'font-display text-[calc((137/16)*1rem)] font-[700] leading-[0.8] tracking-[calc((0/16)*1rem)] text-brand',
        className
      )}
    >
      {children}
    </motion.h1>
  );
};

export const TextHeading = ({
  className,
  children,
  showAnimation = true
}: TextProps) => {
  return (
    <motion.h2
      variants={textBodyVariants}
      initial={showAnimation ? 'hidden' : ''}
      whileInView={showAnimation ? 'show' : ''}
      className={cn(
        'font-display text-[calc((32/16)*1rem)] font-[600] leading-[1.1] tracking-[calc((0/16)*1rem)]',
        className
      )}
    >
      {children}
    </motion.h2>
  );
};

export const TextBody = ({
  className,
  children,
  showAnimation = true
}: TextProps) => {
  return (
    <motion.p
      variants={textBodyVariants}
      initial={showAnimation ? 'hidden' : ''}
      whileInView={showAnimation ? 'show' : ''}
      className={cn(
        'text-[calc((20/16)*1rem)] font-[400] leading-[1.4] tracking-[calc((1/16)*1rem)]',
        className
      )}
    >
      {children}
    </motion.p>
  );
};

export const TextSub = ({
  className,
  children,
  showAnimation = true
}: TextProps) => {
  return (
    <motion.p
      initial={showAnimation ? 'hidden' : ''}
      whileInView={showAnimation ? 'show' : ''}
      className={cn(
        'font-display text-[calc((14/16)*1rem)] font-[500] leading-[1.2] tracking-[calc((1/16)*1rem)]',
        className
      )}
    >
      {children}
    </motion.p>
  );
};
