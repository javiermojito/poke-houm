import React from "react";
import StatBar from "./StatBar.jsx";

class HeroCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: "",
            height: 0,
            weight: 0,
            sprites: {},
            stats: [],
        }
    }

    componentDidMount() {
        this.getPokemonData();
    }

    getCapitalize(string){
        return string ? string.charAt(0).toUpperCase() + string.slice(1) : "";
    }

    async getPokemonData() {
        const response = await fetch(this.props.url);
        const pokeData = await response.json();
        this.setState({
            id: pokeData.id,
            name: pokeData.name,
            height: pokeData.height,
            weight: pokeData.weight,
            sprites: pokeData.sprites,
            stats: pokeData.stats,
            types: pokeData.types
        })

        console.log(this.state.stats[0].base_stat)
    }

    render() {

        return <div className="flex flex-col shadow h-64 w-80 rounded-xl mx-auto cursor-pointer  transition-shadow hover:shadow-lg duration-400 ">
            <div className="flex flex-row bg-orange items-center rounded-t-xl h-20">
                <div className="flex flex-col pt-2 pb-2 pl-16 w-2/4">
                    <span className="text-2xl text-white font-semibold cursor-auto">{this.getCapitalize(this.state.name)}</span>
                    <span className="text-sm text-white font-light cursor-auto"> #{this.state.id}</span>
                </div>
                <div className="flex flex-wrap item-center h-full w-2/4">
                    <img className="mx-auto my-auto  object-cover" src={this.state.sprites ? (this.state.sprites.front_default) : ("https://i.pinimg.com/originals/2a/b1/3a/2ab13a4cebbf0cb6dd2cd5aa7e59abee.png")} alt="ditto" />
                </div>
            </div>

            <div className="flex flex-row justify-center w-full h-24 bg-darkOrange items-center gap-x-2">
                {this.state.types ? (this.state.types.map(function (data) {
                    return (
                        <div className="bg-red-400 rounded-full text-center h-7 pl-3 pr-3 pb-1">
                            <span className="text-white text-xs font-medium cursor-auto">{data.type.name.charAt(0).toUpperCase() + data.type.name.slice(1)}</span>
                        </div>
                    )
                })) : (null)
                }
            </div>

            <div className="flex flex-wrap content-center bg-white h-full w-full items-center rounded-b-xl ">
                <div className="grid grid-cols-6 gap-0 gap-x-1 content-center items-center ml-7 mr-6">
                    {/* HP */}
                    <span className="text-xs font-semibold col-span-2 cursor-auto">HP</span>
                    <span className="text-xs font-normal text-center cursor-auto">{this.state.stats[0] ? (this.state.stats[0].base_stat) : (null)}</span>
                    <div className="col-span-3">
                        <StatBar base_stat={this.state.stats[0] ? (this.state.stats[0].base_stat) : (null)} />
                    </div>

                    {/* Attack */}
                    <span className="text-xs font-semibold col-span-2 cursor-auto">Attack</span>
                    <span className="text-xs font-normal text-center cursor-auto">{this.state.stats[1] ? (this.state.stats[1].base_stat) : (null)}</span>
                    <div className="col-span-3">
                        <StatBar base_stat={this.state.stats[1] ? (this.state.stats[1].base_stat) : (null)} />
                    </div>

                    {/* Defense */}
                    <span className="text-xs font-semibold col-span-2 cursor-auto">Defense</span>
                    <span className="text-xs font-normal text-center cursor-auto">{this.state.stats[2] ? (this.state.stats[2].base_stat) : (null)}</span>
                    <div className="col-span-3">
                        <StatBar base_stat={this.state.stats[2] ? (this.state.stats[2].base_stat) : (null)} />
                    </div>

                    {/* Special Attack */}
                    <span className="text-xs font-semibold col-span-2 cursor-auto">Special Attack</span>
                    <span className="text-xs font-normal text-center cursor-auto">{this.state.stats[3] ? (this.state.stats[3].base_stat) : (null)}</span>
                    <div className="col-span-3">
                        <StatBar base_stat={this.state.stats[3] ? (this.state.stats[3].base_stat) : (null)} />
                    </div>

                    {/* Special Defense */}
                    <span className="text-xs font-semibold col-span-2 cursor-auto">Special Defense</span>
                    <span className="text-xs font-normal text-center cursor-auto">{this.state.stats[4] ? (this.state.stats[4].base_stat) : (null)}</span>
                    <div className="col-span-3">
                        <StatBar base_stat={this.state.stats[4] ? (this.state.stats[4].base_stat) : (null)} />
                    </div>

                    {/* Speed */}
                    <span className="text-xs font-semibold col-span-2 cursor-auto">Speed</span>
                    <span className="text-xs font-normal text-center cursor-auto">{this.state.stats[5] ? (this.state.stats[5].base_stat) : (null)}</span>
                    <div className="col-span-3">
                        <StatBar base_stat={this.state.stats[5] ? (this.state.stats[5].base_stat) : (null)} />
                    </div>
                </div>
            </div>
        </div >;
    }
}

export default HeroCard;