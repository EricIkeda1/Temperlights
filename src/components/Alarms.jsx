import React from "react";
import { Link } from "react-router-dom";
import "../styles/alarms.css";

const Alarms = () => {
  return (
    <div className="alarms-container">
      <aside className="dashboard-sidebar">
        <h2 className="dashboard-title">TEMPERLIGHTS</h2>
        <input type="text" placeholder="Pesquisar" className="dashboard-search" />
        <nav className="dashboard-menu">
          <Link to="/alarmes">🚨 Alarmes</Link>
          <Link to="/dashboard">📊 Dashboard</Link>
          <Link to="/pedidos">📦 Pedidos</Link>
          <Link to="/home">🔐 Sair</Link>
        </nav>
      </aside>
      
      <main className="alarms-content">
        <h1>Lote 3 (Pedido #393 - AL. SEMPREV...)</h1>
        
        <div className="status-cards">
          <div className="status-card green"> <span>5</span> EM ANDAMENTO </div>
          <div className="status-card yellow"> <span>1</span> ALERTA </div>
          <div className="status-card blue"> <span>5</span> FINALIZADO </div>
          <div className="status-card red"> <span>1</span> PERDAS </div>
        </div>
        
        <table className="alarms-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Tipo</th>
              <th>Máquina</th>
              <th>Dimensões (cm)</th>
              <th>Tempo ocioso</th>
              <th>Data de Começo</th>
            </tr>
          </thead>
          <tbody>
            <tr className="row-orange">
              <td>1</td>
              <td>Temperado</td>
              <td>Jateadora</td>
              <td>200x200</td>
              <td>12:03:15</td>
              <td>24.05.2024 11:16 AM</td>
            </tr>
            <tr className="row-green">
              <td>2</td>
              <td>Laminado</td>
              <td>Lapidadora</td>
              <td>250x400</td>
              <td>00:00:00</td>
              <td>24.05.2024 07:16 AM</td>
            </tr>
            <tr className="row-blue">
              <td>3</td>
              <td>Temperado</td>
              <td>Lapidadora</td>
              <td>200x200</td>
              <td>00:03:01</td>
              <td>24.05.2024 11:03 AM</td>
            </tr>
            <tr className="row-blue">
              <td>4</td>
              <td>Temperado</td>
              <td>Jateadora</td>
              <td>200x200</td>
              <td>00:03:01</td>
              <td>24.05.2024 11:03 AM</td>
            </tr>
            <tr className="row-red">
              <td>5</td>
              <td>Laminado</td>
              <td>Lapidadora</td>
              <td>250x400</td>
              <td>00:00:00</td>
              <td>24.05.2024 07:16 AM</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Alarms;