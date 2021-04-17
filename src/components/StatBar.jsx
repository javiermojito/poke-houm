import React from "react";

const StatBar = (props) => {
    return <div className="w-full">
        <div className="overflow-hidden h-1 text-xs flex rounded-full bg-lightGray4">
            <div style={{ width: `${props.base_stat}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange"></div>
        </div>
    </div>;
}

export default StatBar;


