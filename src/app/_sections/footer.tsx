import { TextDisplay } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';

const Footer = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn(
        'section !w-[calc(100vw-17px)] space-y-xl bg-slate-300',
        className
      )}
    >
      <div className=''>
        <TextDisplay>Footer</TextDisplay>
      </div>
    </section>
  );
};

export default Footer;
