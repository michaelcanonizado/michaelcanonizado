'use client';

import { cn } from '@/lib/utils';
import { motion, Variants } from 'framer-motion';
import { ComponentBaseProps } from '@/types';

type TextProps = {
  showAnimation?: boolean;
} & ComponentBaseProps;

export const TextDisplay = ({
  className,
  children,
  showAnimation = true
}: TextProps) => {
  const textDisplayVariants: Variants = {
    hidden: {},
    show: {}
  };

  return (
    <motion.h1
      variants={textDisplayVariants}
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
  const textHeadingVariants: Variants = {
    hidden: {},
    show: {}
  };

  return (
    <motion.h2
      variants={textHeadingVariants}
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
  const textBodyVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 100,
      y: 0,
      transition: {
        duration: 0.3,
        type: 'tween',
        ease: 'linear'
      }
    }
  };

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
  const textSubVariants: Variants = {
    hidden: {},
    show: {}
  };

  return (
    <motion.p
      variants={textSubVariants}
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
