import React from "react";
import HeroCard from "../components/HeroCard.jsx";
import Header from "../components/Header.jsx";


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            results: [],
            resultsTotal: [],
            types: [],
            typeSelected: "",
        }
    }

    componentDidMount() {
        this.getPokemons().then(r => this.setState({
            results: r,
            resultsTotal: r
        }))

        this.getTypes()
    }

    /*  getNumberTypes() {
         console.log("hola?")
         console.log(this.state.types)
         this.state.types.forEach(type => {
             
             const total = this.state.results.map(pokemon => {
                 console.log(pokemon)
                 return pokemon.types.find(e => {
                     return e.type.name === type;
                 })
             })
             console.log(total)
             let entry = {}
             entry = entry[`total${type}`] = total.length;
 
             console.log(entry)
 
             this.setState(entry);
         })
     } */

    async getTypes() {
        const response = await fetch("https://pokeapi.co/api/v2/type");
        const types = await response.json();

        const typesArray = types.results.map(t => {
            return t.name;
        })

        this.setState({
            types: typesArray
        })
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
        if (this.state.typeSelected === "") {

            const result = this.state.resultsTotal.filter(function (data) {
                const pattern = new RegExp(`${word}`);
                return (pattern.test(data.name))
            })

            this.setState({
                results: result
            })
        }
        else {
            const result = this.state.typeResults.filter(function (data) {
                const pattern = new RegExp(`${word}`);
                return (pattern.test(data.name))
            })

            this.setState({
                results: result
            })
        }
    }

    filterById = (id) => {
        if (this.state.typeSelected === "") {
            const result = this.state.resultsTotal.filter(function (data) {
                return data.id === id;
            })

            this.setState({
                results: result
            })
        }
        else {
            const result = this.state.typeResults.filter(function (data) {
                return data.id === id;
            })

            this.setState({
                results: result
            })
        }

    }

    filterByType = (type) => {
        const result = this.state.resultsTotal.filter(function (data) {
            return data.types.find(p => p.type.name === type);
        })

        this.setState({
            results: result,
            typeResults: result
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
                value === "" ? (
                    this.state.typeSelected === "" ? (
                        this.setState({
                            results: this.state.resultsTotal
                        })
                    ) : (this.filterByType(this.state.typeSelected))
                ) : this.filterByWord(e.target.value.toLowerCase());
            }
            else {
                const intValue = parseInt(value);
                intValue === 0 ? (
                    this.state.typeSelected === "" ? (
                        this.setState({
                            results: this.state.resultsTotal
                        })
                    ) : (this.filterByType(this.state.typeSelected))

                ) : this.filterById(intValue);
            }
        }
    }

    handleSelect = (e) => {
        const type = e.target.value;
        if (type === "Select type") {
            this.setState({
                typeSelected: "",
                typeResults: []
            })
            this.setState({
                results: this.state.resultsTotal
            })
        }
        else {
            this.setState({
                typeSelected: type
            })
            this.filterByType(type)
        }
    }

    getCapitalize(string) {
        return string ? (string.charAt(0).toUpperCase() + string.slice(1)).replace("-", ".") : "";
    }

    render() {
        return <div>
            {/* Hero */}
            <Header />

            {/* Filters */}
            <div className=" lg:sticky top-0 mt-0.5 h-32 bg-lightGray3 flex flex-col justify-center items-center gap-y-2">
                <div className="mx-auto flex justify-center items-center w-7/12">
                    <div className="flex justify-center items-center h-12 bg-white rounded-l-xl pl-2 pr-2 shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="24" height="24"
                            viewBox="0 0 172 172"
                            style={{ fill: "#000000" }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><path d="M0,172v-172h172v172z" fill="none"></path><g id="original-icon" fill="#cccccc"><path d="M34.4,22.93333c-6.33533,0 -11.46667,5.13133 -11.46667,11.46667v103.2c0,6.33533 5.13133,11.46667 11.46667,11.46667h103.2c6.33533,0 11.46667,-5.13133 11.46667,-11.46667v-103.2c0,-6.33533 -5.13133,-11.46667 -11.46667,-11.46667zM80.26667,45.86667c18.9716,0 34.4,15.4284 34.4,34.4c0,7.41893 -2.38641,14.2743 -6.39401,19.8987l16.18099,16.18099c2.24173,2.24173 2.24173,5.86556 0,8.10729c-1.118,1.118 -2.58591,1.67969 -4.05364,1.67969c-1.46773,0 -2.93564,-0.56169 -4.05364,-1.67969l-16.18099,-16.18099c-5.6244,4.0076 -12.47976,6.39401 -19.8987,6.39401c-18.9716,0 -34.4,-15.4284 -34.4,-34.4c0,-18.9716 15.4284,-34.4 34.4,-34.4zM80.26667,57.33333c-12.66573,0 -22.93333,10.2676 -22.93333,22.93333c0,12.66573 10.2676,22.93333 22.93333,22.93333c12.66573,0 22.93333,-10.2676 22.93333,-22.93333c0,-12.66573 -10.2676,-22.93333 -22.93333,-22.93333z"></path></g></g></svg>
                    </div>
                    <input className="w-full h-12 shadow font-nunito bg-white text-center text-lg text-gray-500 font-light rounded-r-xl focus:ring-1 focus:outline-none transition duration-300 focus:ring-gray-300" type="text" name="wordFilter" onChange={this.handleChange} placeholder="ex: 1 or Pikachu" />
                </div>

                <div className="flex flex-row justify-center items-center shadow rounded-xl bg-white relative inline-flex">
                    <svg className="absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="18" height="18"
                        viewBox="0 0 172 172"
                    ><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#cccccc"><path d="M154.75969,48.10625c-0.90031,0.02688 -1.76031,0.40313 -2.39187,1.06156l-66.36781,66.36781l-66.36781,-66.36781c-0.645,-0.67188 -1.53187,-1.03469 -2.45906,-1.04813c-1.41094,0.01344 -2.66063,0.86 -3.19813,2.15c-0.52406,1.30344 -0.215,2.78156 0.79281,3.7625l68.8,68.8c1.34375,1.34375 3.52062,1.34375 4.86437,0l68.8,-68.8c1.02125,-0.98094 1.33031,-2.49937 0.79281,-3.80281c-0.55094,-1.30344 -1.84094,-2.15 -3.26531,-2.12313z"></path></g></g></svg>

                    <select onChange={this.handleSelect} className="rounded-xl font-nunito text-lg text-center text-gray-500 text-center h-12 pl-6 pr-12 appearance-none focus:outline-none focus:ring-1 focus:outline-none transition duration-300 focus:ring-gray-300" name="" id="">
                        <option value="Select type">Select type</option>
                        {this.state.types ? (this.state.types.map(value => {
                            return <option key={value} value={value}>{this.getCapitalize(value)}</option>
                        })) : (null)}
                    </select>

                </div>

            </div >

            {/* Cards */}
            < div className="flex justify-center pt-12 pb-12" >
                <div className="grid grid-cols-1 gap-11 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {this.state.results ? (this.state.results.map(({ id, name, height, weight, sprites, stats, types }) => {
                        return <HeroCard key={id} id={id} name={name} height={height} weight={weight} sprites={sprites} stats={stats} types={types} />
                    }))
                        : (null)}
                </div>
            </div >

            {/* Paginación */}
            {/* <div>
                <button onClick={this.previuosPage}>Anterior</button>
                <button onClick={this.nextPage}>Siguiente</button>
            </div> */}
        </div >
    }
}

export default Home;