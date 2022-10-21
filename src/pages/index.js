import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/AboutPage";
import UMKMPage from "./UMKMPage/UMKMPage";
import PromoPage from "./PromoPage/PromoPage";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";

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
    {
        name: "login",
        path: "/login",
        el: () => (<LoginPage />)
    },
    {
        name: "register",
        path: "/register",
        el: () => (<RegisterPage />)
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