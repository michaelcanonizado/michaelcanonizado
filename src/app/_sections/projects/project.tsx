'use client';

import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { motion } from 'framer-motion';

import { TextBody, TextHeading, TextSub } from '@/components/text';
import Image from 'next/image';

export type ProjectType = {
  image: {
    src: string;
    alt: string;
  };
  heading: string;
  technologies: string[];
  description: string;
  url: string;
};

const Project = ({
  className,
  image,
  heading,
  technologies,
  description,
  url
}: ProjectType & ComponentBaseProps) => {
  const containerVariants = {
    hidden: {
      y: 50,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 100,
      transition: {
        opacity: {
          duration: 0.7,
          type: 'tween',
          ease: 'linear'
        },
        y: {
          duration: 0.5,
          type: 'spring'
        }
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className={cn(
        'flex w-full flex-col justify-start overflow-hidden rounded-lg bg-muted lg:flex-row',
        className
      )}
    >
      <div className='relative h-[350px] w-full min-w-[500px] lg:max-w-[700px]'>
        <Image objectFit='cover' fill src={image.src} alt={image.alt} />
      </div>

      <div className='flex flex-col justify-between p-lg'>
        <div className='mb-lg'>
          <div className='mb-xs flex items-center justify-start'>
            <TextHeading showAnimation={false}>{heading}</TextHeading>
          </div>

          <div className='mb-md flex flex-row gap-sm'>
            {technologies.map((technology, index) => {
              return (
                <TextSub
                  key={index}
                  showAnimation={false}
                  className='font-semibold'
                >
                  {technology}
                </TextSub>
              );
            })}
          </div>

          <div className='flex items-center justify-end'>
            <TextBody showAnimation={false}>{description}</TextBody>
          </div>
        </div>

        <div
          className={cn(
            'group w-fit rounded-full border px-lg py-sm hover:bg-background/50',
            className
          )}
        >
          <TextBody showAnimation={false} className=''>
            View
          </TextBody>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
