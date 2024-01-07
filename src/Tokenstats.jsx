import React from "react";
import "./TokenStats.css"; // Import the CSS file

const TokenStats = ({
  mintRate,
  burnRate,
  isBurning,
  macroContraction,
  turn,
  airdropAddress,
}) => {
  return (
    <div className="token-stats-container">
      <h2>Token Stats</h2>
      <ul>
        <li>
          <span className="stat-name">Mint Rate:</span> {mintRate}%
        </li>
        <li>
          <span className="stat-name">Burn Rate:</span> {burnRate}%
        </li>
        <li>
          <span className="stat-name">Is Burning:</span>{" "}
          {isBurning ? "Yes" : "No"}
        </li>
        <li>
          <span className="stat-name">Macro Contraction:</span>{" "}
          {macroContraction ? "Yes" : "No"}
        </li>
        <li>
          <span className="stat-name">Turn:</span> {turn}
        </li>
        <li>
          <span className="stat-name">Airdrop Address:</span> {airdropAddress}
        </li>
      </ul>
    </div>
  );
};

export default TokenStats;
