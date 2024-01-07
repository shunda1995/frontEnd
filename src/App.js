// App.jsx
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import Header from "./Header";
import TokenStats from "./Tokenstats";
import MintBurnRates from "./MintBurnRate";
import QualifiedAddresses from "./QualifiedAddress";
import "./App.css";

const App = () => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const qualifiedAddresses = [
    "0x67431f0d6EeDe687b152D1ae4739998888c99761",
    // Add other qualified addresses as needed
  ];

  const tokenStats = {
    mintRate: 0.5,
    burnRate: 0.5,
    isBurning: true,
    macroContraction: true,
    turn: 0,
    airdropAddress: "0xF70f439469028A637E3917ab768E7cE686BA4F7d",
  };

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });

          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);

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
    <div className="app-container">
      <Header
        connectWallet={connectWallet}
        disconnectWallet={disconnectWallet}
        isConnected={web3 ? accounts[0] : null}
      />

      <div className="content-container">
        <div className="left-container">
          <TokenStats {...tokenStats} className="token-stats" />
          <QualifiedAddresses
            className="qualified-addresses"
            addresses={qualifiedAddresses}
          />
        </div>

        <div className="right-container">
          {/* Add your new component or content here */}
          <h1>You are </h1>
        </div>
      </div>
    </div>
  );
};

export default App;
