'use client';

import React from 'react';

import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { TextBody, TextDisplay, TextHeading } from '@/components/text';

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
import InfiniteSlider from '@/components/infinite-slider';

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

const Technologies = ({ className }: ComponentBaseProps) => {
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
        baseVelocity={1.5}
        stopOnHover={false}
      >
        <div className='flex w-fit flex-row flex-nowrap'>
          {technologyLogos.map((logo, index) => {
            return (
              <div className='mx-md h-fit w-fit md:mx-lg' key={index}>
                {React.cloneElement(logo.component, {
                  className:
                    'fill-foreground stroke-foreground h-[40px] md:h-max'
                })}
              </div>
            );
          })}
        </div>
      </InfiniteSlider>
    </section>
  );
};

export default Technologies;
