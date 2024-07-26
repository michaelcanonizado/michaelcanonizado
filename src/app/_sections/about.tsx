'use client';

import { useRef, useState } from 'react';

import { cn } from '@/lib/utils';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ComponentBaseProps } from '@/types';

import { TextBody, TextDisplay, TextHeading } from '@/components/ui/text';
import Image from 'next/image';

const images = [
  {
    src: 'image-1.jpg',
    alt: 'image-1'
  },
  {
    src: 'image-2.jpg',
    alt: 'image-2'
  },
  {
    src: 'image-3.jpg',
    alt: 'image-3'
  },
  {
    src: 'image-4.jpg',
    alt: 'image-4'
  },
  {
    src: 'image-5.jpg',
    alt: 'image-5'
  }
];

const About = ({ className }: ComponentBaseProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['5% start', '90% end']
  });

  const index = useTransform(scrollYProgress, [0, 1], [0, images.length - 1]);

  useMotionValueEvent(index, 'change', latest => {
    setCurrentImageIndex(Math.floor(latest));
  });

  return (
    <section ref={containerRef} className={cn('relative h-[300vh]', className)}>
      <div className='max-height container sticky top-0 flex flex-col items-center justify-center space-y-lg'>
        <div>
          <TextDisplay className='text-center'>About</TextDisplay>
        </div>

        <div className='grid grid-cols-[1fr_auto_1fr] gap-lg'>
          <div className='flex flex-col items-end justify-center gap-lg text-end'>
            <TextHeading>
              {
                "Hi there, I'm Michael (you can call me Mikey!). I am a self-taught web developer based in the Philippines."
              }
            </TextHeading>
            <TextBody>
              I am a 2nd year Computer Science student with 4 years of
              experience in web development.
            </TextBody>
          </div>

          <div className='relative aspect-[35/54] h-[65vh] overflow-hidden rounded-xl'>
            <Image
              className='object-cover object-center'
              fill
              alt={images[currentImageIndex].alt}
              src={`/about/${images[currentImageIndex].src}`}
            />
          </div>

          <div className='flex flex-col items-start justify-center gap-md'>
            <TextBody>
              I love building websites that are user-friendly, aesthetic, and
              functional.
            </TextBody>
            <TextBody>
              {
                "I'm here to transform your ideas into a website that elevates your business. My strong work ethic and discipline set me apart as a developer you can rely on!"
              }
            </TextBody>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
