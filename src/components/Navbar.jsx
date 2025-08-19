import "../styles/navbar.css"
import { HashLink } from "react-router-hash-link"
function Navbar() {
    
    return (
        <nav className="navbar">
            <ul className="navbar_links">
                <li><HashLink smooth to="/#">Home</HashLink></li>
                <li><HashLink smooth to="/#about">About</HashLink></li>
                <li><HashLink smooth to="/#projects">My Projects</HashLink></li>
            </ul>
        </nav>
    )
}

export default Navbar