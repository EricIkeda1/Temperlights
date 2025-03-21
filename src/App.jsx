import { useState } from "react";
import "./App.css";
import fogueteGif from "./assets/foguete.gif";


function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">Temperlights</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Sobre nós</a></li>
          <li><a href="#">Preço</a></li>
          <li><a href="#">Login</a></li>
          <li><button className="demo-btn">Demo</button></li>
        </ul>
      </nav>

      <header className="hero">
        <h1>Rastreabilidade Industrial</h1>
        <p>Rastreabilidade de Produção industrial utilizando Visão Computacional</p>
        <button className="cta-btn">ORÇAMENTO →</button>
          <img src={fogueteGif} alt="Foguete" className="rocket" />
        </header>
    </div>
  );
}

export default App;
