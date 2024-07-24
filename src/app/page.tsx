import About from './_sections/about';
import Closing from './_sections/closing';
import Hero from './_sections/hero';
import Introduction from './_sections/introduction';
import Projects from './_sections/projects';
import Technologies from './_sections/technologies';

export default function Home() {
  return (
    <main className='container mx-auto mb-[100px] flex min-h-[5000px] flex-col items-center'>
      <Hero />
      <Introduction />
      <Projects />
      <About />
      <Technologies />
      <Closing />
    </main>
  );
}
