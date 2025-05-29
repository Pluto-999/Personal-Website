import { Link } from "react-router-dom"
import Cards from "./Cards.jsx"
import "./navbar.css"
import { HashLink } from "react-router-hash-link"
function Navbar(props) {
    
    return (
        <nav className="navbar">
            <ul className="navbar_links">
                <li><HashLink smooth to="/#">Home</HashLink></li>
                <li><HashLink smooth to="/#about">About</HashLink></li>
                <li><HashLink smooth to="/#personal_projects">Personal Projects</HashLink></li>
                <li><HashLink smooth to="/#university_projects">University Projects</HashLink></li>
            </ul>
        </nav>
    )
}

export default Navbar