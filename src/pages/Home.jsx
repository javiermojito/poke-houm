import React from "react";
import HeroCard from "../components/HeroCard.jsx";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            results: [],
            resultsTotal: [],
        }
    }

    componentDidMount() {
        this.getPokemons().then(r => this.setState({
            results: r,
            resultsTotal: r
        }));
    }

    async getPokemons() {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100");
        const pokemons = await response.json();

        const allUrl = pokemons.results.map(async function (data) {
            return fetch(data.url);
        })

        return Promise.all(allUrl).then(function (responses) {
            return Promise.all(responses.map(function (response) {
                return response.json();
            }))
        }).then(function (data) {
            return data;
        })
    }

    filterByWord = (word) => {
        const result = this.state.resultsTotal.filter(function (data) {
            const pattern = new RegExp(`${word}`);
            return (pattern.test(data.name))
        })

        this.setState({
            results: result
        })
    }

    filterById = (id) => {
        const result = this.state.resultsTotal.filter(function (data) {
            return data.id === id;
        })

        this.setState({
            results: result
        })
    }

    nextPage = () => {
        fetch(this.state.next)
            .then(res => {
                res.json().then(r => {
                    this.setState({
                        next: r.next,
                        previous: r.previous,
                        results: r.results
                    })
                });
            });
    }

    previuosPage = () => {
        fetch(this.state.previous)
            .then(res => {
                res.json().then(r => {
                    this.setState({
                        next: r.next,
                        previous: r.previous,
                        results: r.results
                    })
                });
            });

    }

    handleChange = (e) => {

        if (e.target.name === "wordFilter") {
            const value = e.target.value;
            if (isNaN(parseInt(value))) {
                value === "" ? (this.setState({
                    results: this.state.resultsTotal
                })): this.filterByWord(e.target.value.toLowerCase());
            }
            else {
                const intValue = parseInt(value);
                intValue === 0 ? (this.setState({
                    results: this.state.resultsTotal
                })) : this.filterById(intValue);
            }
        }

    }

    render() {
        return <div>
            {/* Hero */}
            <div>

            </div>

            {/* Filters */}
            <div className="mt-0.5 h-24 bg-lightGray1">
                <input type="text" name="wordFilter" onChange={this.handleChange} placeholder="Ex: 1 or Pikachu" />

            </div>

            {/* Cards */}
            <div className="flex justify-center mt-10 mb-10">
                <div className="grid grid-cols-1 gap-11 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {this.state.results ? (this.state.results.map(({ id, name, height, weight, sprites, stats, types }) => {
                        return <HeroCard key={id} id={id} name={name} height={height} weight={weight} sprites={sprites} stats={stats} types={types} />
                    }))
                        : (null)}
                </div>
            </div>

            {/* Paginación */}
            {/* <div>
                <button onClick={this.previuosPage}>Anterior</button>
                <button onClick={this.nextPage}>Siguiente</button>
            </div> */}
        </div>
    }
}

export default Home;