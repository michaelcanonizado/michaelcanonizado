'use client';

import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { TextBody, TextHeading } from '@/components/ui/text';
import { motion } from 'framer-motion';

import Git from '@/../public/technologies/git';
import Java from '@/../public/technologies/java';
import MongoDB from '@/../public/technologies/mongodb';
import NextJS from '@/../public/technologies/nextjs';
import Node from '@/../public/technologies/node';
import PostgreSQL from '@/../public/technologies/postgresql';
import ReactJS from '@/../public/technologies/reactjs';
import Redux from '@/../public/technologies/redux';
import TailwindCSS from '@/../public/technologies/tailwindcss';
import Typescript from '@/../public/technologies/typescript';

const technologyLogos = [
  {
    name: 'Git',
    component: <Git />
  },
  {
    name: 'Java',
    component: <Java />
  },
  {
    name: 'MongoDB',
    component: <MongoDB />
  },
  {
    name: 'NextJS',
    component: <NextJS />
  },
  {
    name: 'ReactJS',
    component: <ReactJS />
  },
  {
    name: 'Typescript',
    component: <Typescript />
  },
  {
    name: 'TailwindCSS',
    component: <TailwindCSS />
  },
  {
    name: 'Redux',
    component: <Redux />
  },
  {
    name: 'Node',
    component: <Node />
  },
  {
    name: 'PostgreSQL',
    component: <PostgreSQL />
  }
];

const InfiniteLogoSlider = () => {
  const width = 250;
  const height = 75;
  const animationDuration = 8;
  const numOfImages = technologyLogos.length;

  /* Styles will be inlined so that the styles can be properly applied. Using dynamic tailwind classes is currently buggy. */
  const sliderWidth = `${width * numOfImages}px`;
  const sliderHeight = `${height}px`;
  const imageWidth = `${width}px`;
  const imageHeight = `${height}px`;

  return (
    <div
      className={cn('relative flex flex-row overflow-hidden')}
      style={{
        maskImage:
          'linear-gradient(to right,transparent,#000 20% 80%,transparent)',
        minWidth: sliderWidth,
        height: sliderHeight
      }}
    >
      {technologyLogos.map((logo, index) => {
        return (
          <motion.div
            className='absolute'
            style={{
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
            {logo.component}
          </motion.div>
        );
      })}
    </div>
  );
};

const Technologies = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn(
        'section flex !min-h-0 flex-col items-center space-y-lg border-b !pt-0',
        className
      )}
    >
      <div className='flex max-w-[500px] flex-col items-center justify-center space-y-md'>
        <div>
          <TextHeading>Technologies</TextHeading>
        </div>
        <div>
          <TextBody className='text-center'>
            My expertise spans a diverse range of technologies. Utilixing the
            latest technologies to deliver high-perfomance and scalable
            solutions.
          </TextBody>
        </div>
      </div>
      <InfiniteLogoSlider />
    </section>
  );
};

export default Technologies;
