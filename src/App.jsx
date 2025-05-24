import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Project from './sections/Project'
import Experience from './sections/Experience'
import Contact from './sections/contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl '>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Experience/> 
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
