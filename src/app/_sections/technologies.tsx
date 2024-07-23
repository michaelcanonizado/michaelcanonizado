import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { TextDisplay } from '@/components/ui/text';
import Badge from '@/components/ui/badge';
import Image from 'next/image';

const Technologies = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn(
        'min-h-[40vh] w-full space-y-lg border bg-foreground px-lg py-xl',
        className
      )}
    >
      <div className='flex flex-row items-center justify-center'>
        <TextDisplay className='text-background'>Technologies</TextDisplay>
      </div>
      <div className='flex flex-row gap-md'>
        <Badge className='text-background'>
          <Badge.Image>
            <div className='h-full w-full rounded-full bg-background' />
          </Badge.Image>
          <Badge.Title>NextJS</Badge.Title>
        </Badge>
        <Badge className='text-background'>
          <Badge.Image>
            <div className='h-full w-full rounded-full bg-background' />
          </Badge.Image>
          <Badge.Title>Typescript</Badge.Title>
        </Badge>
      </div>
    </section>
  );
};

export default Technologies;
