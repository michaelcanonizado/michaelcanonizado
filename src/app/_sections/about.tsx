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

/*
Hi there, I'm Michael (you can call me Mikey!). I am a self-taught web developer based in the Philippines.

I am a 2nd year Computer Science student with 4 years of experience in web development.

I love building websites that are user-friendly, aesthetic, and functional.

I'm here to transform your ideas into a website that elevates your business. My strong work ethic and discipline set me apart as a developer you can rely on!
*/

const About = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn('max-height container !mb-0 space-y-xl !pt-0', className)}
    >
      <div className='flex flex-row justify-center'>
        <TextDisplay className='max-w-[10ch] text-center'>
          {'You can call me Mikey!'}
        </TextDisplay>
      </div>
      <div className='grid grid-cols-2 gap-xl'>
        <div className='flex flex-row justify-end'>
          <div className='relative flex w-full max-w-[500px] flex-row justify-center'>
            <div className='absolute bottom-[-10%] h-[500px] w-[400px] rotate-[-10deg] overflow-hidden rounded-lg'>
              <Image fill src='/about/image-4.jpg' alt=' mikey' />
            </div>
          </div>
        </div>
        <div className='max-w-[500px] space-y-lg'>
          <div className=''>
            <TextHeading>
              I am a self-taught web developer based in the Philippines!
            </TextHeading>
          </div>
          <div className='space-y-md'>
            <TextBody>
              I am a 2nd year Computer Science student with 4 years of
              experience in web development.
            </TextBody>
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
