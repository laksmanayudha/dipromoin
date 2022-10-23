import React from "react";
import "./Tab.css";

function TabDisplay({ children }) {

    return (
        <div className="tab-display">
            { children }
        </div>
    );
}

export default TabDisplay;