import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";

const component = ({ connect, connectWallet }) => {
  return (
    //<BrowserRouter>
    <div className="header">
      <div className="headerTitle">
        <h1>NFT LENDING PLATFORM</h1>
      </div>
      <div className="headerMenu">
        <p className="headerMenu">
          <Link to="/lend">Lend</Link>
        </p>
        <p className="headerMenu">
          <Link to="/borrow">Borrow</Link>
        </p>
        <p className="headerMenu">
          <Link to="/affiliate">Affiliate</Link>
        </p>
        <div>{connect}</div>
      </div>
    </div>
  );
};

export const HeaderComponent = component;
