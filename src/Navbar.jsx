import { useEffect, useState } from "react"
import { IconContext } from "react-icons"
import {BsSun, BsFillMoonStarsFill} from 'react-icons/bs'
import './styles/navbar.css'
import { Link, useNavigate } from "react-router-dom"
import Aos from "aos"
import 'aos/dist/aos.css'

export const Navbar = () => {
    const [darkTheme, setDarkTheme] = useState(false)

    const navigate = useNavigate(null)

    const changeTheme = () => {
        setDarkTheme(!darkTheme)
    }

    useEffect(() => {
        document.body.classList = darkTheme ? "darkTheme" : ""
        
        Aos.init({delay: 500})
    }, [darkTheme])
    return (
        <nav data-aos="fade-down" data-aos-duration={1000}>
            <h1 className="logo" onClick={() => navigate('/')}>Xizt</h1>
            <ul className="links">
                <Link to="/">Home</Link>
                <Link to="/albums">Albums</Link>
                <Link to="/songs">Songs</Link>
                <Link to="/search-songs">Search</Link>
            </ul>
            <IconContext.Provider value={{size: 22}}>
                {darkTheme ? <BsSun onClick={changeTheme} className="themeIcon"/> : <BsFillMoonStarsFill className="themeIcon" onClick={changeTheme}/>}
            </IconContext.Provider>
        </nav>
    )
}