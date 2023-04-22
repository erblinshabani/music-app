import { AlbumsBodyCard } from './albums-body-card'
import {albumList} from '../../axios/song-listen'
import { Link } from 'react-router-dom'

export const AlbumsBody = () => {
    return (
        <div className="albums-body">
            <div className="albums-body-header">
                <h2>Albums</h2>
                <h4>I want to listen musics</h4>
            </div>

            <div className="albums-body-cards">
                {albumList.map((music, key) => {
                    return <Link key={key} to={music.path}>
                            <AlbumsBodyCard img={music.img} artist={music.artist} albumTitle={music.title}/>
                        </Link>
                })}
            </div>
        </div>
    )
}