import React from "react";

const component = ({ web3, app, account }) => {
  const handlerClaimAffiliateReward = async () => {
    if (account > 0) {
      const balance = await app.methods.getAffiliateBalance(account).call();
      if (balance == 0) {
        window.alert("There is no reward to claim.");
      } else {
        app.methods.withdrawAffiliateReward().send({ from: account });
      }
    } else {
      window.alert("Connect your wallet.");
    }
  };

  return (
    <div className="body">
      <h2>Affiliate</h2>
      <p>Claim your affiliate reward from here.</p>
      <button onClick={handlerClaimAffiliateReward}>
        Claim affiliate reward
      </button>
    </div>
  );
};

export const BodyAffiliateComponent = component;
