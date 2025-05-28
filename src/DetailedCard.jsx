// import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

function DetailedCard () {
    
    const { cardId } = useParams()

    const detailedCards = [
        { id: 1, title: "Title 1", description: "Here is some more description for card 1 ... blah blah blah" },
        { id: 2, title: "Title 2", description: "Here is some more description for card 2 ... blah blah blah" },
        { id: 3, title: "Title 3", description: "Here is some more description for card 3 ... blah blah blah" },
        { id: 4, title: "Title 4", description: "Here is some more description for card 4 ... blah blah blah" },
    ]
    
    const cardToDisplay = detailedCards.find(card => card.id === parseInt(cardId));

    return (
        <>
            <div>Some more details on this card ... </div>
            <h1>{ cardToDisplay.title }</h1>
            <div> { cardToDisplay.description } </div>
        </>
    )
}

export default DetailedCard