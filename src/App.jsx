import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import fogueteGif from "/src/assets/foguete.gif";
import Login from "./components/Login";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="app-container">
      {showLogin ? (
        <Login />
      ) : (
        <>
          <nav className="navbar">
            <div className="logo">Temperlights</div>
            <ul className="nav-links">
              <li><button className="login-btn" onClick={() => setShowHome(true)}>Home</button></li>
              <li><button className="login-btn" onClick={() => setShow(true)}>Sobre nós</button></li>
              <li><button className="login-btn" onClick={() => setShow(true)}>Preço</button></li>
              <li><button className="login-btn" onClick={() => setShowLogin(true)}>Login</button></li>
              <li><button className="demo-btn">Demo</button></li>
            </ul>
          </nav>


          <header className="hero">
            <h1>Rastreabilidade Industrial</h1> 
            <p>Rastreabilidade de Produção industrial utilizando Visão Computacional</p>
            <button className="cta-btn">ORÇAMENTO →</button>
            <img src={fogueteGif} alt="Foguete" className="rocket" />
          </header>
        </>
      )}
    </div>
  );
}

export default App;
