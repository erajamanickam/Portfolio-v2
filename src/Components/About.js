import React from 'react';
import videoThumb from '../../src/images/about-thumb.jpg'

const About = () => {
    return (
        <section className="py-12 z-20 relative" id='about'>
            <div className="container mx-auto px-4">
                <div className="w-11/12 md:w-full mx-auto text-center mb-4 md:mb-8">
                <h2 className="text-3xl font-bold text-white mb-4 text-center animate__animated animate__jackInTheBox">About Me</h2>
                    <p className='text-gray-400 font-semibold text-center md:text-justify text-lg md:text-xl mb-4'>Hello, I'm <span className='bg-gradient-to-l from-red-400 to-violet-400 text-transparent bg-clip-text'>Rajamanickam</span>, a Web Application Developer with over 3 years of hands-on experience. My expertise lies in crafting dynamic user interfaces using technologies like React, Node.js, and popular CSS frameworks such as Tailwind CSS and Bootstrap. Primary focus has been on translating UX designs into polished UI implementations with functionality. My journey in the tech world has taken me through diverse sectors, including Banking, Education, Ecommerce, Hospital, and Agency domains.</p>
                    <p className='text-gray-400 font-semibold text-center md:text-justify text-lg md:text-xl mb-4'>Throughout my career, I've honed my abilities to create scalable and interactive applications that cater to the unique needs of each industry. I bring a passion for clean code and an eye for detail to ensure that the solutions I deliver exceed expectations.</p>
                </div>
                <div className="w-w-1/3 md:w-full px-4 mb-2 md:mb-8">
                    <img
                        src={videoThumb}
                        alt="About Rajamanickam | Frontend Developer"
                        className="w-full h-auto shadow-md [clip-path:polygon(22.2%_0%,100%_0%,100%_100%,0%_100%,_0_18.3%)]"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
