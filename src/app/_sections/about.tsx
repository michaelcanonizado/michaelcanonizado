import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { TextBody, TextDisplay, TextHeading } from '@/components/ui/text';

const Picture = () => {
  return (
    <div className='overflow-hidden rounded-xl'>
      <div className='h-[700px] w-[550px] bg-foreground' />
    </div>
  );
};

const About = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn(
        'max-height container flex flex-col items-center space-y-lg',
        className
      )}
    >
      <div>
        <TextDisplay className='text-center'>About</TextDisplay>
      </div>

      <div className='grid grid-cols-[1fr_auto_1fr] gap-lg'>
        <div className='flex flex-col items-end justify-center gap-lg text-end'>
          <TextHeading>
            Hi there, I'm Michael (you can call me Mikey!). I am a self-taught
            web developer based in the Philippines.
          </TextHeading>
          <TextBody>
            I am a 2nd year Computer Science student with 4 years of experience
            in web development.
          </TextBody>
        </div>
        <Picture />
        <div className='flex flex-col items-start justify-center gap-md'>
          <TextBody>
            I love building websites that are user-friendly, aesthetic, and
            functional.
          </TextBody>
          <TextBody>
            I'm here to transform your ideas into a website that elevates your
            business. My strong work ethic and discipline set me apart as a
            developer you can rely on!
          </TextBody>
        </div>
      </div>
    </section>
  );
};

export default About;
