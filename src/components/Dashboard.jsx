import React from "react";
import "../styles/Dashboard.css";
import { LineChart, Line, PieChart, Pie, Tooltip, Legend, XAxis, YAxis, CartesianGrid } from "recharts";

const productionData = [
  { name: "Seg", lote1: 2, lote2: 5, lote3: 1 },
  { name: "Ter", lote1: 4, lote2: 2, lote3: 3 },
  { name: "Qua", lote1: 5, lote2: 8, lote3: 6 },
  { name: "Qui", lote1: 8, lote2: 6, lote3: 7 },
  { name: "Sex", lote1: 6, lote2: 10, lote3: 9 },
  { name: "Sab", lote1: 3, lote2: 4, lote3: 2 },
  { name: "Dom", lote1: 1, lote2: 3, lote3: 1 },
];

const statusData = [
  { name: "Realizado", value: 60 },
  { name: "Em progresso", value: 12 },
  { name: "Aguardando", value: 10 },
  { name: "Perda", value: 4 },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>PEDIDO #393 - AL. SEMPREVERDE</h1>
      <div className="dashboard-layout">
        <div className="production-analysis">
          <h3>Análise de Produção</h3>
          <LineChart width={400} height={250} data={productionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="lote1" stroke="#8884d8" />
            <Line type="monotone" dataKey="lote2" stroke="#82ca9d" />
            <Line type="monotone" dataKey="lote3" stroke="#ff6b6b" />
          </LineChart>
          <div className="buttons">
            <button className="lote1">LOTE 1</button>
            <button className="lote2">LOTE 2</button>
            <button className="lote3">LOTE 3</button>
            <button className="add-lote">+</button>
          </div>
        </div>
        <div className="status-chart">
          <h3>Lote 1</h3>
          <PieChart width={250} height={250}>
            <Pie data={statusData} dataKey="value" cx="50%" cy="50%" outerRadius={80} label />
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
        <div className="order-status">
          <h3>Resumo do Pedido</h3>
          <div className="status-boxes">
            <div className="status-item pending">5 EM ANDAMENTO</div>
            <div className="status-item alert">1 ALERTA</div>
            <div className="status-item completed">5 FINALIZADO</div>
            <div className="status-item lost">1 PERDA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
