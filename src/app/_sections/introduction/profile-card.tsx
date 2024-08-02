'use client';

import { useEffect, useState } from 'react';

import { ComponentBaseProps } from '@/types';
import { motion } from 'framer-motion';

import Card from '@/components/card';
import { TextBody, TextHeading, TextSub } from '@/components/text';
import VerifiedBadge from '@/../public/about/verified-badge';
import Image from 'next/image';

const ProfileCard = ({ className }: ComponentBaseProps) => {
  return (
    <a href='https://github.com/michaelcanonizado' target='_blank'>
      <Card className={className}>
        <Card.Image>
          <Image
            fill
            className='object-cover'
            src='/introduction/card-image.png'
            alt='profile picture'
          />
        </Card.Image>
        <Card.Text>
          <div className='flex flex-row items-center justify-start'>
            <TextHeading className='text-brand'>mikey</TextHeading>
            <VerifiedBadge className='h-[24px]' />
          </div>

          <TextSub className='font-light tracking-widest'>
            @michaelcanonizado
          </TextSub>
        </Card.Text>
      </Card>
    </a>
  );
};

export default ProfileCard;
