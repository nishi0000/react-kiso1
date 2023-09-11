import { Link } from "react-router-dom"
import "../css/header.css"

export const Header = () => {
    return (
        <>

            <header>
                <Link to="/" className="homelink">時計掲示板</Link>
                <Link to="/thread/new" className="link">スレッドを立てる</Link>
            </header>

        </>

    )
} 