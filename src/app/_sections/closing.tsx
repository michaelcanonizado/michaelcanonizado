import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { TextDisplay } from '@/components/ui/text';
import Card from '@/components/ui/card';

const Closing = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn(
        'max-height relative mb-2xl mt-2xl flex w-full flex-row items-center justify-center gap-xl overflow-hidden border-y',
        className
      )}
    >
      <div className='absolute inset-0 z-0'>
        <Card className='absolute left-[12%] top-[-6%] h-[20vw] min-h-[250px] w-[14vw] min-w-[175px] rotate-[10deg] scale-[1.5] opacity-[60%]' />
        <Card className='absolute right-[12%] top-[-5%] h-[20vw] min-h-[250px] w-[14vw] min-w-[175px] rotate-[-10deg] scale-[1.5] opacity-[60%]' />
        <Card className='absolute bottom-[-2%] left-[5%] h-[14vw] min-h-[175px] w-[20vw] min-w-[250px] rotate-[-5deg] scale-[1.5] opacity-[60%]' />
        <Card className='absolute bottom-[-2%] right-[5%] h-[14vw] min-h-[175px] w-[20vw] min-w-[250px] rotate-[5deg] scale-[1.6] opacity-[60%]' />
      </div>
      <div className='z-10 max-w-[1000px] text-center'>
        <TextDisplay>
          {"I'LL BRING YOUR VISION TO LIFE AND MAKE A DIFFERENCE!"}
        </TextDisplay>
      </div>
    </section>
  );
};

export default Closing;
