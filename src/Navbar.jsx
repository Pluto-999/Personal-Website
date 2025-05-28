import { Link } from "react-router-dom"
import Cards from "./Cards.jsx"
import "./navbar.css"

function Navbar() {
    
    return (
        <nav id="navbar">
            <ul>
                {/* <li><Link to="/">Home</Link></li> */}
                <li><a href="/"> Home </a></li>
                <li><Link>About</Link></li>
                {/* <li><Link to="#my_projects">My Projects</Link></li> */}
                <li><a href="#my_projects"> My Projects </a></li>
            </ul>
        </nav>
    )
}

export default Navbar