export const AlbumsBodyCard = ({img, artist, albumTitle}) => {
    return (
        <div className="albums-body-card">
            <div className="albums-body-card-bg-img" style={{ backgroundImage: `url(${img})` }}></div>
            <div className="albums-body-card-info">
                <h2>{albumTitle}</h2>
                <h5>{artist}</h5>
            </div>
        </div>
    )
}