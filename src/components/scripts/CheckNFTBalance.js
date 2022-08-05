import { abi } from "./Contract";

const checkNFTBalance = async (web3, account, address) => {
  if (account > 0) {
    const checkAddress = await web3.utils.isAddress(address);
    if (checkAddress == false) {
      window.alert("Enter the right address of your ERC4907 token.");
      return false;
    } else {
      try {
        //const address = nftAddress.current.value;
        const nftContract = await new web3.eth.Contract(abi, address);
        const balance = await nftContract.methods.balanceOf(account).call();
        if (balance > 0) {
          return true;
        } else {
          window.alert("Couldn't find your ERC4907 token with this contract.");
          return false;
        }
      } catch (error) {
        window.alert(
          "This address doesn't seem to be an ERC4907 token contract."
        );
        return false;
      }
    }
  } else {
    window.alert("Connect your wallet.");
    return false;
  }
};

export const CheckNFTBalance = checkNFTBalance;
