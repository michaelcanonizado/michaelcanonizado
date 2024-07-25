import { cn } from '@/lib/utils';
import { TextBody, TextDisplay, TextHeading } from '@/components/ui/text';
import { ComponentBaseProps } from '@/types';
import { NameFirst } from '../../../public/name/name-first';

const Footer = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn(
        'flex !w-[calc(100vw-18px)] flex-col justify-end bg-foreground !py-0',
        className
      )}
    >
      <div className=''>
        <div className='flex grow flex-row justify-between px-lg py-xl'>
          <div className='max-w-[500px]'>
            <TextHeading className='text-background'>
              Creating a digital experience that bridge aesthetics and
              functionality
            </TextHeading>
          </div>
          <div className='flex flex-row gap-xl border'>
            <div className='space-y-md'>
              <div className=''>
                <TextHeading className='text-background'>Site Map</TextHeading>
              </div>
              <div className='text-background'>
                <TextBody>About</TextBody>
                <TextBody>Projects</TextBody>
                <TextBody>Experience</TextBody>
              </div>
            </div>
            <div className='space-y-md'>
              <div className=''>
                <TextHeading className='text-background'>Follow Me</TextHeading>
              </div>
              <div className='text-background'>
                <TextBody>LinkedIn</TextBody>
                <TextBody>Github</TextBody>
                <TextBody>Discord</TextBody>
              </div>
            </div>
          </div>
        </div>
        <div className='px-md pb-md'>
          <NameFirst variant='white' />
        </div>
      </div>
    </section>
  );
};

export default Footer;
