import React from 'react';
import doctoruiIcon from '../images/doctorui-icon.png'
import loginuiIcon from '../images/login-icon.png'
import dashboarduiIcon from '../images/dashboardui-icon.png'
import bloguiIcon from '../images/blogui-icon.png'
import { UilAngleDoubleRight } from '@iconscout/react-unicons'


const Projects = () => {
    const projects = [
        {
            id: 1,
            icon: doctoruiIcon,
            title: 'Doctor Appointment',
            description: 'A doctor appointment app can help doctors to manage their patients...',
            link: 'https://example.com/project1',
        },
        {
            id: 2,
            icon: bloguiIcon,
            title: 'Blog Application Node',
            description: 'Web application that allows users to create, manage, and publish their own...',
            link: 'https://github.com/erajamanickam/blog-application-nodejs',
        },
        {
            id: 3,
            icon: dashboarduiIcon,
            title: 'React Dashboard',
            description: 'Developed to streamline task management within agile teams...',
            link: 'https://github.com/erajamanickam/Task-Management-Dashboard',
        },
        {
            id: 4,
            icon: loginuiIcon,
            title: 'Glossy Login UI',
            description: 'A login screen is a user interface that is displayed when a user...',
            link: 'https://codepen.io/erajamanickam/pen/NWeRZzx',
        },
        // Add more projects as needed
    ];

    return (
        <section className="py-12 z-20 relative" id='projects'>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-white text-center mb-4 animate__animated animate__jackInTheBox">Projects</h2>
                <p className="text-lg text-gray-400 mb-8 text-center">
                    Explore my personal project, a dynamic and interactive <a href="https://github.com/erajamanickam" target="_blank" className='text-[#61DAFB] hover:text-white mr-2' rel="noopener noreferrer">Github</a>that showcases my skills in React, Node.js, and responsive UI design. Witness firsthand how I merge creativity with technology to craft a seamless and engaging user experience.
                </p>
                <div className="flex flex-wrap -mx-4">
                    {projects.map((project) => (
                        <div key={project.id} className="w-full md:w-1/2 px-4 mb-8 mx-auto">
                            <div className="bg-[#ffffff0d] p-6 border-solid border border-slate-600 rounded-lg shadow-md flex items-center flex-col md:flex-row">
                                <div className="md:mr-6 mr-0 w-2/5 md:w-2/5">
                                    <img src={project.icon} alt={`Icon for ${project.title}`} className="w-full h-full" />
                                </div>
                                <div className='w-3/2 md:w-3/2 md:text-left text-center'>
                                    <h3 className="text-xl text-white font-semibold mb-2">{project.title}</h3>
                                    <p className="text-slate-400">{project.description}</p>
                                    <a href={project.link} className="text-[#61DAFB] hover:text-white flex mt-1 md:justify-start justify-center" target='_blank'>Know More <UilAngleDoubleRight size="28" /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
