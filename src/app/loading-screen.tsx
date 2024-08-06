'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { motion, Variants } from 'framer-motion';

import { TextDisplay } from '@/components/text';

const textList = [
  'Hello',
  '你好',
  'Hola',
  'नमस्ते',
  'Bonjour',
  'مرحبا',
  'Привет',
  'Hallo',
  'Ciao',
  'Kamusta'
];

const LoadingScreen = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const initialDelay = 1000;
  const intervalDelay = 200;

  const easing = [0.5, 0, 0.75, 0];

  useEffect(() => {
    if (textIndex >= textList.length - 1) {
      setIsComplete(true);
      return;
    }

    const interval = textIndex === 0 ? initialDelay : intervalDelay;

    const timeout = setTimeout(() => {
      setTextIndex(previousIndex => previousIndex + 1);
    }, interval);

    return () => clearInterval(timeout);
  }, [textIndex]);

  const loadingScreenVariants = {
    initial: {
      y: '0%'
    },
    show: {
      y: '0%'
    },
    hidden: {
      y: `-150%`,
      transition: {
        ease: easing,
        duration: 1.5
      }
    }
  };

  const curveFlatPath = `M1000 0H0C0 0 98.5 150 501 150C883.5 150 1000 0 1000 0`;
  const curveCurvedPath = `M500 0H0C0 0 0 10 500 20C883.5 10 1000 0 1000 0`;

  const curveVariants: Variants = {
    initial: {
      d: curveFlatPath
    },
    hidden: {
      d: curveCurvedPath,
      transition: {
        ease: easing,
        delay: 0.2,
        duration: 1
      }
    },
    show: {
      d: curveFlatPath
    }
  };

  return (
    <motion.div
      variants={loadingScreenVariants}
      initial='initial'
      animate={isComplete ? 'hidden' : 'show'}
      transition={{
        duration: 0.2
      }}
      className='fixed inset-0 top-0 z-[99] translate-y-[-30%]'
    >
      <div className='grid h-screen place-items-center bg-muted'>
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 100
          }}
          transition={{
            duration: initialDelay / 1000
          }}
          className='flex flex-row items-center justify-center gap-sm md:gap-lg'
        >
          <div className='size-[16px] rounded-full bg-foreground md:size-[24px]' />
          <TextDisplay showAnimation={false} className='text-foreground'>
            {textList[textIndex]}
          </TextDisplay>
        </motion.div>
      </div>
      <svg className={cn('w-full', `fill-muted`)} viewBox='0 0 1000 150'>
        <motion.path variants={curveVariants} />
      </svg>
    </motion.div>
  );
};

export default LoadingScreen;
