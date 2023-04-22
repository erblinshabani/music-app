import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/search-songs.css'

export const SearchSongs = () => {
    const [songsList, setSongsList] = useState([])
    const [artisName, setArtisName] = useState('unikkatil')
    const [loading, setLoading] = useState(true)

    const handleChange = (e) => {
        setInterval(() => {
            setArtisName(e.target.value)
        }, 10)
    }

    useEffect(() => {const options = {
        method: 'GET',
        url: 'https://soundcloud-downloader4.p.rapidapi.com/soundcloud/search',
        params: {query: artisName},
        headers: {
            'X-RapidAPI-Key': '952f9ddbfemsh9a4214e0f4b36c7p15ebf3jsn4f7ff4a0197b',
            'X-RapidAPI-Host': 'soundcloud-downloader4.p.rapidapi.com'
        }
        };

        axios.request(options).then(function (response) {
            setSongsList(response.data?.result);
            console.log(response.data?.result);
            setLoading(false)
        }).catch(function (error) {
            console.error(error);
        });
    }, [artisName])

    if(loading) return <h1>Loading...</h1>
    return (
        <div className="search-songs">
            <div className="search-bar">
                <input type="text" placeholder="Search Artist Song..." onChange={handleChange}/>
            </div>
            {songsList && songsList.map((song, key) => {
                return (
                    <Link className="search-songs-link" to={song?.url} key={key}>
                        <div className="song-lists">
                            <h3>{song?.title}</h3>
                            <h6>By {song?.user.username}</h6>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}