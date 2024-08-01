import { TextHeading, TextSub } from '@/components/text';
import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import Image from 'next/image';
import VerifiedBadge from '@/../public/about/verified-badge';

const Card = ({ className }: ComponentBaseProps) => {
  return (
    <div
      className={cn(
        'relative h-[500px] w-[350px] space-y-md rounded-lg border bg-muted/20 p-lg backdrop-blur-md',
        className
      )}
    >
      <div className='relative aspect-square w-full overflow-hidden rounded-lg'>
        <Image
          className='object-cover'
          fill
          src='/about/profile-picture.png'
          alt=' profile picture'
        />
      </div>
      <div className=''>
        <div className='flex flex-row items-center justify-start'>
          <TextHeading className='text-brand'>mikey</TextHeading>
          <VerifiedBadge className='h-[24px]' />
        </div>
        <div className=''>
          <TextSub>@michaelcanonizado</TextSub>
        </div>
      </div>
    </div>
  );
};

export default Card;
