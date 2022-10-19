import React from "react";
import "./Filter.css";

function FilterContainer({ children }) {

    const [isFixed, setIsFixed] = React.useState(false);

    const stickyContainer = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            setIsFixed(true);
        }else{
            setIsFixed(false);
        }
    }

    React.useEffect(() => {
        window.onscroll = () => { stickyContainer() }
    }, [])

    return (
        <div className={"filter-container " + (isFixed ? "filter-container--sticky" : "")}>
            { children }
        </div>
    );
}

export default FilterContainer