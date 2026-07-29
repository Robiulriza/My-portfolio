import React from 'react'
import Proj1 from '../assets/Proj1.png'
import Proj2 from '../assets/Proj2.png'
import Proj3 from '../assets/Proj3.png'

const Projects = () => {
    const projects = [
        {
            id: 1,
            image: Proj1,
            title: 'Concert Platform',
            desc: 'Modern Solution',
            tech: ['TailwindCSS', 'React'],
            link: 'https://first-project-vite.vercel.app'
        },
        {
            id: 2,
            image: Proj2,
            title: 'Pump Instagram',
            desc: 'Modern Solution',
            tech: ['HTML', 'Bootsrap'],
            link: 'https://instagram-nu-three-37.vercel.app/'
        },
        {
            id: 3,
            image: Proj3,
            title: 'Insurance Platform',
            desc: 'Modern Solution',
            tech: ['Html', 'TailwindCSS'],
            link: 'https://project-pacific.vercel.app/'
        },
    ]
    return (
        <section className='py-16 bg-gray-900' id='projects'>
            <div className='container mx-auto px-4 max-w-7xl'>
                <div className='text-center mb-10'>
                    <h2 className='text-4xl md:text-5xl font-extrabold text-white'>Project.</h2>
                    <div className='w-28 h-1 bg-primary mx-auto mt-2 mb-10'></div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {projects.map((project) => (
                            <div key={project.id} className='bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300'>
                                <img src={project.image} alt={project.title} className='w-full h-44 object-cover hover:opacity-90 transition-opacity duration-300' />
                                <div className='p-4'>
                                    <h3 className='text-lg font-semibold text-white group-hover:text-primary transition-colors '>{project.title}</h3>
                                    <p className='text-gray-400 text-sm mt-1'>
                                        {project.desc}
                                    </p>
                                    <div className='flex flex-wrap gap-1.5 mt-3'>
                                        {project.tech.map((tec, idx) => (
                                            <span key={idx} className='text-xs px-2 py-0.5 bg-gray-700 text-gray-300 rounded hover:bg-primary hover:text-white transition-colors duration-300'>
                                                {tec}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={project.link}
                                        target='_blank'
                                        rel='noreferrer'
                                        className='inline-flex items-center mt-4 text-sm font-medium text-primary hover:text-cyan-300 transition-colors duration-300'
                                    >
                                        View
                                    </a>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Projects
