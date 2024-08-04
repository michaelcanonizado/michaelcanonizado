'use client';

import { MouseEventHandler, useRef, useState } from 'react';

import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import {
  motion,
  useTransform,
  useMotionValue,
  Variants,
  useSpring
} from 'framer-motion';

import InfiniteSlider from '@/components/infinite-slider';
import { TextBody } from '@/components/text';

const Sparkle = ({ className }: ComponentBaseProps) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <path d='M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z' />
    </svg>
  );
};
const Sparkles = ({ className }: ComponentBaseProps) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <path d='M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z' />
      <path d='M20 3v4' />
      <path d='M22 5h-4' />
      <path d='M4 17v2' />
      <path d='M5 18H3' />
    </svg>
  );
};

const InfiniteEmailSlider = ({
  email,
  className
}: { email: string } & ComponentBaseProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x);
  const springY = useSpring(y);

  const onMouseMove: MouseEventHandler = event => {
    if (!containerRef.current) return;

    const { clientX, clientY } = event;
    const { width, height, top, left } =
      containerRef.current.getBoundingClientRect();

    const mouseX = (clientX - left) / width - 0.5;
    const mouseY = (clientY - top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };
  const onMouseLeave = () => {
    setIsCopied(false);
  };
  const onClick = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(email);
  };

  const moveLeftBy = useTransform(springX, [-0.5, 0.5], ['0%', '100%']);
  const moveTopBy = useTransform(springY, [-0.5, 0.5], ['-10%', '90%']);

  const hoverVariants: Variants = {
    initial: {
      left: '50%',
      top: '50%',
      translateX: '-50%',
      translateY: '-50%',
      scale: 0,
      opacity: 0
    },
    whileHover: {
      scale: 1,
      opacity: 100
    },
    whileTap: {
      scale: 1.3,
      transition: {
        type: 'tween'
      }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      initial='initial'
      whileHover='whileHover'
      whileTap='whileTap'
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={cn('relative hover:cursor-pointer', className)}
    >
      <motion.div
        variants={hoverVariants}
        transition={{
          type: 'spring'
        }}
        style={{
          left: moveLeftBy,
          top: moveTopBy
        }}
        className='pointer-events-none absolute z-20 grid place-items-center rounded-lg rounded-bl-[50%] rounded-br-[50%] rounded-tl-[50%] rounded-tr-[50%] bg-brand/50 px-lg py-md backdrop-blur-[8px]'
      >
        <TextBody className='flex items-center justify-center gap-xs font-bold text-white'>
          <span>{isCopied ? 'Copied!' : 'Copy'}</span>
          {isCopied ? (
            <Sparkles className='size-[22px]' />
          ) : (
            <Sparkle className='size-[22px]' />
          )}
        </TextBody>
      </motion.div>
      <InfiniteSlider baseVelocity={-3}>
        <span className='mx-lg font-display text-[64px] font-bold group-hover:text-foreground-secondary lg:text-[100px]'>
          {email}
        </span>
      </InfiniteSlider>
    </motion.div>
  );
};

export default InfiniteEmailSlider;
