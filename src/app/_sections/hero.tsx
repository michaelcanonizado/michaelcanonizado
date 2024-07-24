import HeroNameFull from '../../../public/hero/hero-name-full';
import HeroNameFirst from '../../../public/hero/hero-name-first';
import HeroNameLast from '../../../public/hero/hero-name-last';
import { TextBody, TextHeading } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';

const Hero = ({ className }: ComponentBaseProps) => {
  return (
    <section className={cn('pb-xl', className)}>
      <div className='section flex w-full flex-col justify-end pb-md text-center'>
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
          <HeroNameFirst />
        </div>
      </div>
      <div className=''>
        <div className='md:ml-[calc(52.5%-50vw)] md:mr-[calc(52.5%-50vw)]'>
          <HeroNameLast />
        </div>
      </div>
    </section>
  );
};

export default Hero;
