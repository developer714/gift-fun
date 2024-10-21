import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Dashboard, Laydium, Gift, Staking } from "./Pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/live-on-raydium" element={<Laydium />} />
        <Route path="/gift-nft" element={<Gift />} />
        <Route path="/staking" element={<Staking />} />
      </Routes>
    </Router>
  );
}

export default App;
