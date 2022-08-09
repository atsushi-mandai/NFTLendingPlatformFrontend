import { abi } from "./Contract";

const checkNFTBalance = async (web3, account, nftAddress, nftId) => {
  let nftContract;
  let owner;
  if (account == null) {
    window.alert("Connect your wallet.");
    return false;
  } else if (web3.utils.isAddress(nftAddress) == false) {
    window.alert("Enter the right address of your ERC4907 Token.");
    return false;
  } else {
    try {
      nftContract = await new web3.eth.Contract(abi, nftAddress);
      owner = await nftContract.methods.ownerOf(nftId).call();
    } catch (error) {
      window.alert(
        "This address doesn't seem to be an ERC4907 token contract."
      );
      return false;
    }
    if (owner == account) {
      return nftContract;
    } else {
      window.alert("This token doesn't belong to your wallet.");
      return false;
    }
  }
};

export const CheckNFTBalance = checkNFTBalance;
