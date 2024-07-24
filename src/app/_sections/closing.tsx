import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { TextBody, TextDisplay, TextHeading } from '@/components/ui/text';
import Card from '@/components/ui/card';

const Closing = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn('section min-h-[100vh] space-y-xl pt-[150px]', className)}
    >
      <div className='text-center'>
        <TextDisplay>{"LET'S DO SOMETHING AWESOME TOGETHER!"}</TextDisplay>
      </div>
      <div className='grid grid-cols-2'>
        <div className='relative'>
          <Card className='absolute bottom-[-50%] right-[50%] translate-x-[50%] rotate-[-10deg] scale-[1.1] opacity-[75%]' />
        </div>
        <div className='max-w-[450px] space-y-md'>
          <div>
            <TextHeading>
              {
                "I'd be exicted for a collaboration oppurtunity in your next venture."
              }
            </TextHeading>
          </div>
          <div>
            <TextBody>
              {"I'll bring your vision to life and make a difference!"}
            </TextBody>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Closing;
