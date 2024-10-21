// StakingNFT.js
import React from "react";
import "./index.css";

const StakingNFT = () => {
  return (
    <div className="staking-nft">
      <label>Stake NFT's</label>
      <select>
        <option>1 Month</option>
        <option>3 Months</option>
        <option>6 Months</option>
        <option>1 Year</option>
      </select>
    </div>
  );
};

export default StakingNFT;
