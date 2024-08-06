'use client';

import { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

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

  useEffect(() => {
    if (textIndex >= textList.length - 1) {
      return;
    }

    const interval = textIndex === 0 ? 1000 : 200;

    const timeout = setTimeout(() => {
      setTextIndex(previousIndex => previousIndex + 1);
    }, interval);

    return () => clearInterval(timeout);
  }, [textIndex]);

  return (
    <AnimatePresence>
      <motion.div
        exit={{
          y: '-100%'
        }}
        transition={{
          duration: 1
        }}
        className='sticky inset-0 top-0 z-[99] grid h-screen place-items-center bg-muted'
      >
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 100
          }}
          transition={{
            duration: 1
          }}
          className='flex flex-row items-center justify-center gap-lg'
        >
          <div className='size-[36px] rounded-full bg-foreground' />
          <TextDisplay showAnimation={false} className='text-foreground'>
            {textList[textIndex]}
          </TextDisplay>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
