import 'animate.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import PositionBg from './Components/PositionBg';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import Cta from './Components/Cta';
import Contact from './Components/Contact';
import Video from './Components/Video';
import About from './Components/About';
import Projects from './Components/Projects';


function App() {
  return (
    <div className='bg-slate-800'>
      <PositionBg />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Video />
      <Cta />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
