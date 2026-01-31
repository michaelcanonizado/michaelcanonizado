'use client';

import React from 'react';

import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { TextDisplay, TextHeading } from '@/components/text';

import Git from '@/../public/technologies/git';
import Java from '@/../public/technologies/java';
import MongoDB from '@/../public/technologies/mongodb';
import NextJS from '@/../public/technologies/nextjs';
import PostgreSQL from '@/../public/technologies/postgresql';
import ReactJS from '@/../public/technologies/reactjs';
import TailwindCSS from '@/../public/technologies/tailwindcss';
import Typescript from '@/../public/technologies/typescript';
import InfiniteSlider from '@/components/infinite-slider';
import SpringBoot from '../../../../public/technologies/spring-boot';
import Docker from '../../../../public/technologies/docker';
import Redis from '../../../../public/technologies/redis';

const technologyLogos = [
  {
    name: 'Java',
    component: <Java />
  },
  {
    name: 'Spring Boot',
    component: <SpringBoot />
  },
  {
    name: 'Typescript',
    component: <Typescript />
  },
  {
    name: 'ReactJS',
    component: <ReactJS />
  },
  {
    name: 'NextJS',
    component: <NextJS />
  },
  {
    name: 'TailwindCSS',
    component: <TailwindCSS />
  },
  {
    name: 'PostgreSQL',
    component: <PostgreSQL />
  },
  {
    name: 'Redis',
    component: <Redis />
  },
  {
    name: 'MongoDB',
    component: <MongoDB />
  },
  {
    name: 'Docker',
    component: <Docker />
  },
  {
    name: 'Git',
    component: <Git />
  }
];

const Technologies = ({ className }: ComponentBaseProps) => {
  const technologySvgs = technologyLogos.map((logo, index) => {
    return (
      <div className='mx-md h-fit w-fit md:mx-lg' key={index}>
        {React.cloneElement(logo.component, {
          className: 'fill-foreground stroke-foreground h-[40px] md:h-[60px]'
        })}
      </div>
    );
  });

  return (
    <section
      className={cn(
        'flex !min-h-0 w-screen max-w-full flex-col items-center space-y-md overflow-hidden !pt-0 md:space-y-lg lg:my-xl',
        className
      )}
    >
      <div className='flex max-w-[900px] flex-col items-center justify-center space-y-md px-lg md:space-y-lg'>
        <div>
          <TextDisplay>Technologies</TextDisplay>
        </div>
        <div>
          <TextHeading className='text-center'>
            My expertise spans a diverse range of technologies. Utilizing the
            latest technologies to deliver high-perfomance and scalable
            solutions.
          </TextHeading>
        </div>
      </div>
      <InfiniteSlider
        className='group !mt-0 border-none py-lg'
        baseVelocity={0.5}
        stopOnHover={false}
      >
        <div className='flex w-fit flex-row flex-nowrap'>
          {technologySvgs}
          {technologySvgs}
        </div>
      </InfiniteSlider>
    </section>
  );
};

export default Technologies;
