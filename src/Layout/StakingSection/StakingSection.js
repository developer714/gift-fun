import React from "react";
import StakingInput from "./StakingInput";
import StakingNFT from "./StakingNFT";
import StakeButton from "./StakeButton";
import "./index.css";

const StakingSection = () => {
  return (
    <div className="staking-section">
      <h2>Staking NFT</h2>
      <p>Helps to secure the protocol in exchange for protocol incentives.</p>
      <StakingInput />
      <StakingNFT />
      <StakeButton />
    </div>
  );
};

export default StakingSection;
