import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/AboutPage";
import UMKMPage from "./UMKMPage/UMKMPage";
import PromoPage from "./PromoPage/PromoPage";

const authPages = [

];

const guestPages = [
    {
        name: "home",
        path: "/",
        el: () => (<HomePage />)
    },
    {
        name: "about",
        path: "/about",
        el: () => (<AboutPage />)
    },
    {
        name: "umkm",
        path: "/umkm",
        el: () => (<UMKMPage />)
    },
    {
        name: "promo",
        path: "/promo",
        el: () => (<PromoPage />)
    },
];

const getAuthPages = () => authPages;
const getGuestPages = () => guestPages;
const routes = (name) => {
    const pages = [...authPages, ...guestPages];
    return pages.find(page => page.name === name).path;
}

export {
    getAuthPages,
    getGuestPages,
    routes
};