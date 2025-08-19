import { useParams } from "react-router-dom"
import Navbar from "./Navbar.jsx"
import project_details from "../data/projects_detailed.json"
import { DiGithubBadge } from "react-icons/di";
import Footer from "./Footer.jsx"
import "../styles/detailedCard.css"

function DetailedCard () {
    const { cardId } = useParams()
    
    const cardToDisplay = project_details.find(card => card.id === parseInt(cardId))

    return (
        <>
        <div className="main_page">
            <Navbar />
            <main className="main_content" id="main">
                <h1>{ cardToDisplay.title }</h1>
                <div> { cardToDisplay.description } </div>
                <div> 
                    {cardToDisplay.github ? (
                        <a href={cardToDisplay.github}><DiGithubBadge size={60} /></a>
                    ) : (
                        <div> Unfortunately, due to college policy the code for this project cannot be published publicly on GitHub. </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
        </>
    )
}

export default DetailedCard