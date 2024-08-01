'use client';

import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { motion } from 'framer-motion';

import { TextBody, TextHeading, TextSub } from '@/components/text';
import Link from '@/components/link';

const Project = ({ className }: ComponentBaseProps) => {
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
      <div className='h-[350px] w-full min-w-[400px] lg:max-w-[700px]'>
        <div className='h-full w-full bg-muted' />
      </div>
      <div className='flex flex-col justify-between p-lg'>
        <div className='mb-lg'>
          <div className='mb-xs flex items-center justify-start'>
            <TextHeading showAnimation={false}>minder</TextHeading>
          </div>
          <div className='mb-md flex flex-row gap-sm'>
            <TextSub showAnimation={false} className='font-semibold'>
              NextJS
            </TextSub>
            <TextSub showAnimation={false} className='font-semibold'>
              ShadCN
            </TextSub>
            <TextSub showAnimation={false} className='font-semibold'>
              MongoDB
            </TextSub>
          </div>
          <div className='flex items-center justify-end'>
            <TextBody showAnimation={false}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              nibh ligula, tempor sed elementum quis, sodales ac erat. Cras
              rhoncus volutpat lectus nec venenatis.
            </TextBody>
          </div>
        </div>
        <Link>View</Link>
      </div>
    </motion.div>
  );
};

export default Project;
