import { musicList} from '../../axios/song-listen'
import { Link } from 'react-router-dom'
import { SongsBodyCard } from './songs-body-card'

export const SongsBody = () => {
    return (
        <div className="songs-body">
            <div className="songs-body-header">
                <h2>Songs</h2>
                <h4>I want to listen musics</h4>
            </div>

            <div className="songs-body-cards">
                {musicList.map((music, key) => {
                    return <Link key={key} to={music.path}>
                            <SongsBodyCard img={music.img} artist={music.artist} albumTitle={music.title}/>
                        </Link>
                })}
            </div>
        </div>
    )
}