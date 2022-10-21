let actions = [];

export const setActionOnWindowScroll = (callback) => {
    actions.push(callback);
}

const onWindowScroll = () => {
    window.onscroll = () => {
        actions.forEach(action => {
            action(document.documentElement.scrollTop);
        });
    };
};

export default onWindowScroll;