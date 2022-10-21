let actions = [];
let currentWindowScroll = document.documentElement.scrollTop;

export const setActionOnWindowScroll = (callback) => {
    actions.push(callback);
}

export const getCurrentWindowScroll = () => {
    return currentWindowScroll;
}

export const setCurrentWindowScroll = (value) => {
    currentWindowScroll = value;
}

const onWindowScroll = () => {
    window.onscroll = () => {
        setCurrentWindowScroll(document.documentElement.scrollTop);
        actions.forEach(action => {
            action(getCurrentWindowScroll());
        });
    };
};

export default onWindowScroll;