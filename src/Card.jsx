import { useState } from "react"
import "./card.css"
import { useParams } from "react-router-dom"

function Card(props) {

    const [someThing, setSomeThing] = useState(false)

    const clicked = () => {
        // alert("Card has been clicked !")
        setSomeThing(!someThing)
    }

    return (
        <>
        <div onClick={clicked} className="card">
            <h1> { props.title }</h1>
            {/* {someThing ? <p>HELP ME !!</p> : <p>DON'T HELP ME !!</p>} */}
            <p> { props.description } </p>
        </div>
        </>
    )
}

export default Card