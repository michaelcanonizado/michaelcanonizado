import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { TextBody, TextDisplay, TextHeading } from '@/components/ui/text';

const Picture = () => {
  return (
    <div className='overflow-hidden rounded-xl'>
      <div className='h-[600px] w-[500px] bg-foreground' />
    </div>
  );
};

const About = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn(
        'section flex min-h-[80vh] flex-col items-center space-y-xl !pb-lg',
        className
      )}
    >
      <div>
        <TextDisplay className='text-center'>About</TextDisplay>
      </div>

      <div className='grid grid-cols-2 gap-xl'>
        <Picture />
        <div className='max-w-[450px] space-y-md'>
          <div className='mb-lg'>
            <TextHeading>Who am I?</TextHeading>
          </div>
          <TextBody>
            Hi there, I'm Michael (you can call me Mikey!). I am a self-taught
            web developer based in the Philippines.
          </TextBody>
          <TextBody>
            I love building websites that are user-friendly, aesthetic, and
            functional. I am a 2nd year Computer Science student with 4 years of
            experience in web development.
          </TextBody>
          <TextBody>
            I'm here to transform your ideas into a website that elevates your
            business. My strong work ethic and discipline set me apart as a
            developer you can rely on.
          </TextBody>
        </div>
      </div>
    </section>
  );
};

export default About;
