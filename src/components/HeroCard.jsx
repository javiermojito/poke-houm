import React from "react";
import StatBar from "./StatBar.jsx";

class HeroCard extends React.Component {
    render() {
        return <div className="flex flex-col shadow h-80 w-80 md:h-full md:w-full rounded-lg m-3 mx-auto">
            <div className="flex flex-row bg-orange items-center rounded-t-lg h-20">
                <div className="flex flex-col pt-2 pb-2 pl-12 w-2/4">
                    <span className="text-2xl text-white font-semibold">Ditto</span>
                    <span className="text-sm text-white font-light"> #010 </span>
                </div>
                <div className="flex flex-wrap item-center h-full w-2/4">
                    <img className="mx-auto my-auto h-full w-28 object-cover" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="ditto" />
                </div>
            </div>

            <div className="flex flex-row justify-center w-full h-24 bg-darkOrange items-center gap-x-2">
                <div className="bg-red-400 rounded-full text-center h-7 pl-3 pr-3 pb-1">
                    <span className="text-white text-xs font-medium">Grass</span>
                </div>
                <div className="bg-red-400 rounded-full text-center h-7 pl-3 pr-3 pb-1">
                    <span className="text-white text-xs font-medium">Poison</span>
                </div>
                <div className="bg-red-400 rounded-full text-center h-7 pl-3 pr-3 pb-1">
                    <span className="text-white text-xs font-medium">Normal</span>
                </div>
            </div>
            
            <div className="flex flex-wrap content-center bg-white h-full w-full items-center">
                <div className="grid grid-cols-6 gap-0 gap-x-1 content-center items-center ml-6 mr-6">
                    {/* HP */}
                    <span className="text-xs font-semibold col-span-2">HP</span>
                    <span className="text-xs font-normal text-center">60</span>
                    <div className="col-span-3">
                        <StatBar base_stat="60" />
                    </div>

                    {/* Attack */}
                    <span className="text-xs font-semibold col-span-2">Attack</span>
                    <span className="text-xs font-normal text-center">60</span>
                    <div className="col-span-3">
                        <StatBar base_stat="80" />
                    </div>

                    {/* Defense */}
                    <span className="text-xs font-semibold col-span-2">Defense</span>
                    <span className="text-xs font-normal text-center">60</span>
                    <div className="col-span-3">
                        <StatBar base_stat="20" />
                    </div>

                    {/* Special Attack */}
                    <span className="text-xs font-semibold col-span-2">Special Attack</span>
                    <span className="text-xs font-normal text-center">60</span>
                    <div className="col-span-3">
                        <StatBar base_stat="60" />
                    </div>

                    {/* Special Defense */}
                    <span className="text-xs font-semibold col-span-2">Special Defense</span>
                    <span className="text-xs font-normal text-center">60</span>
                    <div className="col-span-3">
                        <StatBar base_stat="80" />
                    </div>

                    {/* Speed */}
                    <span className="text-xs font-semibold col-span-2">Speed</span>
                    <span className="text-xs font-normal text-center">60</span>
                    <div className="col-span-3">
                        <StatBar base_stat="20" />
                    </div>
                </div>
            </div>

            <div className="bg-lightGray1 w-full h-32">
            
            </div>
            
        </div >;
    }
}

export default HeroCard;