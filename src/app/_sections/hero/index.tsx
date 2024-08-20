import { NameFirst, NameLast } from '@/../public/name/';
import { TextBody, TextHeading } from '@/components/text';
import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';

const Hero = ({ className }: ComponentBaseProps) => {
  return (
    <section className={cn('container !mt-0 mb-xl !pt-0', className)}>
      <div className='flex min-h-[calc(100dvh-144px)] w-full flex-col justify-end pb-md text-center md:min-h-[calc(100dvh-72px)]'>
        <div className='flex grow flex-col items-center justify-center space-y-md'>
          <div>
            <TextHeading showAnimation={false} className='flex flex-col'>
              <span className='leading-[inherit]'>creator.</span>
              <span className='leading-[inherit]'>storyteller.</span>
              <span className='leading-[inherit]'>web developer.</span>
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
