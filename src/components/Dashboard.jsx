import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, PieChart, Pie, Cell, Legend, CartesianGrid } from "recharts";
import "../styles/dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/temperlandia.json")
      .then((response) => response.json())
      .then((jsonData) => {
        if (jsonData.TEMPERLANDIA) {
          const etiquetas = jsonData.TEMPERLANDIA[0]["dados demais da etiqueta"];
          const confianças = etiquetas.map((item) => ({
            texto: item.texto.substring(0, 8),
            confianca: item.confianca,
          }));
          const altas = confianças.filter((item) => item.confianca > 0.5).length;
          const baixas = confianças.length - altas;
          const pizzaData = [
            { name: "Confiança Alta", value: altas },
            { name: "Confiança Baixa", value: baixas },
          ];
          const linhasData = etiquetas.map((item, index) => ({
            index,
            confianca: item.confianca,
          }));
          setData({ confianças, pizzaData, linhasData });
        }
      })
      .catch((error) => console.error("Erro ao carregar os dados:", error));
  }, []);

  if (!data) return <p>Carregando dados...</p>;

  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <h2 className="dashboard-title">TEMPERLIGHTS</h2>
        <input type="text" placeholder="Pesquisar" className="dashboard-search" />
        <nav className="dashboard-menu">
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
              <div className="dashboard-chart dashboard-bar-chart">

              <h3>Variação da Confiança</h3>
              <LineChart width={600} height={300} data={data.linhasData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="index" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="confianca" stroke="#ff7300" />
              </LineChart>
            </div>

            <div className="dashboard-chart dashboard-pie-chart">
              <h3>Distribuição de Confianças</h3>
              <PieChart width={400} height={400}>
                <Pie data={data.pizzaData} cx={200} cy={200} outerRadius={80} dataKey="value">
                  <Cell fill="#00C49F" />
                  <Cell fill="#FF8042" />
                </Pie>
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