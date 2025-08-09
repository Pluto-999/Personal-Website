import { Link } from "react-router-dom"
import Footer from "./Footer.jsx"

function NotFoundPage () {
    return (
        <>
            <div className="main_page">
                <main className="main_content" id="main">
                <div>404 Not Found</div>
                <Link to="/">Go to Home</Link>
                </main>
            </div>
        </>
    )
}

export default NotFoundPage