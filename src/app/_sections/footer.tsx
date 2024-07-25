import { cn } from '@/lib/utils';
import { TextDisplay } from '@/components/ui/text';
import { ComponentBaseProps } from '@/types';

const Footer = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn(
        'section flex !w-[calc(100vw-17px)] flex-col justify-end space-y-xl overflow-hidden',
        className
      )}
    >
      <div className='group border-y py-[-32px] hover:cursor-pointer hover:bg-foreground'>
        <TextDisplay className='translate-x-[-75%] text-[200px] group-hover:text-foreground-secondary'>
          michaelxaviercanonizado@gmail.com
        </TextDisplay>
      </div>
    </section>
  );
};

export default Footer;
