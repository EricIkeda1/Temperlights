import React from "react";
import "../../styles/StatsCard.css";

const StatsCard = ({ title, value }) => {
  return (
    <div className="stats-card">
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
};

export default StatsCard;
