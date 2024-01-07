// App.jsx
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import Header from "./Header";
import TokenStats from "./Tokenstats";
import MintBurnRates from "./MintBurnRate";
import QualifiedAddresses from "./QualifiedAddress";
import "./App.css"; // Import your CSS file

const App = () => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const qualifiedAddresses = [
    "0x67431f0d6EeDe687b152D1ae4739998888c99761",
    // Add other qualified addresses as needed
  ];

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        try {
          // Request account access if needed
          await window.ethereum.request({ method: "eth_requestAccounts" });

          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);

          // Get the list of accounts
          const accs = await web3Instance.eth.getAccounts();
          setAccounts(accs);
        } catch (error) {
          console.error("Error connecting to MetaMask:", error);
        }
      } else {
        console.error(
          "MetaMask not detected. Please install MetaMask extension."
        );
      }
    };

    initWeb3();
  }, []);

  const connectWallet = async () => {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);

      // Get the list of accounts
      const accs = await web3Instance.eth.getAccounts();
      setAccounts(accs);
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  };

  const disconnectWallet = () => {
    setWeb3(null);
    setAccounts([]);
  };

  return (
    <div className="container">
      <Header
        connectWallet={connectWallet}
        disconnectWallet={disconnectWallet}
        isConnected={web3 ? accounts[0] : null}
      />

      <TokenStats className="token-stats" />
      <MintBurnRates className="mint-burn-rates" />
      <QualifiedAddresses
        className="qualified-addresses"
        addresses={qualifiedAddresses}
      />
    </div>
  );
};

export default App;
