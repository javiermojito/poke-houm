import React from "react";
import NavBar from "./NavBar.jsx";

const Layout = (props) => {
    return(
        <div className="relative h-full">
            <NavBar />
            {props.children}

        </div>
    )
}

export default Layout;