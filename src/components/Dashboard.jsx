import React from "react";
import { LineChart, Line, PieChart, Pie, Tooltip, Legend, XAxis, YAxis, CartesianGrid } from "recharts";
import "../styles/Dashboard.css";

const productionData = [
  { name: "Jan", receita: 10 },
  { name: "Feb", receita: 30 },
  { name: "Mar", receita: 50 },
  { name: "Apr", receita: 80 },
  { name: "May", receita: 100 },
  { name: "Jun", receita: 130 },
  { name: "Jul", receita: 150 },
  { name: "Aug", receita: 170 },
  { name: "Sep", receita: 190 },
  { name: "Oct", receita: 210 },
  { name: "Nov", receita: 230 },
  { name: "Dec", receita: 250 },
];

const statusData = [
  { name: "Corte", value: 22.2, fill: "#8884d8" },
  { name: "Carregamento", value: 33, fill: "#82ca9d" },
  { name: "Lapidação", value: 29.1, fill: "#FFCC00" },
  { name: "Forno de Têmpera", value: 15.6, fill: "#FF6B6B" },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>TEMPERLIGHTS</h2>
        <input type="text" placeholder="Pesquisar" className="search" />
        <nav>
          <a href="#">📦 Pedidos</a>
          <a href="#">📂 Projetos</a>
          <a href="#">⚙️ Configurações</a>
          <a href="#">🔐 Permissões</a>
          <a href="#">🗑️ Excluídos</a>
        </nav>
      </aside>

      <main className="content">
        <header className="navbar">
          <span>Ana Ribeiro - Administradora</span>
        </header>

        <div className="dashboard">
          <h1>DADOS</h1>
          <div className="stats">
            <div className="stats-card">Vendas Totais (R$) <h2>890</h2></div>
            <div className="stats-card">Perdas na Produção (R$) <h2>977</h2></div>
            <div className="stats-card">Pedidos em Andamento <h2>3</h2></div>
            <div className="stats-card">Total de Pedidos <h2>567</h2></div>
          </div>

          <div className="charts-container">
            <div className="chart">
              <h3>Estatísticas de Receita</h3>
              <LineChart width={400} height={250} data={productionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="receita" stroke="#ffffff" />
              </LineChart>
            </div>

            <div className="chart">
              <h3>Perdas Por Setor</h3>
              <PieChart width={250} height={250}>
                <Pie data={statusData} dataKey="value" cx="50%" cy="50%" outerRadius={80} label />
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
