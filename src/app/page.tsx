import Hero from './_sections/hero';
import Introduction from './_sections/introduction';
import About from './_sections/about';
import Projects from './_sections/projects';
import Technologies from './_sections/technologies';
import Closing from './_sections/closing';
import Footer from './_sections/footer';
import Experience from './_sections/experience';
import NavigationBar from './_sections/navigation-bar';

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main className='flex flex-col items-center'>
        <Hero />
        <Introduction />
        <Projects />
        <About />
        <Technologies />
        <Experience />
        <Closing />
        <Footer />
      </main>
    </>
  );
}
