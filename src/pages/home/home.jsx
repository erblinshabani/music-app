import { HomeBody } from "./home-body"
import { HomeContainer } from "./home-container"
import { HomeHeader } from "./home-header"

export const Home = () => {
    return (
        <div>
            <HomeHeader />
            <HomeBody />
            <HomeContainer />
        </div>
    )
}