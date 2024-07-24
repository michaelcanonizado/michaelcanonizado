import HeroName from '@/../public/hero-name';
import { TextBody, TextDisplay, TextHeading } from '@/components/ui/text';

const Hero = () => {
  return (
    <section className='mb-xl flex h-[calc(100vh-64px)] min-h-[600px] w-full flex-col justify-end pb-md text-center'>
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
        <HeroName />
      </div>
    </section>
  );
};

export default Hero;
