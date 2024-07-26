import { NameFirst, NameLast } from '../../../public/name/';
import { TextBody, TextHeading } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';

const Hero = ({ className }: ComponentBaseProps) => {
  return (
    <section className={cn('container !mt-0 !pt-0', className)}>
      <div className='max-height flex w-full flex-col justify-end pb-md text-center'>
        <div className='flex grow flex-col items-center justify-center space-y-md'>
          <div className='space-y-[-8px]'>
            <div>
              <TextHeading>creator.</TextHeading>
            </div>
            <div>
              <TextHeading>storyteller.</TextHeading>
            </div>
            <div>
              <TextHeading>web developer.</TextHeading>
            </div>
          </div>
          <div>
            <TextBody>
              Creating a digital experience that bridge aesthetics and
              functionality
            </TextBody>
          </div>
        </div>
        <div className='md:ml-[calc(52.5%-50vw)] md:mr-[calc(52.5%-50vw)]'>
          <NameFirst className='fill-foreground' />
        </div>
      </div>
      <div className=''>
        <div className='md:ml-[calc(52.5%-50vw)] md:mr-[calc(52.5%-50vw)]'>
          <NameLast className='fill-foreground' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
