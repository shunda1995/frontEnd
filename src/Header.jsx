// Header.jsx
import React from "react";

const Header = ({ connectWallet, disconnectWallet, isConnected }) => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-brand">Your Logo</div>
        <div className="navbar-buttons">
          {!isConnected ? (
            <button className="connect-button" onClick={connectWallet}>
              Connect Wallet
            </button>
          ) : (
            <div className="connected-info">
              <p>Connected to MetaMask</p>
              <p>Current Account: {isConnected}</p>
              <button className="disconnect-button" onClick={disconnectWallet}>
                Disconnect Wallet
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
