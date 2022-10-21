let actions = [];

export const setActionOnWindowResize = (callback) => {
    actions.push(callback);
}

const onWindowResize = () => {
    window.onresize = () => {
        actions.forEach(action => {
            action(window.innerWidth);
        })
    }
}

export default onWindowResize;