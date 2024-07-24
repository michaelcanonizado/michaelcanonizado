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
  const animationDuration = 8;
  const numOfImages = technologyImages.length;

  /* Styles will be inlined so that the styles can be properly applied. Using dynamic tailwind classes is currently buggy. */
  const sliderWidth = `${width * numOfImages}px`;
  const sliderHeight = `${height}px`;
  const imageWidth = `${width}px`;
  const imageHeight = `${height}px`;

  return (
    <section className={cn('section space-y-lg py-xl', className)}>
      <div className='flex flex-row items-center justify-center'>
        <TextHeading>Technologies</TextHeading>
      </div>
      <div
        className={cn('relative flex flex-row overflow-hidden')}
        style={{
          maskImage:
            'linear-gradient(to right,transparent,#000 20% 80%,transparent)',
          minWidth: sliderWidth,
          height: sliderHeight
        }}
      >
        {technologyImages.map((image, index) => {
          return (
            <motion.div
              className='absolute'
              style={{
                width: imageWidth,
                height: imageHeight
              }}
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
