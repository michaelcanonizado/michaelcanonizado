import Hero from './_sections/hero';
import Introduction from './_sections/introduction';
import Projects from './_sections/projects';

export default function Home() {
  return (
    <main className='mb-[100px] flex min-h-[5000px] flex-col items-center px-md'>
      <Hero />
      <Introduction />
      <Projects />
    </main>
  );
}
