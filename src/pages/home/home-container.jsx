import { HomeContainerCard } from "./home-container-card"

export const HomeContainer = () => {
    return (
        <div className="home-container">
            <HomeContainerCard title="Listen to an album" description="Listen to artist albums"/>
            <HomeContainerCard title="Listen to a song" description="Listen to artist songs"/>
            <HomeContainerCard title="Get artist info" description="Get info about artists"/>
        </div>
    )
}