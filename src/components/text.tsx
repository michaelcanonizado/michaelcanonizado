'use client';

import { cn } from '@/lib/utils';
import { motion, MotionProps, Variants } from 'framer-motion';
import { ComponentBaseProps } from '@/types';

type TextProps = {
  variants?: Variants;
  showAnimation?: boolean;
} & ComponentBaseProps;

const noAnimationVariants: Variants = {
  hidden: {
    opacity: 100,
    y: 0
  },
  show: {
    opacity: 100,
    y: 0
  }
};
export const textDisplayVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.985
  },
  show: {
    opacity: 100,
    y: 0,
    scale: 1,
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
  hidden: {
    opacity: 0,
    y: 10
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
  const textVariants = showAnimation
    ? textDisplayVariants
    : noAnimationVariants;

  return (
    <motion.h1
      variants={variants ? variants : textVariants}
      initial='hidden'
      whileInView='show'
      className={cn(
        'font-display text-[calc((42/16)*1rem)] font-[700] leading-[0.8] tracking-[calc((0/16)*1rem)] text-brand xs:text-[calc((52/16)*1rem)] sm:text-[calc((64/16)*1rem)] md:text-[calc((84/16)*1rem)] lg:text-[calc((137/16)*1rem)]',
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
  variants,
  ...props
}: TextProps & React.HTMLAttributes<HTMLHeadingElement> & MotionProps) => {
  const textVariants = showAnimation
    ? textHeadingVariants
    : noAnimationVariants;

  return (
    <motion.h2
      variants={variants ? variants : textVariants}
      initial='hidden'
      whileInView='show'
      className={cn(
        'font-display text-[calc((20/16)*1rem)] font-[600] leading-[1.1] tracking-[calc((0/16)*1rem)] xs:text-[calc((24/16)*1rem)] md:text-[calc((32/16)*1rem)]',
        className
      )}
      {...props}
    >
      {children}
    </motion.h2>
  );
};

export const TextBody = ({
  className,
  children,
  showAnimation = true,
  variants,
  ...props
}: TextProps & React.HTMLAttributes<HTMLParagraphElement> & MotionProps) => {
  const textVariants = showAnimation ? textBodyVariants : noAnimationVariants;

  return (
    <motion.p
      variants={variants ? variants : textVariants}
      initial='hidden'
      whileInView='show'
      className={cn(
        'text-[calc((14/16)*1rem)] font-[400] leading-[1.4] tracking-[calc((1/16)*1rem)] xs:text-[calc((16/16)*1rem)] sm:text-[calc((18/16)*1rem)] md:text-[calc((20/16)*1rem)]',
        className
      )}
      {...props}
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
  const textVariants = showAnimation ? textSubVariants : noAnimationVariants;

  return (
    <motion.p
      variants={variants ? variants : textVariants}
      initial='hidden'
      whileInView='show'
      className={cn(
        'font-display text-[calc((12/16)*1rem)] font-[300] leading-[1.2] tracking-[calc((1/16)*1rem)] sm:text-[calc((14/16)*1rem)]',
        className
      )}
    >
      {children}
    </motion.p>
  );
};
