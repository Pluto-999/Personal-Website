import { Link } from "react-router-dom"

function NotFoundPage () {
    return (
        <>
            <div>404 Not Found</div>
            <Link to="/">Go to Home</Link>
        </>
    )
}

export default NotFoundPage