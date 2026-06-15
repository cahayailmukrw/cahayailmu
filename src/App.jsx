import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import SchoolLinks from './components/SchoolLinks'
import Features from './components/Features'
import Programs from './components/Programs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SchoolLinks />
      <About />
      <Features />
      <Programs />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
