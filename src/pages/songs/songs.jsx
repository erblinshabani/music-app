import { Sidebar } from "../sidebar"
import { SongsHeader } from "./songs-header"
import '../../styles/songs.css'
import { SongsBody } from "./songs-body"
import Aos from "aos"
import { useEffect } from "react"

export const Songs = () => {
    useEffect(() => {
        Aos.init({delay: 500})
    }, [])
    return (
        <div className="songs">
            <Sidebar sidebarTitle="Songs"/>
            <div className="songs-right" data-aos="zoom-in">
                <SongsHeader />
                <SongsBody />
            </div>
        </div>
    )
}