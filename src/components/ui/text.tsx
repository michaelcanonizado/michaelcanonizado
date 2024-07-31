'use client';

import { cn } from '@/lib/utils';
import { motion, Variants } from 'framer-motion';
import { ComponentBaseProps } from '@/types';

type TextProps = {
  variants?: Variants;
  showAnimation?: boolean;
} & ComponentBaseProps;

export const textDisplayVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  show: {
    opacity: 100,
    y: 0,
    transition: {
      opacity: {
        duration: 0.5,
        type: 'tween',
        ease: 'linear'
      },
      y: {
        duration: 0.3
      }
    }
  }
};
export const textHeadingVariants: Variants = {
  hidden: {},
  show: {}
};
export const textBodyVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 100,
    y: 0,
    transition: {
      opacity: {
        duration: 0.5,
        type: 'tween',
        ease: 'linear'
      },
      y: {
        duration: 0.3
      }
    }
  }
};
export const textSubVariants: Variants = {
  hidden: {},
  show: {}
};

export const TextDisplay = ({
  className,
  children,
  showAnimation = true,
  variants
}: TextProps) => {
  return (
    <motion.h1
      variants={variants ? variants : textDisplayVariants}
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
  showAnimation = true,
  variants
}: TextProps) => {
  return (
    <motion.h2
      variants={variants ? variants : textHeadingVariants}
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
  showAnimation = true,
  variants
}: TextProps) => {
  return (
    <motion.p
      variants={variants ? variants : textBodyVariants}
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
  showAnimation = true,
  variants
}: TextProps) => {
  return (
    <motion.p
      variants={variants ? variants : textSubVariants}
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
