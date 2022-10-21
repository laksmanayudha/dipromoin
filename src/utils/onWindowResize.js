let actions = [];

let currentWindowWidth = window.innerWidth;

export const setActionOnWindowResize = (callback) => {
    actions.push(callback);
};

export const getCurrenWindowSize = () => {
    return currentWindowWidth;
}

export const setCurrentWindowWidth = (value) => {
    currentWindowWidth = value;
}

const onWindowResize = () => {
    window.onresize = () => {
        setCurrentWindowWidth(window.innerWidth);
        actions.forEach(action => {
            action(getCurrenWindowSize());
        });
    };
};

export default onWindowResize;