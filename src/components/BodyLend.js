import React, { useRef } from "react";
import { CheckNFTBalance } from "./scripts/CheckNFTBalance";
import axios from "axios";

const component = ({ web3, app, account }) => {
  const nftAddress = useRef();
  const nftId = useRef();

  const handlerSearch = async () => {
    const nftContract = await CheckNFTBalance(
      web3,
      account,
      nftAddress.current.value,
      nftId.current.value
    );
    if (nftContract != false) {
      const tokenURI = await nftContract.methods
        .tokenURI(nftId.current.value)
        .call();
      console.log(tokenURI);
      try {
        //Having a hard time finding NFT contract with tokenURI on BNB testnet.
        const response = await axios.get(tokenURI);
        const metadata = response.data;
        console.log(metadata);
      } catch (error) {
        console.log("caught error");
      }
    }
  };

  return (
    <div className="body">
      <h2>Lend NFT to earn ETH.</h2>
      <h3>Your NFTs</h3>
      <p>Enter the contract address of your ERC4907 token.</p>
      <p className="inputField">
        <input type="text" ref={nftAddress}></input>
      </p>
      <p className="inputField">
        <input type="text" ref={nftId}></input>
      </p>
      <p>
        <button onClick={handlerSearch}>Search</button>
      </p>
      <h3>Staked NFTs</h3>
    </div>
  );
};

export const BodyLendComponent = component;
