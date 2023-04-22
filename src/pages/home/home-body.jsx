import { Link } from "react-router-dom"
import { AlbumCard } from "./album-card"

export const HomeBody = () => {
    return (
        <div className="home-body">
            <div className="home-body-contains">
                <div className="home-body-contains-left">
                    <h2>Listen to album music right now</h2>
                    <p>
                        You can listen to a album by clicking on a card
                    </p>
                </div>
                <div className="home-body-contains-right">
                    <div className="album-songs">
                        <AlbumCard path='https://soundcloud.com/unikkatil4ever/sets/rebel-a-k-a-unikkatil-kanuni-i' artist="Unikkatil" albumTitle="Kanuni i katilit" aos="zoom-in-left" delay={300} duration={500}/>
                        <AlbumCard path='https://soundcloud.com/lyrical-son-4/sets/nr-egjeli-album' artist="Nr" albumTitle="Egjeli" aos="zoom-out-up" delay={1000} duration={1100}/>
                        <AlbumCard path='https://soundcloud.com/shqipmusic/sets/rapsodet-nrap-tsotit-full' artist="Pint" albumTitle="Rapsodët n'rap t'sotit" aos="flip-right" delay={1400} duration={2300}/>
                        <AlbumCard path='https://soundcloud.com/dibran-shala-1/sets/hite-shqip-2020' artist="Dafina Zeqiri, Mozzik..." albumTitle="Hitet Shqip" aos="flip-up" delay={1900} duration={3000}/>
                    </div>
                </div>
            </div>
        </div>
    )
}