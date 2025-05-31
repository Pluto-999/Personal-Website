import Card from "./Card.jsx"
import { Link } from "react-router-dom"
import personal_cards from "./data/personal_projects_overview.json"
import university_cards from "./data/university_projects_overview.json"
import "./card.css"

function Cards() {
    return (
        <>
        <div>
        <h1 id="personal_projects"> Personal Projects </h1>
        <div className="cards-container">
            {personal_cards.map((card) => (
                <Link key={card.id} to={`/card/${card.id}`}>
                    <Card title={card.title} cardId={card.id} description={card.description} />
                </Link>
            ))}
        </div>
        </div>
        <div>
        <h1 id="university_projects"> University Projects </h1>
        <div className="cards-container">
            {university_cards.map((card) => (
                <Link key={card.id} to={`/card/${card.id}`}>
                    <Card title={card.title} cardId={card.id} description={card.description} />
                </Link>
            ))}
        </div>
        </div>
        </>
    );
}

export default Cards;