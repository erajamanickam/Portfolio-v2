import React, { useEffect } from 'react';
import 'animate.css';
import { BrowserRouter as Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
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


// ReactGA.initialize('G-P52FG9L651');


function App() {

  // const TrackPageViews = () => {
  //   const location = useLocation();
  //   useEffect(() => {
  //     ReactGA.pageview(location.pathname);
  //     console.log('GA Processed');
  //   }, [location]);
  //   return null;
  // };

  return (
    <>
      <div className='bg-slate-800'>
        {/* <TrackPageViews /> */}
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
    </>
  );
}

export default App;
