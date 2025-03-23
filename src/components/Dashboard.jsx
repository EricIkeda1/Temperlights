import React from "react";
import { LineChart, Line, PieChart, Pie, Tooltip, Legend, XAxis, YAxis, CartesianGrid } from "recharts";
import "../styles/dashboard.css";
import { Link } from "react-router-dom";

const dashboardProductionData = [
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

const dashboardStatusData = [
  { name: "Corte", value: 22.2, fill: "#8884d8" },
  { name: "Carregamento", value: 33, fill: "#82ca9d" },
  { name: "Lapidação", value: 29.1, fill: "#FFCC00" },
  { name: "Forno de Têmpera", value: 15.6, fill: "#FF6B6B" },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <h2 className="dashboard-title">TEMPERLIGHTS</h2>
        <input type="text" placeholder="Pesquisar" className="dashboard-search" />
        <nav className="dashboard-menu">
          <Link to="/dashboard">📊 Dashboard</Link>
          <Link to="/pedidos">📦 Pedidos</Link>
          <Link to="#">📂 Projetos</Link>
          <Link to="#">⚙️ Configurações</Link>
          <Link to="#">🔐 Permissões</Link>
          <Link to="#">🗑️ Excluídos</Link>
          <Link to="/home">🔐 Sair</Link>
        </nav>
      </aside>

      <main className="dashboard-content">
        <header className="dashboard-navbar">
          <span>Ana Ribeiro - Administradora</span>
        </header>

        <div className="dashboard-main">
          <h1 className="dashboard-header">DADOS</h1>
          <div className="dashboard-stats">
            <div className="dashboard-stats-card dashboard-blue">
              <h3>Vendas Totais (R$)</h3>
              <h2>890</h2>
              <p>+3,5% essa semana</p>
            </div>
            <div className="dashboard-stats-card dashboard-red">
              <h3>Perdas na Produção (R$)</h3>
              <h2>977</h2>
              <p>-5,1% essa semana</p>
            </div>
            <div className="dashboard-stats-card dashboard-blue">
              <h3>Pedidos em Andamento</h3>
              <h2>3</h2>
              <p>+1 essa semana</p>
            </div>
            <div className="dashboard-stats-card dashboard-blue">
              <h3>Total de Pedidos</h3>
              <h2>567</h2>
              <p>+3 essa semana</p>
            </div>
          </div>

          <div className="dashboard-charts-container">
            <div className="dashboard-chart dashboard-line-chart">
              <h3>Estatísticas de Receita</h3>
              <LineChart width={600} height={300} data={dashboardProductionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#ffffff" />
                <YAxis stroke="#ffffff" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="receita" stroke="#ffffff" />
              </LineChart>
            </div>

            <div className="dashboard-chart dashboard-pie-chart">
              <h3>Perdas Por Setor</h3>
              <PieChart width={300} height={300}>
                <Pie data={dashboardStatusData} dataKey="value" cx="50%" cy="50%" outerRadius={100} label />
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