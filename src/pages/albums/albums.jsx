import { AlbumsHeader } from "./albums-header"
import '../../styles/albums.css'
import { AlbumsBody } from "./albums-body";
import { Sidebar } from "../sidebar";
import 'aos/dist/aos.css';
import Aos from 'aos'
import { useEffect } from "react";

export const Albums = () => {
    useEffect(() => {
        Aos.init({delay: 500})
    }, [])
    return (
        <div className="albums">
            <Sidebar sidebarTitle="Albums"/>
            <div className="albums-right" data-aos="zoom-in">
                <AlbumsHeader />
                <AlbumsBody />
            </div>

        </div>
    )
}