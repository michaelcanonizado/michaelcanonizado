import { container } from '@/styles/container';

const NavigationBar = () => {
  return (
    <header className='flex justify-center border-b-[1px]'>
      <nav className={container + ' h-[64px] border-x-[1px]'}>
        Navigation Bar
      </nav>
    </header>
  );
};

export default NavigationBar;
