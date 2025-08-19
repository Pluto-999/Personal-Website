import "./styles/App.css"
import Cards from "./components/Cards.jsx"
import Navbar from "./components/Navbar.jsx"
import About from "./components/About.jsx"
import Intro from "./components/Intro.jsx"
import Footer from "./components/Footer.jsx"
import "./styles/header_styles.css"

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
