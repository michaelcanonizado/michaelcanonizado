import { TextDisplay } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';

const Footer = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn('section min-h-[100vh] space-y-xl pt-[150px]', className)}
    >
      <div className=''>
        <TextDisplay>Footer</TextDisplay>
      </div>
    </section>
  );
};

export default Footer;
