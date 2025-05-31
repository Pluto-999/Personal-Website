import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./Card.jsx"
import { Link } from "react-router-dom"
import Cards from "./Cards.jsx"
import Navbar from "./Navbar.jsx"
import About from "./About.jsx"
import Footer from "./Footer.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main_page">
        <Navbar />
        <About />
        <Cards />
        <Footer />
      </div>
    </>
  )
}

export default App
