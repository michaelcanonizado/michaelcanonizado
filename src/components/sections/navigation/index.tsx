import Link from '@/components/ui/link';

const NavigationBar = () => {
  return (
    <header className='flex justify-center border-b-[1px]'>
      <nav className='container h-[64px] border-x-[1px]'>
        <div className='flex flex-row gap-md'>
          <Link>About</Link>
          <Link>Experience</Link>
          <Link>Projects</Link>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
