import "./styles/about.css"
import Skills from "./Skills.jsx"

function About() {
    return (
        <>
            <div className="about">
                <h1 className="header"> About me </h1>
                <div className="about-details">
                <p> A more detailed about here ... </p>
                <Skills />
                </div>
            </div>
        </>
    )
}

export default About