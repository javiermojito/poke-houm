import React from "react";
import HeroCard from "../components/HeroCard.jsx";

class Home extends React.Component {
    render() {
        return <div>
            {/* Hero */}
            <div>

            </div>

            {/* Filters */}
            <div className="h-24 bg-lightGray2">

            </div>

            {/* Cards */}
            <div className="flex justify-center mt-10 mb-10">
                <div className="grid grid-cols-1 gap-11 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    <HeroCard url="https://pokeapi.co/api/v2/pokemon/1/" />
                    <HeroCard url="https://pokeapi.co/api/v2/pokemon/2/" />
                    <HeroCard url="https://pokeapi.co/api/v2/pokemon/3/" />
                    <HeroCard url="https://pokeapi.co/api/v2/pokemon/4/" />
                    <HeroCard url="https://pokeapi.co/api/v2/pokemon/5/" />
                    <HeroCard url="https://pokeapi.co/api/v2/pokemon/6/" />
                    <HeroCard url="https://pokeapi.co/api/v2/pokemon/7/" />
                    <HeroCard url="https://pokeapi.co/api/v2/pokemon/8/" />
                    <HeroCard url="https://pokeapi.co/api/v2/pokemon/9/" />
                    <HeroCard url="https://pokeapi.co/api/v2/pokemon/10/" />
                    <HeroCard url="https://pokeapi.co/api/v2/pokemon/11/" />
                    {/* <HeroCard />
                    <HeroCard />
                    <HeroCard />
                    <HeroCard />
                    <HeroCard />
                    <HeroCard />
                    <HeroCard />
                    <HeroCard />
                    <HeroCard /> */}
                </div>
            </div>


        </div>
    }
}

export default Home;