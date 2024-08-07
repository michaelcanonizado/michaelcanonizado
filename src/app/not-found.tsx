import Image from 'next/image';
import ExternalLink from '@/components/external-link';
import { TextDisplay, TextHeading, TextSub } from '@/components/text';

const NotFound = () => {
  return (
    <section className='grid h-screen w-screen place-items-center'>
      <div className='flex flex-col items-center text-center'>
        <div className='relative mb-[-8%] size-[75px] xs:size-[100px] sm:size-[150px] md:size-[200px]'>
          <Image
            fill
            objectFit='contain'
            src='/not-found/image.png'
            alt='Page not found'
          />
        </div>
        <div className='z-50 mb-sm md:mb-md'>
          <TextDisplay>Sorry</TextDisplay>
        </div>
        <div className='mb-md md:mb-lg'>
          <TextHeading>Page not found</TextHeading>
        </div>
        <ExternalLink href='/' target='_self'>
          <TextSub>Home</TextSub>
        </ExternalLink>
      </div>
    </section>
  );
};

export default NotFound;
