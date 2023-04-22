export const SongsBodyCard = ({img, artist, albumTitle}) => {
    return (
        <div className="songs-body-card">
            <div className="songs-body-card-bg-img" style={{ backgroundImage: `url(${img})` }}></div>
            <div className="songs-body-card-info">
                <h2>{albumTitle}</h2>
                <h5>{artist}</h5>
            </div>
        </div>
    )
}