import React from "react";
import HeroCard from "../components/HeroCard.jsx";

class Home extends React.Component {
    render() {
        return <div>
            <HeroCard />
            <HeroCard />
            <HeroCard />
        </div>
    }
}

export default Home;