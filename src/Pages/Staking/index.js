import React from "react";
import StakingSection from "../../Layout/StakingSection/StakingSection";
import { Nav, Footer } from "../../Layout";
import "./index.css";

export default function Staking() {
  return (
    <div className="Staking">
      <Nav
        style={{ backgroundColor: "rgb(0,191,255)", position: "relative" }}
      />
      <StakingSection />
      <Footer style={{ backgroundColor: "rgb(0,191,255)" }} />
    </div>
  );
}
