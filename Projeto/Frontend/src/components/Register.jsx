import { useState } from "react";
import "../styles/register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="register-container">
      <nav className="register-navbar">
        <div className="register-logo">Temperlights</div>

        <div className="hamburger-icon" onClick={toggleMenu}>
          ☰
        </div>

        <ul className={`register-nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="#">Sobre nós</Link></li>
          <li><Link to="#">Search</Link></li>
          <li>
            <input type="text" placeholder="Search" className="register-search-input" />
          </li>
          <li><Link to="#">🔍</Link></li>
        </ul>
      </nav>

      <h2 className="register-title">Criar Nova Conta</h2>
      <p className="register-subtitle">Ainda não tem uma conta? Ingresse já</p>
      <form className="register-form">
        <label className="register-label">Nome</label>
        <input className="register-input" type="text" placeholder="Jiara Martins" />
        
        <label className="register-label">E-mail</label>
        <input className="register-input" type="email" placeholder="hello@reallygreatsite.com" />
        
        <label className="register-label">Senha</label>
        <input className="register-input" type="password" placeholder="******" />
        
        <label className="register-label">CNPJ</label>
        <input className="register-input" type="text" placeholder="******" />
        
        <button className="register-button" type="submit">Criar Conta</button>
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Register;
