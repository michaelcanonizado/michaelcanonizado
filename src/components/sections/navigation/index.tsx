import Link from '@/components/ui/link';

const NavigationBar = () => {
  return (
    <header className='flex justify-center border-b-[1px]'>
      <nav className='container flex h-[64px] flex-row items-center justify-between border-x-[1px]'>
        <div className=''>
          <h1>Logo</h1>
        </div>
        <div className='flex flex-row gap-md text-muted-foreground'>
          <Link>About</Link>
          <Link>Experience</Link>
          <Link>Projects</Link>
        </div>
        <div className=''>
          <h1>O</h1>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
