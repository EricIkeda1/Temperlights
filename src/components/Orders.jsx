import React, { useState } from "react";
import "../styles/orders.css";
import { Link } from "react-router-dom";

const orders = [
  { id: 393, name: "AL. SEMPREVERDE", progress: 80.8, status: "alerta" },
  { id: 394, name: "PREFEITURA APUCARANA", progress: 98.7, status: "em-andamento" },
  { id: 395, name: "FÁBIO RAMALHO LTDA", progress: 18.0, status: "em-andamento" },
  { id: 396, name: "ACME INC.", progress: 100, status: "finalizado" },
  { id: 397, name: "RESTAURANTE VITRAIS", progress: 15.0, status: "cancelado" },
];

const Orders = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  const handleFilterChange = (status) => {
    setActiveFilter(status);
  };

  const filteredOrders = orders.filter((order) => {
    if (activeFilter === "todos") return true;
    return order.status === activeFilter;
  });

  return (
    <div className="orders-container">
      <aside className="sidebar">
        <h2 className="logo">TEMPERLIGHTS</h2>
        <input type="text" placeholder="Pesquisar" className="search-bar" />
        <nav className="menu">
          <Link to="/alarmes">📊 Alarmes</Link>
          <Link to="/dashboard">📊 Dashboard</Link>
          <Link to="/pedidos">📦 Pedidos</Link>
          <Link to="/home">🔐 Sair</Link>
        </nav>
      </aside>

      <main className="dashboard-content">
        <header className="dashboard-navbar">
          <span>Ana Ribeiro - Administradora</span>
        </header>

        <div className="orders-header">
          <h1>PEDIDOS</h1>
          <div className="status-filters">
            <button
              className={`filter em-andamento ${activeFilter === "em-andamento" ? "active" : ""}`}
              onClick={() => handleFilterChange("em-andamento")}
            >
              EM ANDAMENTO
            </button>
            <button
              className={`filter alerta ${activeFilter === "alerta" ? "active" : ""}`}
              onClick={() => handleFilterChange("alerta")}
            >
              ALERTA
            </button>
            <button
              className={`filter finalizado ${activeFilter === "finalizado" ? "active" : ""}`}
              onClick={() => handleFilterChange("finalizado")}
            >
              FINALIZADO
            </button>
            <button
              className={`filter cancelado ${activeFilter === "cancelado" ? "active" : ""}`}
              onClick={() => handleFilterChange("cancelado")}
            >
              CANCELADO
            </button>
            <button
              className={`filter todos ${activeFilter === "todos" ? "active" : ""}`}
              onClick={() => handleFilterChange("todos")}
            >
              TODOS
            </button>
          </div>
        </div>

        <div className="orders-list">
          {filteredOrders.map((order) => (
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
