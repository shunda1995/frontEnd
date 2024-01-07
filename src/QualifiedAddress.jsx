// QualifiedAddresses.jsx
import React from "react";
import "./QualifiedAddress.css";
const QualifiedAddresses = ({ addresses }) => {
  return (
    <div className="qualified-address-container">
      <h2>Qualified Addresses</h2>
      <table>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {addresses.map((address, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QualifiedAddresses;
