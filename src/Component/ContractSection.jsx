import React from 'react'
import { FaEnvelope, FaLinkedin, FaPhone, FaMapMarkedAlt } from 'react-icons/fa'

const ContractSection = () => {
    const contractInfo = [
        {
            id: 1,
            icon: FaEnvelope,
            title: 'Email',
            value: 'Robiulislamriza88@gmail.com',
            link: 'mailto:robiulislamriza88@gmail.com',
        },
        {
            id: 2,
            icon: FaLinkedin,
            title: 'LinkedIn',
            value: 'Linkedin.com',
            link: 'https://www.linkedin.com/in/robiul-islam-riza-400b2b425/',
        },
        {
            id: 3,
            icon: FaPhone,
            title: 'Phone',
            value: '+088 01886363474',
            link: 'tel:+8801886363474',
        },
        {
            id: 4,
            icon: FaMapMarkedAlt,
            title: 'Location',
            value: 'Mirpur, Dhaka, Bangladesh',
            link: null,
        },
    ]

    return (
        <section className='py-20 bg-gray-900' id='contract'>
            <div className='container mx-auto px-4 max-w-6xl'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-5xl font-extrabold text-white mb-2'>
                        Let's Connect.
                    </h2>
                    <div className='w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl'></div>
                </div>

                <div className='grid md:grid-cols-2 gap-8'>
                    <div>
                        <p className='text-gray-400 mb-8 leading-relaxed'>
                            All official communications, notices, and updates regarding this agreement shall be made through designated email addresses or formal written correspondence.
                        </p>

                        <div className='space-y-6'>
                            {contractInfo.map((info) => {
                                const Icon = info.icon
                                return (
                                    <div key={info.id} className='flex items-center gap-4 group'>
                                        <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20'>
                                            <Icon size={18} className='text-primary' />
                                        </div>
                                        <div>
                                            <h4 className='text-sm font-medium text-white'>
                                                {info.title}
                                            </h4>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    className='text-sm text-gray-400 transition-colors hover:text-primary'
                                                    target={info.title === 'Location' ? '_self' : '_blank'}
                                                    rel={info.title === 'Location' ? '' : 'noopener noreferrer'}
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className='text-sm text-gray-400'>
                                                    {info.value}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {/* Contract form */}
                    <div className='bg-gray-800 rounded-lg  p-6'>
                        <form>
                            <div className='mb-4'>
                                <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Email</label>
                                <input type="email" id="email" className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors' placeholder='your@email.com' required/>

                            </div>
                            <div className='mb-6'>
                                <label htmlFor="message" className='text-white block mb-2 text-sm font-medium'>Message</label>
                                <textarea type="message" id="message" className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors' placeholder='Your message ....' rows="4" required/>

                            </div>
                            <button type='submit' className='w-full px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/80'>
                                Send Message
                            </button>
                            
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContractSection
