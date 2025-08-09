import Card from "./Card.jsx"
import { Link } from "react-router-dom"
import project_overviews from "./data/projects_overview.json"
import "./card.css"

function Cards() {
    return (
        <>
        <div>
            <h1 id="projects"> My Projects </h1>
            <div className="cards-container">
            {
                project_overviews.map((card) => (
                    <Link key={card.id} to={`/card/${card.id}`}>
                        <Card title={card.title} cardId={card.id} description={card.description}/>
                    </Link>
                ))
            }

            </div>
        </div>
        </>
    );
}

export default Cards;