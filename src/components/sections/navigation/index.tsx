import { cn } from '@/lib/utils';
import { container } from '@/styles/container';

const NavigationBar = () => {
  return (
    <header className='flex justify-center border-b-[1px]'>
      <nav className={cn('h-[64px] border-x-[1px]', container)}>
        Navigation Bar
      </nav>
    </header>
  );
};

export default NavigationBar;
