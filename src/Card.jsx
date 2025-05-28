import { useState } from "react"
import "./card.css"
import { useParams } from "react-router-dom"

function Card(props) {
    const { cardId } = useParams()
    // console.log(cardId)

    const cards = [
        { id: 1, title: "Title 1", description: "Card 1 Description" },
        { id: 2, title: "Title 2", description: "Card 2 Description" },
        { id: 3, title: "Title 3", description: "Card 3 Description" },
        { id: 4, title: "Title 4", description: "Card 4 Description" },
    ]

    const [someThing, setSomeThing] = useState(false)

    const clicked = () => {
        // alert("Card has been clicked !")
        setSomeThing(!someThing)
    }

    const cardToDisplay = props.title ? props : cards.find(card => card.id === parseInt(cardId));

    // console.log("Card is: ", cardToDisplay.title)

    return (
        <>
        <div onClick={clicked} className="card">
            <h1> { props.title }</h1>
            {someThing ? <p>HELP ME !!</p> : <p>DON'T HELP ME !!</p>}
            <p> { props.description } </p>
        </div>
        
        </>
    )
}

export default Card