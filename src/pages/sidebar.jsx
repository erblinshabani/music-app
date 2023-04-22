import { useNavigate } from 'react-router-dom'
import '../styles/sidebar.css'

export const Sidebar = ({sidebarTitle}) => {
    const navigate = useNavigate()
    return (
        <div className="sidebar">
            <div className="sidebar-contains">
                <h3>{sidebarTitle}</h3>
                <h4 onClick={() =>navigate('/search-songs')}>Search Song</h4>
            </div>
        </div>
    )
}