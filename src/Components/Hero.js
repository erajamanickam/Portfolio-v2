import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section className="bg-[url('images/hero-bg.png')] bg-no-repeat	bg-cover text-white flex flex-col justify-center items-center z-20 relative" id='home'>
            <div className="mx-auto py-[8rem] px-4 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
                <p className="text-lg mb-4">
                    Hey, I'm Invite a
                </p>
                <h1 className="text-[2.25rem] leading-snug font-bold mb-8 animate__animated animate__heartBeat">Without using <span className='bg-gradient-to-l from-red-600 to-violet-600 text-transparent bg-clip-text'>Custom CSS</span> <br />Tailwind Portfolio</h1>

                <Link to="about" smooth={true} duration={500}>
                    <button className="py-0 px-7 h-[2.6em] transition-all duration-150 ease-in-out shadow-lg focus:outline-none font-size-[18px] inline-block outline-none border-none cursor-pointer will-change-[box-shadow,transform] bg-gradient-to-r from-[#89E5FF] to-[#5468FF] shadow-indigo-500/50 rounded-full hover:transform hover:-translate-y-1 hover:shadow-lg">
                        Explore More
                    </button>
                </Link>


            </div>
        </section>
    );
};

export default Hero;
