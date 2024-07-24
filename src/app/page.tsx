import Hero from './_sections/hero';
import Introduction from './_sections/introduction';
import About from './_sections/about';
import Projects from './_sections/projects';
import Technologies from './_sections/technologies';
import Closing from './_sections/closing';
import Footer from './_sections/footer';

export default function Home() {
  return (
    <main className='container mx-auto flex min-h-[5000px] flex-col items-center'>
      <Hero />
      <Introduction />
      <Projects />
      <About />
      <Technologies />
      <Closing />
      <Footer />
    </main>
  );
}
