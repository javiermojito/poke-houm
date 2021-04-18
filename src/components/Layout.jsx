import React from "react";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";


const Layout = (props) => {
    return(
        <div className="relative h-full">
            <NavBar />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout;