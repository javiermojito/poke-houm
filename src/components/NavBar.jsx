import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="w-full bg-white shadow-sm h-auto pt-2 pb-2 ">
            <Link to="/"> <img className="w-auto h-9 mx-auto" src="https://i.imgur.com/GmxjFwX.png" alt="PokeHoum"/> </Link> 
        </div>
    )
}

export default NavBar;