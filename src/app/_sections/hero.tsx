import HeroName from '@/../public/hero-name';
import { TextBody, TextDisplay } from '@/components/ui/text';

const Hero = () => {
  return (
    <section className='mb-xl flex h-[calc(100vh-64px)] min-h-[600px] w-full flex-col justify-end pb-md text-center'>
      <div className='flex grow flex-col items-center justify-center space-y-md'>
        <div className='space-y-[-8px]'>
          <div>
            <TextDisplay>creator.</TextDisplay>
          </div>
          <div>
            <TextDisplay>storyteller.</TextDisplay>
          </div>
          <div>
            <TextDisplay>web developer.</TextDisplay>
          </div>
        </div>
        <div>
          <TextBody>
            Creating a digital experience that bridge aesthetics and
            functionality
          </TextBody>
        </div>
      </div>
      <div className='ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] px-[24px] md:px-[40px]'>
        <HeroName />
      </div>
    </section>
  );
};

export default Hero;
