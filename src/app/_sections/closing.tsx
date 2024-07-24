import { cn } from '@/lib/utils';
import { TextBody, TextDisplay, TextHeading } from '@/components/ui/text';
import { ComponentBaseProps } from '@/types';

const Closing = ({ className }: ComponentBaseProps) => {
  return (
    <section className={cn('section min-h-[80vh] space-y-xl', className)}>
      <div className='text-center'>
        <TextDisplay>{"LET'S DO SOMETHING AWESOME TOGETHER!"}</TextDisplay>
      </div>
      <div className='grid grid-cols-2'>
        <div className=''></div>
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
