import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/AboutPage";
import UMKMPage from "./UMKMPage/UMKMPage";
import PromoPage from "./PromoPage/PromoPage";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

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
    {
        name: "profile",
        path: "/profile/:param",
        el: (props) => (<ProfilePage {...props} />)
    },
    {
        name: "notfound",
        path: "/*",
        el: () => (<NotFoundPage />)
    },
];

const getAuthPages = () => authPages;
const getGuestPages = () => guestPages;
const routes = (name, id = null) => {
    const pages = [...authPages, ...guestPages];
    let path =  pages.find(page => page.name === name).path;

    if (id != null) {
        path = path.replace(/:param/g, id);
        return path;
    }
    return path;
}

export {
    getAuthPages,
    getGuestPages,
    routes
};