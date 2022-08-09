import React from "react";
import { Link } from "react-router-dom";

const component = ({ connect, connectWallet }) => {
  return (
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
