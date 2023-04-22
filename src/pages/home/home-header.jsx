import { useEffect } from "react"
import '../../styles/home.css'
import 'aos/dist/aos.css'
import Aos from "aos"

export const HomeHeader = () => {
    useEffect(() => {
        Aos.init({delay: 500})
    })
    
    return (
        <div className="home">
            <div className="home-left">
                <h1 data-aos='fade-down' data-aos-delay={1200} data-aos-duration={1500}>Home</h1>
                <p data-aos='fade-up' data-aos-delay={1200} data-aos-duration={1400}>
                    You can listen to songs right now in our web.<br />
                    You can browse through our collection of songs and playlists, or search for your favorite artist, album or song.
                </p>
            </div>
            <div className="home-right" data-aos='fade-down' data-aos-duration={1000}>
                <h1>XIZT</h1>
            </div>
        </div>
    )
}