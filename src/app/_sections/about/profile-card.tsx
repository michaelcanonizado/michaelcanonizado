import { ComponentBaseProps } from '@/types';

import { TextHeading, TextSub } from '@/components/text';
import Card from '@/components/card';
import VerifiedBadge from '@/../public/about/verified-badge';
import Image from 'next/image';

const ProfileCard = ({ className }: ComponentBaseProps) => {
  return (
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
        <div className=''>
          <TextSub>@michaelcanonizado</TextSub>
        </div>
      </Card.Text>
    </Card>
  );
};

export default ProfileCard;
