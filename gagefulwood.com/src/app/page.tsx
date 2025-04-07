import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './about';
import Projects from './projects';
import Footer from './components/footer';
import Contact from './contact';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  );
}