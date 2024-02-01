// Experience.js
import React from 'react';
import logoEt from '../../src/images/et-logo.png'
import logoWwt from '../../src/images/wwt-logo.png'
import logoXgo from '../../src/images/xgo-logo.png'
import { UilLocationPoint, UilClock } from '@iconscout/react-unicons'

const Experience = () => {
    const experiencesData = [
        {
            logo: logoXgo,
            duration: 'Mar 2022 - Present',
            position: 'Sr. Associate Developer',
            companyName: 'Xerago',
            location: 'Chennai',
        },
        {
            logo: logoWwt,
            duration: 'Jun 2021 - Jan 2022',
            position: 'Web Developer',
            companyName: 'Wisewebtek',
            location: 'Chennai',
        },
        {
            logo: logoEt,
            duration: 'Jul 2020 - Jun 2021',
            position: 'Junior Developer',
            companyName: 'Ethoughtz Technology',
            location: 'Tirunelveli',
        }
    ];

    return (
        <section className="py-12 z-20 relative" id='experience'>
            <div className="container mx-auto px-4 sm:px-6 lg:max-w-6xl lg:px-8">
                <h2 className="text-3xl font-bold text-white mb-8 text-center animate__animated animate__jackInTheBox">Work Experience</h2>
                <div className="flex flex-wrap">
                    {experiencesData.map((experience, index) => (
                        <div key={index} className="hover:border-indigo-400	border-2 rounded-2xl border-slate-700 flex-shrink-0 w-full md:w-11/12 mx-auto mb-4">
                            <div className="bg-sky-950 p-4 rounded-2xl shadow-md mx-auto w-full flex flex-wrap">
                                <div className='sm:w-1/4 md:w-1/4 lg:w-1/4 w-full flex justify-center md:mb-0 mb-3'>
                                    <img
                                        src={experience.logo}
                                        alt={`${experience.companyName} Logo`}
                                        className="rounded-full"
                                    />
                                </div>
                                <h3 className="text-xl md:text-xl text-white md:text-left text-center font-semibold mb-2 sm:w-1/4 md:w-1/4 lg:w-1/4 w-full justify-center self-center">{experience.position}<span className='block text-slate-400 text-base'>{experience.companyName}</span></h3>
                                <p className="text-white font-semibold mb-2 sm:w-1/4 md:w-1/4 lg:w-1/4 w-full text-lg md:text-lg flex justify-center self-center items-center "><UilClock size="23" className='text-gray-400 mr-2' /> {experience.duration}</p>
                                <p className="text-lg text-gray-400 sm:w-1/4 md:w-1/4 lg:w-1/4 w-full self-center flex justify-center items-center"><UilLocationPoint size="23" className='text-gray-400 mr-1' /> {experience.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
