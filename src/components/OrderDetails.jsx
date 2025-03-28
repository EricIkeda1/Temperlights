import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from "recharts";
import { Link } from "react-router-dom";
import "../styles/orderdetails.css";

const lineData = [
  { name: "Seg", lote1: 2, lote2: 5, lote3: 0 },
  { name: "Ter", lote1: 4, lote2: 6, lote3: 3 },
  { name: "Qua", lote1: 6, lote2: 7, lote3: 5 },
  { name: "Qui", lote1: 8, lote2: 5, lote3: 6 },
  { name: "Sex", lote1: 10, lote2: 8, lote3: 7 },
  { name: "Sab", lote1: 12, lote2: 9, lote3: 5 },
  { name: "Dom", lote1: 3, lote2: 2, lote3: 4 }
];

const pieData = [
  { name: "Realizado", value: 60.7, color: "#4caf50" },
  { name: "Aguardando", value: 16.7, color: "#b0bec5" },
  { name: "Em progresso", value: 12.6, color: "#2196f3" },
  { name: "Perda", value: 4.2, color: "#f44336" }
];

const OrderDetails = () => {
  return (
    <div className="order-details-container">
      <header>
        <h1>PEDIDO #393 - AL. SEMPREVERDE</h1>
      </header>

      <div className="order-details">
        <aside className="sidebar">
          <h2 className="logo">TEMPERLIGHTS</h2>
          <input type="text" placeholder="Pesquisar" className="search-box" />
        <nav className="menu">
          <Link to="/alarmes">🚨 Alarmes</Link>
          <Link to="/dashboard">📊 Dashboard</Link>
          <Link to="/pedidosdetalhados">📋 Detalhes do Pedido</Link>
          <Link to="/pedidos">📦 Pedidos</Link>
          <Link to="/home">🔐 Sair</Link>
        </nav>
        </aside>

        <main className="content">
          <section className="production-analysis">
            <h2>Análise de Produção</h2>
            <LineChart width={500} height={300} data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="lote1" stroke="#8884d8" />
              <Line type="monotone" dataKey="lote2" stroke="#82ca9d" />
              <Line type="monotone" dataKey="lote3" stroke="#ff0000" />
            </LineChart>
            <div className="lote-buttons">
              <button className="lote1-btn">LOTE 1</button>
              <button className="lote2-btn">LOTE 2</button>
              <button className="lote3-btn">LOTE 3</button>
            </div>
          </section>

          <section className="lot-status">
            <h2>Status do Lote</h2>
            <PieChart width={300} height={250}>
              <Pie data={pieData} cx={150} cy={125} innerRadius={50} outerRadius={80} dataKey="value">
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </section>
        </main>
      </div>
    </div>
  );
};

export default OrderDetails;
