import "../styles/Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register-container">
      <h2 className="register-title">Criar Nova Conta</h2>
      <p className="register-subtitle">Ainda não tem uma conta? Ingrese já</p>
      <form className="register-form">
        <label className="register-label">Nome</label>
        <input className="register-input" type="text" placeholder="Digite seu nome" />
        
        <label className="register-label">E-mail</label>
        <input className="register-input" type="email" placeholder="Digite seu e-mail" />
        
        <label className="register-label">Senha</label>
        <input className="register-input" type="password" placeholder="Digite sua senha" />
        
        <label className="register-label">CNPJ</label>
        <input className="register-input" type="text" placeholder="Digite seu CNPJ" />
        
        <button className="register-button" type="submit">Criar Conta</button>
      </form>
      <p className="register-login-link">Já tem conta? <a href="/login">Login</a></p>
    </div>
  );
};

export default Register;
