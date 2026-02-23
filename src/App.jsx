import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Amenities from './components/Amenities'
import Gallery from './components/Gallery'
import Location, { Contact, Footer } from './components/Location'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Amenities />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
