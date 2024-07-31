import { cn } from '@/lib/utils';
import { TextBody, TextHeading } from '@/components/ui/text';
import { ComponentBaseProps } from '@/types';
import { NameFirst } from '@/../public/name/';
import InfiniteSlider from '@/components/ui/infinite-slider';

const Footer = ({ className }: ComponentBaseProps) => {
  const headerColor = 'text-foreground';

  return (
    <section className={cn('w-full space-y-md', className)}>
      <InfiniteSlider className='' baseVelocity={-3}>
        <span className='mx-lg font-display text-[100px] font-bold group-hover:text-foreground-secondary'>
          michaelxaviercanonizado@gmail.com
        </span>
      </InfiniteSlider>
      <div className='flex flex-col justify-end bg-muted !py-0'>
        <div className='flex grow flex-row justify-between px-xl py-xl'>
          <div className='max-w-[500px]'>
            <TextHeading className={headerColor}>
              Creating a digital experience that bridge aesthetics and
              functionality
            </TextHeading>
          </div>
          <div className='flex flex-row gap-xl'>
            <div className='space-y-md'>
              <div className=''>
                <TextHeading className={headerColor}>Site Map</TextHeading>
              </div>
              <div className={headerColor}>
                <TextBody>About</TextBody>
                <TextBody>Projects</TextBody>
                <TextBody>Experience</TextBody>
              </div>
            </div>
            <div className='space-y-md'>
              <div className=''>
                <TextHeading className={headerColor}>Follow Me</TextHeading>
              </div>
              <div className={headerColor}>
                <TextBody>LinkedIn</TextBody>
                <TextBody>Github</TextBody>
                <TextBody>Discord</TextBody>
              </div>
            </div>
          </div>
        </div>
        <div className='px-md pb-md'>
          <NameFirst className='fill-brand' />
        </div>
      </div>
    </section>
  );
};

export default Footer;
