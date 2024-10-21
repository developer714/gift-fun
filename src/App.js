import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rainbowkit from "./Rainbowkit.jsx";
import { Dashboard, Laydium, Gift, Staking } from "./Pages";

function App() {
  return (
    <Rainbowkit>
      <Router>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/live-on-raydium" element={<Laydium />} />
          <Route path="/gift-nft" element={<Gift />} />
          <Route path="/staking" element={<Staking />} />
        </Routes>
      </Router>
    </Rainbowkit>
  );
}

export default App;
