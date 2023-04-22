import { Link } from "react-router-dom"

export const AlbumCard = ({path, artist, albumTitle, aos,delay,duration}) => {
    return (
        <Link to={path} className="album-card" data-aos={aos} data-aos-delay={delay} data-aos-duration={duration}>
            <h2>{artist}</h2>
            <p>
                {albumTitle}
            </p>
        </Link>
    )
}