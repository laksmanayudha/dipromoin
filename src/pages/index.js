const authPages = [

];

const guestPages = [

];

const getAuthPages = () => authPages;
const getGuestPages = () => guestPages;
const routes = (name) => {
    const pages = [...authPages, ...guestPages];
    return pages.map(page => page.name === name);
}

export {
    getAuthPages,
    getGuestPages,
    routes
};