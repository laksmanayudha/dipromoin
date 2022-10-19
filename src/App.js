import React from "react";
import { Navbar, NavbarLink } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { getGuestPages, routes } from "./pages";
import "./App.css";

function App() {

  const [pages] = React.useState(getGuestPages());

  return (
    <div className="App">
      {/* header */}
      <header className="App-header">
        <Navbar>
          <NavbarLink label="Home" href={routes("home")} />
          <NavbarLink label="About us" href={routes("about")} />
          <NavbarLink label="Promo" href="/promo" />
          <NavbarLink label="UMKM" href={routes("umkm")} />
          <NavbarLink label="Login" href="/login" />
          <NavbarLink label="Register" href="/register" />
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
