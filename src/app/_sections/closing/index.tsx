'use client';

import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TextDisplay, TextSub } from '@/components/text';
import Card from '@/components/card';
import { useRef } from 'react';

const Closing = ({ className }: ComponentBaseProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  /* Top Left Card */
  const TLrotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 7, 20]);
  const TLy = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 1],
    [-400, -90, 0, 200]
  );
  /* Top Right Card */
  const TRrotate = useTransform(scrollYProgress, [0, 1], [-5, -20]);
  const TRy = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 1],
    [-300, -90, 0, 100]
  );
  const BRx = useTransform(scrollYProgress, [0, 0.6], [30, 100]);
  /* Bottom Left Card */
  const BLrotate = useTransform(scrollYProgress, [0.3, 0.6, 1], [-15, -10, -5]);
  const BLy = useTransform(scrollYProgress, [0, 0.5, 1], [-300, 150, 400]);
  /* Bottom Right Card */
  const BRrotate = useTransform(scrollYProgress, [0, 0.5, 1], [2, 5, 15]);
  const BRy = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 1],
    [-500, -90, 150, 350]
  );

  const text = {
    display: "I'LL BRING YOUR VISION TO LIFE AND MAKE A DIFFERENCE!"
  };

  return (
    <section
      ref={containerRef}
      className={cn(
        'max-height relative mb-2xl mt-2xl flex w-full flex-row items-center justify-center gap-xl overflow-hidden border-y',
        className
      )}
    >
      <div className='absolute inset-0 z-0 hidden lg:block'>
        <motion.div
          style={{
            rotate: TLrotate,
            y: TLy
          }}
          className='absolute left-[12%] top-[-6%] h-[23vw] min-h-[250px] w-[18vw] min-w-[175px] rotate-[10deg] scale-[1.5] overflow-hidden rounded-lg bg-brand opacity-[60%]'
        >
          <div className='grid h-full w-full place-items-center'>
            <TextSub className='text-center'>Placeholders😅</TextSub>
          </div>
        </motion.div>
        <motion.div
          style={{
            rotate: TRrotate,
            y: TRy
          }}
          className='absolute right-[12%] top-[-5%] h-[23vw] min-h-[250px] w-[18vw] min-w-[175px] scale-[1.5] overflow-hidden rounded-lg bg-brand opacity-[60%]'
        >
          <div className='grid h-full w-full place-items-center px-lg'>
            <TextSub className='text-center'>
              Future projects will be displayed here😎
            </TextSub>
          </div>
        </motion.div>
        <motion.div
          style={{
            rotate: BLrotate,
            y: BLy,
            x: -115
          }}
          className='absolute bottom-[-2%] left-[5%] h-[23vw] min-h-[175px] w-[35vw] min-w-[250px] rotate-[-5deg] scale-[1.5] overflow-hidden rounded-lg bg-brand opacity-[60%]'
        >
          <div className='grid h-full w-full place-items-center px-lg'>
            <TextSub className='text-center'>Nice meeting you!🤓</TextSub>
          </div>
        </motion.div>
        <motion.div
          style={{
            rotate: BRrotate,
            y: BRy,
            x: BRx
          }}
          className='absolute bottom-[-2%] right-[5%] h-[23vw] min-h-[175px] w-[35vw] min-w-[250px] overflow-hidden rounded-lg bg-brand opacity-[60%]'
        >
          <div className='grid h-full w-full place-items-center px-lg'>
            <TextSub className='text-center'>Have you tried hovering the cards🤔</TextSub>
          </div>
        </motion.div>
      </div>
      <div className='z-10 max-w-[1000px] text-center'>
        <TextDisplay>{text.display}</TextDisplay>
      </div>
    </section>
  );
};

export default Closing;
