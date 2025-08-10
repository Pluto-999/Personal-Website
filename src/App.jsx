import { useState } from 'react'
import './App.css'
import Cards from "./Cards.jsx"
import Navbar from "./Navbar.jsx"
import About from "./About.jsx"
import Intro from "./Intro.jsx"
import Footer from "./Footer.jsx"

function App() {
  return (
    <>
      <div className="main_page">
        <Navbar />
        <main className='main_content'>
          <div className='item'>
            <Intro />
          </div>
          <div className='item'>
            <About />
          </div>
          <div className='item'>
            <Cards />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
