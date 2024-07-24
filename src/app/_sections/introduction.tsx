import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { TextBody, TextHeading } from '@/components/ui/text';
import Card from '@/components/ui/card';

const Introduction = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn(
        'section flex min-h-[80vh] items-center justify-center space-x-xl space-y-md border-y',
        className
      )}
    >
      <div className='rotate-[10deg]'>
        <Card />
      </div>
      <div className='max-w-[400px] space-y-md'>
        <div>
          <TextHeading>
            Looking for a developer who can create a visually appealing and
            fully functional website?
          </TextHeading>
        </div>
        <div className='my-lg'>
          <TextHeading>
            We'd be excited for a collaboration opportunity in your next
            venture.
          </TextHeading>
        </div>
        <div className='max-w-[700px]'>
          <TextBody>
            Your search ends here! With my knowledge in web development,
            you&apos;ll get a website that sets you apart!
          </TextBody>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
