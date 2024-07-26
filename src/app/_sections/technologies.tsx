'use client';

import React from 'react';

import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { TextBody, TextHeading } from '@/components/ui/text';

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
import InfiniteSlider from '@/components/ui/infinite-slider';

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
        'flex !min-h-0 w-screen max-w-full flex-col items-center space-y-lg overflow-hidden !pt-0',
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
      <InfiniteSlider
        className='group border-none py-lg'
        baseVelocity={1}
        stopOnHover={false}
      >
        <div className='flex w-fit flex-row flex-nowrap'>
          {technologyLogos.map((logo, index) => {
            return (
              <div className='mx-lg h-fit w-fit' key={index}>
                {logo.component}
              </div>
            );
          })}
        </div>
      </InfiniteSlider>
    </section>
  );
};

export default Technologies;
