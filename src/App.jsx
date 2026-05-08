import React from 'react'
import HeroSection from './sections/HeroSection'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Testimonials from './sections/Testmonials'
import Contact from './sections/Contact'
import Navbar from './layout/Navbar'
import Footer from './layout/footer'



const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden '>
      <Navbar/>
      <main>
        <HeroSection/>
        <About/>
        <Projects/>
        <Experience/>
        <Testimonials/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App