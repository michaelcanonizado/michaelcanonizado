'use client';

import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { motion } from 'framer-motion';

import { TextBody, TextHeading, TextSub } from '@/components/text';
import Image from 'next/image';

const ExternalLink = ({ className }: ComponentBaseProps) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <path d='M15 3h6v6' />
      <path d='M10 14 21 3' />
      <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
    </svg>
  );
};

const Link = ({ className, url }: { url: string } & ComponentBaseProps) => {
  return (
    <a
      href={url}
      target='_blank'
      className={cn(
        'group flex w-fit flex-row items-center gap-xs rounded-bl-[50%] rounded-br-[50%] rounded-tl-[50%] rounded-tr-[50%] border-2 border-brand px-lg py-md hover:bg-background/50',
        className
      )}
    >
      <TextSub showAnimation={false} className='mb-[-2px]'>
        View
      </TextSub>
      <ExternalLink className='h-[16px]] w-[16px]' />
    </a>
  );
};

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

        <Link url={url} />
      </div>
    </motion.div>
  );
};

export default Project;
