import HeroName from '@/../public/hero-name';
import { TextBody, TextDisplay } from '@/components/ui/text';

const Hero = () => {
  return (
    <section className='mb-xl flex h-[calc(100vh-64px)] min-h-[600px] w-full flex-col justify-end overflow-hidden pb-md text-center'>
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
      <div>
        <HeroName />
      </div>
    </section>
  );
};

export default Hero;

{
  /* <div className='mb-lg'>
          <div className='size-[72px] rounded-full bg-foreground' />
        </div>
        <div className='mb-[-16px]'>
          <p className='font-bold'>Hello! I&apos;m Michael</p>
        </div>
        <div className='text-display mb-lg flex flex-col items-center'>
          <h1 className=''>CREATOR.</h1>
          <h1 className=''>STORYTELLER.</h1>
          <h1 className='text-brand'>WEB DEVELOPER.</h1>
        </div>
        <div className=''>
          <p className='font-bold'>
            Creating a digital experience that bridge aesthetics and
            functionality
          </p>
        </div> */
}

{
  /* <div className='text-sub container !m-0 grid h-[64px] grid-cols-3 border-b border-t bg-background !py-0'>
        <div className='flex items-center justify-start'>
          <p className=''>{'// Code & Engage'}</p>
        </div>
        <div className='flex items-center justify-center space-x-md'>
          <p className=''>Link</p>
          <p className=''>Link</p>
          <p className=''>Link</p>
        </div>
        <div className='flex items-center justify-end'>
          <p className=''>michaelxaviercanonizado@gmail.com</p>
        </div>
      </div> */
}
