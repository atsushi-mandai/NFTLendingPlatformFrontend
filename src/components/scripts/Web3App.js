import Web3 from "web3";

const startApp = async () => {
  try {
    await window.ethereum.enable();
  } catch (e) {
    window.alert("Please connect your wallet.");
  }
  let chainId = await window.ethereum.request({ method: "eth_chainId" });
  if (chainId == 97) {
    const web3 = await new Web3(window.ethereum);
    return web3;
  } else {
    window.alert("NFT LENDING PLATFORM is for BNB Testnet.");
  }
};

export const StartApp = startApp;
