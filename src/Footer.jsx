import "./styles/footer.css"
import { DiGithubBadge } from "react-icons/di";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

function Footer() {

    return (
        <>
            <div className="footer">
                <p> © 2025 Adam Wood </p>
                <p> Designed and built by me </p>
                <div className="links">
                    <a href="https://github.com/Pluto-999"><DiGithubBadge size={40} /></a>
                    <a href="https://www.linkedin.com/in/adam-wood-854331305/"><FaLinkedin size={35} /></a>
                    <a href="mailto:adamw0909@gmail.com"><BiLogoGmail size={40} /></a>
                </div>
            </div>
        </>
    )
}

export default Footer