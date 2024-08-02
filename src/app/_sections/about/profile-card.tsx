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
      }, 100);
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
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className=''>
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
            <TextHeading className='text-brand'>mikey</TextHeading>
            <VerifiedBadge className='h-[24px]' />
          </div>

          <TextSub>@michaelcanonizado</TextSub>
          <div className='glex-row flex items-center gap-xs'>
            <GitCommit className='h-[20px] w-[20px]' />
            <TextSub>{commitCount} commits</TextSub>
          </div>
        </Card.Text>
      </Card>
    </div>
  );
};

export default ProfileCard;
