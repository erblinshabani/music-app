import { Link } from 'react-router-dom'
import DafinaKida from '../../assets/dafina-zeqiri-kida.jpg'

export const AlbumsHeader = () => {
    return (
        <Link to='https://soundcloud.com/shqip-mix/dafina-zeqiri-ft-kida-luje-belin' className="songs-header">
            <div className="songs-header-bg-img" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${DafinaKida})`}}>
                <div className="songs-header-info">
                    <h1 className="songs-header-title">Dafina Zeqiri Ft Kida</h1>
                    <h3>Luje Belin</h3>
                </div>
            </div>
        </Link>
    )
}