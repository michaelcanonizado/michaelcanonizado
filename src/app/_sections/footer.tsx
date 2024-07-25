import { cn } from '@/lib/utils';
import { TextDisplay } from '@/components/ui/text';
import { ComponentBaseProps } from '@/types';
import { NameFirst } from '../../../public/name/name-first';

const Footer = ({ className }: ComponentBaseProps) => {
  return (
    <section
      className={cn(
        'section flex !w-[calc(100vw-18px)] flex-col justify-end bg-foreground !pb-0',
        className
      )}
    >
      <div className='px-md pb-md'>
        <NameFirst variant='white' />
      </div>
    </section>
  );
};

export default Footer;
