let actions = [];

let currentElement = document;

export const setActionOnDocumentClick = (callback) => {
    actions.push(callback);
};

export const getCurrentElement = () => {
    return currentElement;
}

export const setCurrentElement = (value) => {
    currentElement = value;
}

const onDocumentClick = () => {
    document.onclick = (event) => {
        setCurrentElement(event.target);
        actions.forEach(action => {
            action(getCurrentElement());
        });
    };
};

export default onDocumentClick;