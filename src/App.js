import React from "react";
import { Navbar, NavbarLink } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { getGuestPages, routes } from "./pages";
import onWindowScroll from "./utils/onWindowScroll";
import "./App.css";
import onWindowResize from "./utils/onWindowResize";

function App() {

  const [pages] = React.useState(getGuestPages());

  React.useEffect(() => {
    onWindowScroll();
    onWindowResize();
  }, []);

  return (
    <div className="App">
      {/* header */}
      <header className="App-header">
        <Navbar>
          <NavbarLink label="Home" href={routes("home")} />
          <NavbarLink label="About us" href={routes("about")} />
          <NavbarLink label="Promo" href={routes("promo")} />
          <NavbarLink label="UMKM" href={routes("umkm")} />
          <NavbarLink label="Login" href={routes("login")} />
          <NavbarLink label="Register" href={routes("register")} />
        </Navbar>
      </header>

      {/* main content */}
      <main className="App-main">
        <Routes>
          {pages.map((page, index) => (<Route path={page.path} element={page.el()} key={index} />))}
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
