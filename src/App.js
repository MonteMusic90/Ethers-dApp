import logo from './logo.svg';
import './App.css';
import web3 from 'web3';
import {React, useState, useEffect} from 'react';
import Web3 from 'web3';
import img1 from './images/link.gif';


function App() {

  useEffect(() => {

    const {ethereum} = window;
    let web3 = new Web3(window.ethereum);

  });

  const connectWallet = async() => {

    await window.ethereum.request({
      method: "wallet_requestPermissions",
      params: [
        {
          eth_accounts: {},
        },
      ],
    });

    const account = await window.ethereum.request({method: "eth_requestAccounts"});

    localStorage.setItem("address", account[0]);

    window.alert("Connected Wallet Address: " + localStorage.address)

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={img1} alt="" className='img'/>
        <h2 className='title'>
          My Ethers dApp
        </h2>
        <button onClick={connectWallet} className='btn'>Connect Wallet</button>
        <br></br>
        <button onClick={sendTransaction} className='btn2'>Send Transaction</button>
      </header>
    </div>
  );
}

async function sendTransaction() {

  let params = [{
    "from": "0xfF97Af883234a36F5080a8F83664bca9fdEbAc28",
    "to": "0x314f0205337e994803CFFf1C22b31466eF25fb2a",
    "gas": "0x76c0", // 30400
    "gasPrice": "0x9184e72a000", // 10000000000000
    "value": "0x9184e72a", // 2441406250
    "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
  }]

 await window.ethereum.request({method: "eth_sendTransaction", params})
}

export default App;
