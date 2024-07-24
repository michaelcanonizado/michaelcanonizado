import { TextDisplay } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';

const Footer = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn('section space-y-xl bg-slate-300 pt-[150px]', className)}
    >
      <div className=''>
        <TextDisplay>Footer</TextDisplay>
      </div>
    </section>
  );
};

export default Footer;
