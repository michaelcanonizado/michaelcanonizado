import { ComponentBaseProps } from '@/types';

import Card from '@/components/card';
import { TextHeading, TextSub } from '@/components/text';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Username from '@/../public/introduction/username';

const Check = ({ className }: ComponentBaseProps) => {
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
      <path d='M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z' />
    </svg>
  );
};

const ProfileCard = ({ className }: ComponentBaseProps) => {
  const textList = ['Responsive Design', 'Beautiful UI', 'High SEO'];

  return (
    <a href='https://www.linkedin.com/in/michaelcanonizado/' target='_blank'>
      <Card className={cn('space-y-0 bg-background/20', className)}>
        <Card.Image>
          <Image
            fill
            className='object-cover'
            src='/introduction/card-image.png'
            alt='profile picture'
          />
        </Card.Image>
        <Card.Text className=''>
          <div className='py-sm'>
            <Username />
          </div>
          <div className='flex flex-col gap-[2px]'>
            {textList.map((text, index) => {
              return (
                <div className='flex flex-row items-center gap-xs' key={index}>
                  <Check className='h-[18px] w-[18px] stroke-brand' />
                  <TextSub showAnimation={false} className='mb-[-4px]'>
                    {text}
                  </TextSub>
                </div>
              );
            })}
          </div>
        </Card.Text>
      </Card>
    </a>
  );
};

export default ProfileCard;
