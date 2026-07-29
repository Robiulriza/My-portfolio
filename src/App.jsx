import React, { useEffect } from 'react'
import Header from './Component/Header'
import AOS from 'aos'
import 'aos/dist/aos.css'
import HeroSection from './Component/HeroSection'
import Education from './Component/Education'
import Certificates from './Component/Certificates'
import AboutSection from './Component/AboutSection'
import Experience from './Component/Experience'
import Projects from './Component/Projects'
import ContractSection from './Component/ContractSection'
import Footer from './Component/Footer'


const App = () => {
  useEffect(() => {
AOS.init({
  duration: 1000,
  once: false,
  offset: 100,
});
  }, []);
  return (
    <div className='bg-[#111827] min-h-screen'>
      <Header />
      <HeroSection />
      <Education />
      <Certificates/>
      <AboutSection />
      <Experience />
      <Projects />
      <ContractSection />
      <Footer />

    </div>
  )
}

export default App
