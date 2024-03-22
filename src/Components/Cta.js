import React from 'react'
import { Link } from 'react-scroll';
import ctaTest from '../images/cta-banner.png'

const Cta = () => {
    return (
        <section className='py-12 z-20 relative'>
            <div className='container mx-auto px-4 sm:px-6 lg:max-w-6xl lg:px-8'>
                <div className='rounded-3xl	relative bg-[linear-gradient(264.28deg,_#dec7ff_0%,_#5c27fe_103%)]'>
                    <div className='relative p-7 z-[1]'>
                        <h4 className='text-white text-3xl	font-semibold mb-2'>Do you went Hire me?</h4>
                        <p className='text-white'>Ready to elevate your team with my skills in frontend development? <br />Let's discuss how I can contribute to your success.</p>

                        <Link to="contact" smooth={true} duration={500}>
                            <button className="py-0 px-7 h-[2.6em] mt-4 text-white transition-all duration-150 ease-in-out shadow-lg focus:outline-none font-size-[18px] inline-block outline-none border-none cursor-pointer will-change-[box-shadow,transform] bg-gradient-to-r from-[#89E5FF] to-[#5468FF] shadow-indigo-500/50 rounded-full hover:transform hover:-translate-y-1 hover:shadow-lg">
                                Reach Us
                            </button>
                        </Link>

                    </div>
                    <img className='static md:absolute right-[16px] top-[-90px] w-[360px]' src={ctaTest} alt="Hire a Web Developer" />
                </div>
            </div>
        </section>
    )
}

export default Cta
