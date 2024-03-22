import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import PositionBg from './PositionBg';
import Experience from './Experience';
import Skills from './Skills';
import Footer from './Footer';
import Cta from './Cta';
import Contact from './Contact';
import Video from './Video';
import About from './About';
import Projects from './Projects';

const Homepage = () => {
    return (
        <>
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
        </>
    )
}

export default Homepage
