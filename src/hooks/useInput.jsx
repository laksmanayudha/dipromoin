import React from "react";

function useInput(defaultValue) {
    const [input, setInput] = React.useState(defaultValue);
    const onInputChangeHandler = (value) => {
        // console.log(value);
        setInput(value);
    }

    return [input, onInputChangeHandler];
}

export default useInput;