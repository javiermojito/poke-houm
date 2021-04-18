import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component{
    render(){
        return <div className="h-screen flex flex-col justify-center items-center text-center">
            <img src="https://i.imgur.com/OjiAoAK.png" alt=""/>
            <h1 className="text-2xl font-semibold font-nunito pl-8 pr-8">¡You just catched a 404'mon behind that bush!</h1>
            <p className="text-lg font-normal font-nunito pl-8 pr-8">By the way, there is nothing else here... you can go <Link to ="/"><span className="font-semibold text-blue">home</span></Link> if you want..</p>
        </div>;
    }
}

export default NotFound;