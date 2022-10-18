import React from "react";
import PropTypes from "prop-types";
import "./Carousel.css";
import CarouselItem from "./CarouselItem";
import { getRandomColors } from "../../utils/randomColors";

function Carousel({ items }) {

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [isFade, setIsFade] = React.useState(false);
    const [backgroundColors, setBackgroundColors] = React.useState(['']);

    const changeIndexHandler = (value) => {
        if (value > items.length - 1) {
            setSelectedIndex(0);
        }else{
            setSelectedIndex(value);
        }
        setIsFade(() => true);
    } 

    React.useEffect(() => {
        setBackgroundColors(getRandomColors(items.length));
    }, [])

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            changeIndexHandler(selectedIndex + 1);
        }, 4000);

        return () => {
            clearInterval(intervalId);
        }
    }, [selectedIndex])

    if(!items) {
        return null;
    }

    return (
        <div 
            className={"carousel " + (isFade ? "fading" : "")}
            onAnimationEnd={() => setIsFade(false)}
            onClick={() => changeIndexHandler(selectedIndex + 1)}
        >
            <CarouselItem 
                image={items[selectedIndex].image}
                title={items[selectedIndex].title}
                address={items[selectedIndex].address}
                description={items[selectedIndex].description}
                bgColor={backgroundColors[selectedIndex]}
            />

            <div className="carousel-pagination" >
                {items && items.map((item, index) => (
                    <input 
                        className="carousel-pagination-item" 
                        type="radio" 
                        name="carousel" 
                        value={index} 
                        key={index} 
                        onChange={() => changeIndexHandler(index)}
                        checked={selectedIndex === index}
                    />
                ))}
            </div>
        </div>
    );
}

Carousel.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Carousel;