import { DiGithubBadge } from "react-icons/di";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

function About() {
    return (
        <>
            <h1 id="about"> About me ... </h1>
            <div> Hello there, this is me ... </div>
            <DiGithubBadge size={64} />
            <FaLinkedin size={64} />
            <BiLogoGmail size={64} />
        </>
    )
}

export default About