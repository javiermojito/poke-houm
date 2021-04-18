import React from "react";
import StatBar from "./StatBar.jsx";

class HeroCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            height: props.height,
            weight: props.weight,
            sprites: props.sprites,
            stats: props.stats,
            types: props.types
        }
    }

    componentDidMount() {
        /* this.getPokemonData(); */
    }

    getCapitalize(string) {
        return string ? (string.charAt(0).toUpperCase() + string.slice(1)).replace("-", ".") : "";
    }

    getFormatId(id){
        const intId = parseInt(id);

        if(intId < 10){
            return "00"+intId;
        }
        else if(intId >=10 && intId < 100){
            return "0"+intId;
        }
        else{
            return intId;
        }

    }

    /* async getPokemonData() {
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
    } */

    render() {

        return <div className="flex flex-col shadow h-80 w-80 rounded-xl mx-auto cursor-pointer  transition-shadow hover:shadow-lg duration-400 ">
            {/* Header */}
            <div className="flex flex-row bg-orange items-center rounded-t-xl h-20">
                <div className="flex flex-col pt-2 pb-2 pl-16 w-2/4">
                    <span className="text-2xl text-white font-semibold font-nunito cursor-auto">{this.getCapitalize(this.state.name)}</span>
                    <span className="text-sm text-white font-normal font-nunito cursor-auto"> #{this.getFormatId(this.state.id)}</span>
                </div>
                <div className="flex flex-wrap item-center h-full w-2/4">
                    <img className="mx-auto my-auto object-cover" src={this.state.sprites ? (this.state.sprites.front_default) : ("https://i.pinimg.com/originals/2a/b1/3a/2ab13a4cebbf0cb6dd2cd5aa7e59abee.png")} alt="ditto" />
                </div>
            </div>

            {/* Types */}
            <div className="flex flex-row justify-center w-full h-28 bg-darkOrange items-center gap-x-2">
                {this.state.types ? (this.state.types.map(function (data) {
                    return (
                        <div className="bg-red-400 rounded-full text-center h-7 pl-3 pr-3 pb-1">
                            <span key={data.type.name} className="text-white text-xs font-semibold font-nunito cursor-auto">{data.type.name.charAt(0).toUpperCase() + data.type.name.slice(1)}</span>
                        </div>
                    )
                })) : (null)
                }
            </div>

            {/* Stats */}
            <div className="flex flex-wrap bg-white h-full w-full items-center justify-center">
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

            {/* Height and Weight */}
            <div className="w-full h-32 bg-lightGray2 rounded-b-xl flex flex-row text-center items-center divide-x">
                <div className="w-1/2 flex flex-col pl-2">
                    <span className="text-sm font-medium text-gray-500 h-4">{this.state.height}</span>
                    <span className="text-xs font-medium text-gray-400">Height</span>
                </div>
                <div className="w-1/2 flex flex-col pr-2">
                    <span className="text-sm font-medium text-gray-500 h-4">{this.state.weight}</span>
                    <span className="text-xs font-medium text-gray-400">Weight</span>
                </div>
            </div>
        </div >;
    }
}

export default HeroCard;