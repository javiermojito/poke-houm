import React from "react";
import HeroCard from "../components/HeroCard.jsx";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            next: "",
            previous: "",
            results: [],
            resultsTotal: [],
        }
    }

    componentDidMount() {
        this.getPokemons();
    }

    async getPokemons() {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200");
        const pokemons = await response.json();

        this.setState({
            count: pokemons.count,
            next: pokemons.next,
            previous: pokemons.previous,
            results: pokemons.results,
            resultsTotal: pokemons.results
        })

        console.log(pokemons);
    }

    filterByWord = (word) => {
        const result = this.state.resultsTotal.filter(function(data){        
            const pattern = new RegExp(`${word}`);
            return (pattern.test(data.name))
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

    handleChange = (e) =>{
        
        if(e.target.name=== "wordFilter"){
            const value = e.target.value;
            if(value === "")
            {
                this.setState({
                    results: this.state.resultsTotal
                })
            }
            else{
                this.filterByWord(e.target.value)
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
                <input type="text" name="wordFilter" onChange={this.handleChange}/>

            </div>

            {/* Cards */}
            <div className="flex justify-center mt-10 mb-10">
                <div className="grid grid-cols-1 gap-11 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {this.state.results ? (this.state.results.map(function (data) {
                        return (
                            <HeroCard key={data.name} url={data.url} />
                        )
                    })) : (null)}
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