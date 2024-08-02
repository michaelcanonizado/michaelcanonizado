'use client';

import { useEffect, useState } from 'react';

import { ComponentBaseProps } from '@/types';
import { motion } from 'framer-motion';

import Card from '@/components/card';
import { TextBody, TextHeading, TextSub } from '@/components/text';
import VerifiedBadge from '@/../public/about/verified-badge';
import Image from 'next/image';

const GitCommit = ({ className }: ComponentBaseProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <circle cx='12' cy='12' r='3' />
      <line x1='3' x2='9' y1='12' y2='12' />
      <line x1='15' x2='21' y1='12' y2='12' />
    </svg>
  );
};
const MapPin = ({ className }: ComponentBaseProps) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='1'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <path d='M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0' />
      <circle cx='12' cy='10' r='3' />
    </svg>
  );
};

const ProfileCard = ({ className }: ComponentBaseProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [commitCount, setCommitCount] = useState(3048);

  const onMouseEnter = () => {
    console.log('Mouse enters card!!!');
    setIsHovered(true);
  };
  const onMouseLeave = () => {
    console.log('Mouse leaves card!!!');
    setIsHovered(false);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isHovered) {
      interval = setInterval(() => {
        setCommitCount(previousCount => previousCount + 1);
      }, 50);
    } else if (!isHovered && interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isHovered]);

  return (
    <a
      href='https://github.com/michaelcanonizado'
      target='_blank'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Card className={className}>
        <Card.Image>
          <Image
            fill
            className='object-cover'
            src='/about/card-image.png'
            alt='profile picture'
          />
        </Card.Image>
        <Card.Text>
          <div className='flex flex-row items-center justify-start'>
            <TextHeading showAnimation={false} className='text-brand'>
              mikey
            </TextHeading>
            <VerifiedBadge className='h-[24px]' />
          </div>

          <TextSub showAnimation={false} className='font-light tracking-widest'>
            @michaelcanonizado
          </TextSub>

          <div className='glex-row ml-[-2px] flex items-center'>
            <MapPin className='h-[16px] w-[16px]' />
            <TextSub
              showAnimation={false}
              className='font-light tracking-widest'
            >
              Albay, Philippines
            </TextSub>
          </div>

          <div className='mt-sm flex flex-row items-center gap-xs'>
            <GitCommit className='h-[20px] w-[20px]' />
            <TextSub showAnimation={false}>
              {commitCount.toLocaleString('en-US')} commits
            </TextSub>
          </div>
        </Card.Text>
      </Card>
    </a>
  );
};

export default ProfileCard;
