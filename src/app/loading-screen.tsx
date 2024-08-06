'use client';

import { useEffect, useState } from 'react';

import { animate, AnimatePresence, motion } from 'framer-motion';

import { TextDisplay, TextHeading } from '@/components/text';

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
      y: '-100%',
      transition: {
        ease: [0.5, 0, 0.75, 0],
        duration: 0.8
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={loadingScreenVariants}
        initial='initial'
        animate={isComplete ? 'hidden' : 'show'}
        transition={{
          duration: 0.2
        }}
        className='fixed inset-0 top-0 z-[99] grid h-screen place-items-center bg-muted'
      >
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
          className='flex flex-row items-center justify-center gap-lg'
        >
          <div className='size-[24px] rounded-full bg-foreground' />
          <TextDisplay showAnimation={false} className='text-foreground'>
            {textList[textIndex]}
          </TextDisplay>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
