'use client';

import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

import { TextBody, TextHeading, TextSub } from '@/components/text';
import Image from 'next/image';
import { MouseEventHandler, useRef } from 'react';

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
  const containerRef = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const onMouseMove: MouseEventHandler = event => {
    if (!containerRef.current) {
      return;
    }

    const { clientX, clientY } = event;
    const { width, height, left, top } =
      containerRef.current.getBoundingClientRect();

    const mouseX = (clientX - left) / width - 0.5;
    const mouseY = (clientY - top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const onMouseLeave: MouseEventHandler = event => {
    x.set(0);
    y.set(0);
  };

  const moveRingXBy = useTransform(xSpring, [-0.5, 0.5], [-10, 10]);
  const moveRingYBy = useTransform(ySpring, [-0.5, 0.5], [-5, 5]);
  const moveTextXBy = useTransform(xSpring, [-0.5, 0.5], [-6, 6]);
  const moveTextYBy = useTransform(ySpring, [-0.5, 0.5], [-3, 3]);

  const transition = {
    type: 'spring',
    stiffness: 200
  };

  return (
    <motion.a
      href={url}
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x: moveTextXBy, y: moveTextYBy }}
      transition={transition}
      target='_blank'
      className={cn(
        'group relative flex w-fit flex-row items-center gap-xs px-lg py-md',
        className
      )}
    >
      <motion.div
        style={{ x: moveRingXBy, y: moveRingYBy }}
        transition={transition}
        className='absolute inset-0 rounded-bl-[50%] rounded-br-[50%] rounded-tl-[50%] rounded-tr-[50%] border-2 border-brand bg-transparent'
      />
      <TextSub showAnimation={false} className='mb-[-2px]'>
        View
      </TextSub>
      <ExternalLink className='h-[16px]] w-[16px]' />
    </motion.a>
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
