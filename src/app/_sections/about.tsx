'use client';

import { useRef } from 'react';

import { cn } from '@/lib/utils';
import { useScroll, useTransform, motion } from 'framer-motion';
import { ComponentBaseProps } from '@/types';

import { TextBody, TextDisplay, TextHeading } from '@/components/ui/text';
import Image from 'next/image';
import Card from '@/components/ui/card';

const About = ({ className }: ComponentBaseProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 40%']
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-10, -3]);
  const x = useTransform(scrollYProgress, [0, 1], [-50, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 1], [300, 0, -175]);

  return (
    <section
      ref={containerRef}
      className={cn('max-height container space-y-xl !pt-0', className)}
    >
      <div className='flex flex-row justify-center'>
        <TextDisplay className='max-w-[10ch] text-center'>
          {'You can call me Mikey!'}
        </TextDisplay>
      </div>
      <div className='flex items-start justify-center gap-xl space-x-xl'>
        <motion.div
          style={{
            rotate,
            x,
            y,
            scale: 1.1
          }}
          className=''
        >
          <Card className='relative h-[500px] w-[350px]'>
            <Image fill src='/about/image-4.jpg' alt=' mikey' />
          </Card>
        </motion.div>
        <div className='!m-0 max-w-[500px] space-y-lg'>
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
