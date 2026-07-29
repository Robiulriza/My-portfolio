import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ]

  const scrollToSection = (href) => {
    setIsMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <header className='relative z-50 px-6 py-7'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <div className='text-white text-3xl font-black cursor-pointer'>
          Riza<span className='text-primary'>.</span>
        </div>

        <nav className='hidden md:flex items-center gap-10'>
          <ul className='flex gap-8'>
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className='text-gray-300 hover:text-white text-base font-medium transition-colors cursor-pointer'
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollToSection('#contract')}
            className='rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary/90 hover:scale-105 transform transition-all shadow-sm hover:shadow-md cursor-pointer'
          >
            Contract Me
          </button>
        </nav>

        <button className='md:hidden text-white cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {isMenuOpen && (
        <div
          className='fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden'
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#111827] z-50 transition-transform duration-300 md:hidden p-8 flex flex-col ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button className='self-end text-white mb-10' onClick={() => setIsMenuOpen(false)}>
          <X size={32} />
        </button>

        <ul className='flex flex-col gap-8'>
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToSection(item.href)}
                className='text-white text-xl font-semibold hover:text-primary transition-colors cursor-pointer'
              >
                {item.name}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollToSection('#contract')}
              className='w-full bg-primary text-white py-4 rounded-xl text-lg font-bold hover:scale-105 transform transition-transform cursor-pointer'
            >
              Contract Me
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
