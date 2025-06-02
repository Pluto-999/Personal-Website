// import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import Navbar from "./Navbar.jsx"
import personal_details from "./data/personal_projects_detailed.json"
import university_details from "./data/university_projects_detailed.json" 
import Footer from "./Footer.jsx"
import "./detailedCard.css"

function DetailedCard () {
    const { cardId } = useParams()
    
    const cardToDisplay = personal_details.find(card => card.id === parseInt(cardId)) || 
                        university_details.find(card => card.id === parseInt(cardId));

    return (
        <>
        <div className="main_page">
            <Navbar />
            <main className="main_content" id="main">
                <div> Some more details on this card ... </div>
                <h1>{ cardToDisplay.title }</h1>
                <div> { cardToDisplay.description } </div>
            </main>
            <Footer />
        </div>
        </>
    )
}

export default DetailedCard