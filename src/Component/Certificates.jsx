import { Award, Calendar, ExternalLink, ShieldCheck } from 'lucide-react'
import React from 'react'

const Certificates = () => {
    const certifications = [
        {
            id: 1,
            title: 'National Skills Development Authority',
            issue: 'Web Design and Development for Freelancing (Level-3)',
            date: 'July 2026',
            link: '#',
            desc: 'NSDA Certified Professional Web Designer | Specializing in Responsive Web Design Customization',

        }
    ]
    return (
        <section className='text-white py-20' id='certificates'>
            <div className='max-w-7xl mx-auto lg:px-16'>
                <div className='mb-16'>
                    <p className='text-primary text-sm uppercase tracking-widest mb-2 font-semibold'>Achievement</p>
                    <h2 className='text-4xl md:text-5xl font-extrabold text-white'>
                        Certifications.
                    </h2>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {certifications.map((cert) => (
                        <div
                            key={cert.id}
                            data-aos='zoom-in'
                            className='group relative bg-[#111a3e] border border-[#1f1641] p-6 rounded-2xl transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]'
                        >
                            <div className='absolute -top-4 -right-4 bg-primary p-3 rounded-xl shadow-lg transform group-hover:rotate-12 transition-transform'>
                                <Award className='text-white' size={20} />
                            </div>

                            <h3 className='text-xl font-bold mb-2 group-hover:text-primary transition-colors'>
                                {cert.title}
                            </h3>

                            <p className='text-gray-300 text-sm mb-2'>{cert.issue}</p>

                            <p className='text-gray-400 text-sm mb-4 line-clamp-2'>
                                {cert.desc}
                            </p>

                            <div className='flex items-center justify-between text-xs text-gray-400'>
                                <span className='flex items-center gap-2'>
                                    <Calendar size={14} className='text-primary' />
                                    {cert.date}
                                </span>
                                <a href={cert.link} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors border-b border-transparent hover:border-white pb-1'>
                                    View Certificate <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}

export default Certificates
