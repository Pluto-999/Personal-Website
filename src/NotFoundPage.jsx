import { Link } from "react-router-dom"

function NotFoundPage () {
    return (
        <>
            <div>404 Not Found</div>
            <Link to="/">Go to Home</Link>
            <a href="mailto:adamw0909@gmail.com">Jon Doe</a>
        </>
    )
}

export default NotFoundPage