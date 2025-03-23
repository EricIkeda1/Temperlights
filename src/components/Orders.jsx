import React from "react";
import "../styles/orders.css";

const orders = [
  { id: 393, name: "AL. SEMPREVERDE", progress: 80.8, status: "alerta" },
  { id: 394, name: "PREFEITURA APUCARANA", progress: 98.7, status: "em-andamento" },
  { id: 395, name: "FÁBIO RAMALHO LTDA", progress: 18.0, status: "em-andamento" },
  { id: 396, name: "ACME INC.", progress: 100, status: "finalizado" },
  { id: 397, name: "RESTAURANTE VITRAIS", progress: 15.0, status: "cancelado" },
];

const Orders = () => {
  return (
    <div className="orders-container">
      <aside className="sidebar">
        <h2 className="logo">TEMPERLIGHTS</h2>
        <input type="text" placeholder="Pesquisar" className="search-bar" />
        <nav className="menu">
          <a href="/dashboard">📊 Dashboard</a>
          <a href="#">📦 Pedidos</a>
          <a href="#">📂 Projetos</a>
          <a href="#">⚙️ Configurações</a>
          <a href="#">🔐 Permissões</a>
          <a href="#">🗑️ Excluídos</a>
        </nav>
      </aside>

      <main className="dashboard-content">
        <header className="dashboard-navbar">
          <span>Ana Ribeiro - Administradora</span>
        </header>

        <div className="orders-header">
          <h1>PEDIDOS</h1>
          <div className="status-filters">
            <button className="filter em-andamento">EM ANDAMENTO</button>
            <button className="filter alerta">ALERTA</button>
            <button className="filter finalizado">FINALIZADO</button>
            <button className="filter cancelado">CANCELADO</button>
          </div>
        </div>

        <div className="orders-list">
          {orders.map((order) => (
            <div key={order.id} className={`order-card ${order.status}`}>
              <span className="order-id">#{order.id} - {order.name}</span>
              <span className="order-progress">{order.progress}%</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Orders;
