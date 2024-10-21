// StakingInput.js
import React from "react";
import "./index.css";

const StakingInput = () => {
  return (
    <div className="staking-input">
      <label>Stake $THOL</label>
      <input type="number" placeholder="0" />
      <div>
        <span>Allowance: Single Transaction</span>
      </div>
    </div>
  );
};

export default StakingInput;
