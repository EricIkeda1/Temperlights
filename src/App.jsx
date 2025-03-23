import { useState } from "react";
import "./App.css";
import fogueteGif from "/src/assets/foguete.gif";
import Login from "./components/Login";
import { FaBars, FaTimes } from "react-icons/fa"; 

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="app-container">
      {showLogin ? (
        <Login />
      ) : (
        <>
          <nav className="navbar">
            <div className="logo">Temperlights</div>
            
            <button className="menu-toggle" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
              <li><button className="nav-btn" onClick={closeMenu}>Home</button></li>
              <li><button className="nav-btn" onClick={closeMenu}>Sobre nós</button></li>
              <li><button className="nav-btn" onClick={closeMenu}>Preço</button></li>
              <li><button className="nav-btn" onClick={() => { setShowLogin(true); closeMenu(); }}>Login</button></li>
              <li><button className="demo-btn" onClick={closeMenu}>Demo</button></li>
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
