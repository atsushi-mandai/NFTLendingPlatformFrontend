import "./styles.css";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { HeaderComponent } from "./components/Header";
import { BodyLendComponent } from "./components/BodyLend";
import { BodyBorrowComponent } from "./components/BodyBorrow";
import { BodyAffiliateComponent } from "./components/BodyAffiliate";
import { StartApp } from "./components/scripts/Web3App";
import { abi } from "./components/scripts/Contract";

let web3;
let app;
let account;
const contractAddress = "0x6A976c729292325d5EA3b4Fc8CE85CcB29c8415f";

export default function App() {
  const connectWallet = async () => {
    web3 = await StartApp();
    app = await new web3.eth.Contract(abi, contractAddress);
    const accounts = await web3.eth.getAccounts();
    account = accounts[0];
    setConnect("Connected to " + account);
  };

  const [connect, setConnect] = useState(
    <button onClick={connectWallet}>Connect Wallet</button>
  );

  return (
    <div className="container">
      <BrowserRouter>
        <HeaderComponent connect={connect} connectWallet={connectWallet} />
        <Switch>
          <Route exact path="/lend">
            <BodyLendComponent web3={web3} app={app} account={account} />
          </Route>
          <Route exact path="/borrow">
            <BodyBorrowComponent />
          </Route>
          <Route exact path="/affiliate">
            <BodyAffiliateComponent web3={web3} app={app} account={account} />
          </Route>
          <Route>
            <BodyLendComponent />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
