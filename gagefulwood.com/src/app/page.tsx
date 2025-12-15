import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './about/page';
import Projects from './projects/page';
import Footer from './components/footer';
import Contact from './contact/page';

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