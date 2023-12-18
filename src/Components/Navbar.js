import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
      };

    return (
        <nav className="z-30 w-4/5 sticky top-0 mx-auto block rounded-b-3xl p-4 backdrop-blur-md border-solid border-2 border-slate-600">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-xl cursor-pointer">
                        <Link to="home" smooth={true} duration={500} className='cursor-pointer'> Portfolio</Link>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <Link to="skills" smooth={true} duration={500} className='text-white hover:text-gray-300 focus-visible:outline-none cursor-pointer'>
                            Skills
                        </Link>
                        <Link to="experience" smooth={true} duration={500} className='text-white hover:text-gray-300 focus-visible:outline-none cursor-pointer'>
                            Experience
                        </Link>
                        <Link to="projects" smooth={true} duration={500} className='text-white hover:text-gray-300 focus-visible:outline-none cursor-pointer'>
                            Projects
                        </Link>
                        <Link to="about" smooth={true} duration={500} className='text-white hover:text-gray-300 focus-visible:outline-none cursor-pointer'>
                            About
                        </Link>
                        <Link to="contact" smooth={true} duration={500} className='text-white hover:text-gray-300 focus-visible:outline-none cursor-pointer'>
                            Contact
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button className="text-white" onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="h-6 w-6 transition-transform transform"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="h-6 w-6 transition-transform transform rotate-180"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden mt-2">
                        <Link to="skills" onClick={closeMobileMenu} smooth={true} duration={500} className='block text-white py-2'>
                            Skills
                        </Link>
                        <Link to="experience" onClick={closeMobileMenu} smooth={true} duration={500} className='block text-white py-2'>
                            Experience
                        </Link>
                        <Link to="projects" onClick={closeMobileMenu} smooth={true} duration={500} className='block text-white py-2'>
                            Projects
                        </Link>
                        <Link to="about" onClick={closeMobileMenu} smooth={true} duration={500} className='block text-white py-2'>
                            About
                        </Link>
                        <Link to="contact" onClick={closeMobileMenu} smooth={true} duration={500} className='block text-white py-2'>
                            Contact
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
