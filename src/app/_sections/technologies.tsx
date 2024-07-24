'use client';

import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { TextHeading } from '@/components/ui/text';
import { motion } from 'framer-motion';
import Image from 'next/image';

const technologyImages = [
  {
    src: 'github-logo.png',
    alt: 'typescript'
  },
  {
    src: 'typescript-logo.png',
    alt: 'typescript'
  },
  {
    src: 'typescript-logo.png',
    alt: 'typescript'
  },
  {
    src: 'typescript-logo.png',
    alt: 'typescript'
  },
  {
    src: 'typescript-logo.png',
    alt: 'typescript'
  },
  {
    src: 'typescript-logo.png',
    alt: 'typescript'
  },
  {
    src: 'typescript-logo.png',
    alt: 'typescript'
  },
  {
    src: 'typescript-logo.png',
    alt: 'typescript'
  },
  {
    src: 'typescript-logo.png',
    alt: 'typescript'
  },
  {
    src: 'typescript-logo.png',
    alt: 'typescript'
  }
];

const Technologies = ({ className }: ComponentBaseProps) => {
  const width = 100;
  const height = 100;
  const animationDuration = 10;
  const numOfImages = technologyImages.length;

  const sliderWidth = `min-w-[${width * numOfImages}px]`;
  const sliderHeight = `h-[${height}px]`;
  const imageWidth = `w-[${width}px]`;
  const imageHeight = `h-[${height}px]`;

  return (
    <section
      className={cn('container min-h-[40vh] space-y-lg px-lg py-xl', className)}
    >
      <div className='flex flex-row items-center justify-center'>
        <TextHeading>Technologies</TextHeading>
      </div>
      <div
        className={cn(
          'relative flex h-[100px] flex-row overflow-hidden',
          sliderHeight,
          sliderWidth
        )}
        style={{
          maskImage:
            'linear-gradient(to right,transparent,#000 20% 80%,transparent)'
        }}
      >
        {technologyImages.map((image, index) => {
          return (
            <motion.div
              className={cn(
                'absolute h-[100px] w-[100px]',
                imageWidth,
                imageHeight
              )}
              key={index}
              initial={{
                left: '100%'
              }}
              animate={{
                left: '-100%'
              }}
              transition={{
                duration: animationDuration,
                type: 'tween',
                ease: 'linear',
                repeat: Infinity,
                delay: (animationDuration / numOfImages) * (index + 3)
              }}
            >
              <Image
                alt={image.alt}
                src={`/technologies-temp/${image.src}`}
                fill
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Technologies;
