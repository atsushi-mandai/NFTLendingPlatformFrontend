import React, { useRef } from "react";
import { abi } from "./scripts/Contract";
import { CheckNFTBalance } from "./scripts/CheckNFTBalance";

const component = ({ web3, app, account }) => {
  const nftAddress = useRef();

  const handlerSearch = async () => {
    const bool = await CheckNFTBalance(web3, account, nftAddress.current.value);
    if (bool == true) {
      window.alert("Seems like you have an NFT!");
    }
  };

  return (
    <div className="body">
      <h2>Lend NFT to earn ETH.</h2>
      <h3>Your NFTs</h3>
      <p>Enter the contract address of your ERC4907 token.</p>
      <input type="text" ref={nftAddress}></input>
      <button onClick={handlerSearch}>Search</button>
      <h3>Staked NFTs</h3>
    </div>
  );
};

export const BodyLendComponent = component;
