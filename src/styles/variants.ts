import { Variants } from 'framer-motion';

export const textBodyVariants: Variants = {
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
