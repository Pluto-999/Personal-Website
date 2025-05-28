import Card from "./Card.jsx"
import { Link } from "react-router-dom"


function Cards() {
    const cards = [
        { id: 1, title: "Title 1", description: "Card 1 Description" },
        { id: 2, title: "Title 2", description: "Card 2 Description" },
        { id: 3, title: "Title 3", description: "Card 3 Description" },
        { id: 4, title: "Title 4", description: "Card 4 Description" },
    ]

    return (
        <div className="cards-container">
            {cards.map((card) => (
                <Link key={card.id} to={`/card/${card.id}`}>
                    <Card title={card.title} cardId={card.id} description={card.description} />
                </Link>
            ))}
        </div>
    );
}

export default Cards;