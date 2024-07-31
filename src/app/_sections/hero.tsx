import { NameFirst, NameLast } from '../../../public/name/';
import { TextBody, TextHeading } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';

const Hero = ({ className }: ComponentBaseProps) => {
  return (
    <section className={cn('container !mt-0 !pt-0', className)}>
      <div className='max-height flex w-full flex-col justify-end pb-md text-center'>
        <div className='flex grow flex-col items-center justify-center space-y-md'>
          <div className='max-w-[25ch]'>
            <TextHeading showAnimation={false}>
              creator. storyteller. web developer.
            </TextHeading>
          </div>
          <div>
            <TextBody showAnimation={false}>
              Creating a digital experience that bridge aesthetics and
              functionality
            </TextBody>
          </div>
        </div>
        <div className='md:ml-[calc(52.5%-50vw)] md:mr-[calc(52.5%-50vw)]'>
          <NameFirst className='fill-brand' />
        </div>
      </div>
      <div className=''>
        <div className='md:ml-[calc(52.5%-50vw)] md:mr-[calc(52.5%-50vw)]'>
          <NameLast className='fill-brand' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
