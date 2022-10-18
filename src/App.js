import React from "react";
import HomePage from "./pages/HomePage";
import { Navbar, NavbarLink } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar>
          <NavbarLink label="Home" href="/" />
          <NavbarLink label="About us" href="/about" />
          <NavbarLink label="Promo" href="/promo" />
          <NavbarLink label="UMKM" href="/umkm" />
          <NavbarLink label="Login" href="/login" />
          <NavbarLink label="Register" href="/register" />
        </Navbar>
      </header>
      <main className="App-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<h1>not found</h1>} />
        </Routes>
      </main>
      <footer className="App-footer">

      </footer>
    </div>
  );
}

export default App;
