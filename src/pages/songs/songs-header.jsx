import Majk from '../../assets/e-pa-shpirt.jpg'
import {Link} from 'react-router-dom'

export const SongsHeader = () => {
    return (
        <Link to='https://soundcloud.com/shqip-mix/majk-e-pa-shpirt' className="songs-header">
            <div className="songs-header-bg-img" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${Majk})`}}>
                <div className="songs-header-info">
                    <h1 className="songs-header-title">Majk</h1>
                    <h3>E Pa Shpirt</h3>
                </div>
            </div>
        </Link>
    )
}