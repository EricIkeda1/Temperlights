import "./../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); 

  const handleLogin = (event) => {
    event.preventDefault(); 
    navigate("/dashboard"); 
  };

  return (
    <div className="login-container">
      <nav className="login-navbar">
        <div className="login-logo">Temperlights</div>
        <ul className="login-nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="#">Sobre nós</Link></li>
          <li><Link to="#">Search</Link></li>
          <li>
            <input type="text" placeholder="Search" className="search-input" />
          </li>
          <li><Link to="#">🔍</Link></li>
        </ul>
      </nav>

      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <p className="login-subtitle">Ingressar em uma conta existente</p>

        <form onSubmit={handleLogin}> 
          <label className="login-label">E-MAIL</label>
          <input type="email" className="login-input" placeholder="hello@reallygreatsite.com" required />

          <label className="login-label">SENHA</label>
          <input type="password" className="login-input" placeholder="******" required />

          <button className="login-button" type="submit">Entrar</button>
        </form>

        <p className="login-footer">
          Ainda não tem conta? <Link to="/register">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
