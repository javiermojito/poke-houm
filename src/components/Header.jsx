import React from "react";

const Header = () => {
    return <div className="text-center bg-orange w-full h-64 md:h-72 lg:h-80" style={{ backgroundImage: "url('https://d28ipuewd7cdcq.cloudfront.net/assets/article/2020/06/19/pokemon-sword-shield-isle-of-armor-fields-of-honor-diglett-feature_feature.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundBlendMode: "multiply" }}>
        <div className="w-full h-full flex flex-col justify-center items-center" style={{ backdropFilter: "blur(2px)" }}>
            <h1 className="text-white font-nunito font-bold text-4xl pb-2">
                Welcome to PokeHoum
            </h1 >
            <h2 className="text-white font-nunito font-semibold text-lg pl-6 pr-6">¡A <a className="underline" href="https://pokeapi.co/">PokeAPI</a> based application know more to about your favorites Pokemons!</h2>
        </div>

    </div >
}

export default Header;