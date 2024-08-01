import { cn } from '@/lib/utils';
import { ComponentBaseProps } from '@/types';
import { TextBody } from '@/components/text';

const NavLink = ({ className, children }: ComponentBaseProps) => {
  return (
    <TextBody
      showAnimation={false}
      className={cn('font-display font-[500] hover:cursor-pointer', className)}
    >
      {children}
    </TextBody>
  );
};

const NavigationBar = ({ className }: ComponentBaseProps) => {
  return (
    <header className={cn('flex flex-row justify-center', className)}>
      <nav
        className={cn(
          'container !my-0 flex h-[64px] flex-row items-center justify-between bg-transparent !py-0 text-foreground'
        )}
      >
        <div>
          <TextBody
            showAnimation={false}
            className='font-display font-bold text-brand'
          >
            Logo
          </TextBody>
        </div>
        <div className='flex flex-row gap-md'>
          <NavLink className=''>about</NavLink>
          <NavLink className=''>experience</NavLink>
          <NavLink className=''>projects</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
