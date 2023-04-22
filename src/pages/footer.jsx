import { Link } from "react-router-dom"
import '../styles/footer.css'

export const Footer = () => {
    return (
        <footer>
            <h1>Xizt</h1>
            <ul>
                <Link to='https://www.instagram.com/erblin.shabanni/'>Instagram</Link>
                <Link to='https://www.facebook.com/erblincr7/'>Facebook</Link>
            </ul>
        </footer>
    )
}