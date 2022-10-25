import React from "react";
import { Navbar, NavbarLink } from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { getAuthPages, getGuestPages, routes } from "./pages";
import { getUMKM } from "./utils/dummy-data";
import onWindowScroll from "./utils/onWindowScroll";
import onWindowResize from "./utils/onWindowResize";
import onDocumentClick from "./utils/onDocumentClick";
import "./App.css";

function App() {

  const [pages, setPages] = React.useState([...getGuestPages(), ...getAuthPages()]);
  const [authedUser, setAuthedUser] = React.useState(null);
  const { pathname } = useLocation();

  React.useEffect(() => {
    onWindowScroll();
    onWindowResize();
    onDocumentClick();

    // set the getUMKM parameter to "0" to action as guest
    // set the getUMKM parameter to "1" or another umkm id to action as authed UMKM
    // see the data on /src/utils/dummy-data.js
    const { error, data } = getUMKM("0");
    if (!error) {
      setAuthedUser(data);
      setPages(getAuthPages());
    }

  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      {/* header */}
      <header className="App-header">
        <Navbar logo={"Dipromoin.id"}>
          <NavbarLink label="Home" href={routes("home")} />
          <NavbarLink label="About us" href={routes("about")} />
          <NavbarLink label="Promo" href={routes("promo")} />
          <NavbarLink label="UMKM" href={routes("umkm")} />

          {authedUser != null
          ? <NavbarLink label={authedUser.name} href={routes("profile", authedUser.id)} />
          : <>
              <NavbarLink label="Login" href={routes("login")} />
              <NavbarLink label="Register" href={routes("register")} />
            </>
          }
        </Navbar>
      </header>

      {/* main content */}
      <main className="App-main">
        <Routes>
          {pages.map((page, index) => (
            <Route 
              path={page.path} 
              element={page.el({ authedUser })} 
              key={index} 
            />
          ))}
        </Routes>
      </main>

      {/* footer */}
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
