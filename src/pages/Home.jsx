import React from "react";
import HeroCard from "../components/HeroCard.jsx";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        console.log("done");
        this.getPokemons();
    }

    async getPokemons() {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000");
        const pokemons = await response.json();

        this.setState({
            count: pokemons.count,
            next: pokemons.next,
            previous: pokemons.previous,
            results: pokemons.results
        })

    }

    render() {
        return <div>
            {/* Hero */}
            <div>

            </div>

            {/* Filters */}
            <div className="mt-0.5 h-24 bg-lightGray1">

            </div>

            {/* Cards */}
            <div className="flex justify-center mt-10 mb-10">
                <div className="grid grid-cols-1 gap-11 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {this.state.results ? (this.state.results.map(function (data) {
                        return (

                            <HeroCard url={data.url} />

                        )
                    })) : (null)}
                </div>
            </div>
        </div>
    }
}

export default Home;