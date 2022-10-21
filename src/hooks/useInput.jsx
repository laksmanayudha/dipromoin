import React from "react";

function useInput(defaultValue) {
    const [input, setInput] = React.useState(defaultValue);
    const onInputChangeHandler = (event) => {
        console.log(event.target.value);
        setInput(event.target.value);
    }

    return [input, onInputChangeHandler];
}

export default useInput;