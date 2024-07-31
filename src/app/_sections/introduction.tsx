'use client';

import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { TextBody, textBodyVariants, TextHeading } from '@/components/ui/text';
import { motion, useScroll, useTransform } from 'framer-motion';
import Card from '@/components/ui/card';
import { useRef } from 'react';

const Introduction = ({ className }: ComponentBaseProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end 70%']
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const y = useTransform(scrollYProgress, [0, 1], [-150, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <section ref={containerRef} className={cn('container my-0', className)}>
      <div className='flex items-center justify-center space-x-xl overflow-hidden rounded-xl bg-muted py-2xl'>
        <motion.div
          style={{
            y,
            rotate: rotate,
            scale
          }}
          className=''
        >
          <Card />
        </motion.div>

        <div className='max-w-[400px] space-y-md'>
          <div>
            <TextHeading variants={textBodyVariants}>
              Looking for a developer who can create a visually appealing and
              fully functional website?
            </TextHeading>
          </div>

          <div className='max-w-[700px]'>
            <TextBody>
              Your search ends here! With my knowledge in web development,
              you&apos;ll get a website that sets you apart!
            </TextBody>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
