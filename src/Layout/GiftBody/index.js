import React from "react";
import "./index.css";

export default function GiftBody() {
  return (
    <div className="GiftBody">
      <div className="px-[20vw] py-[100px] flex justify-center">
        <img src="../../assets/img/Gift_nft.jpg" alt="GIFT NFT" />
      </div>
      <div className="px-[30vw] py-[100px] text-[24px] flex flex-col bg-[rgb(0,191,255)]">
        <span className="max-w-[762px] mb-[100px] tracking-[2px]">
          These NFT will unlock every three months, revealing a new surprise
          each time.
        </span>
        <span className="description max-w-[762px]]">
          Inside could be anything: Gift tokens, meme coins, other NFTs, or
          something entirely different. Each opening brings a unique gift!
        </span>
      </div>
      <div className="w-full px-[20vw] py-[100px] flex items-center flex-col bg-[rgb(246,246,246)]">
        <div>
          <h1 className="text-[24px] mb-[100px]">NFT</h1>
        </div>
        <div className="w-full flex">
          <div className="w-1/3 flex flex-col items-center">
            <h2>Nick</h2>
            <img src="../../assets/img/Nick.webp" alt="Nick" className="w-[90%]"/>
          </div>
          <div className="w-1/3 flex flex-col items-center">
            <h2>Bob</h2>
            <img src="../../assets/img/Bob.webp" alt="Bob" className="w-[90%]"/>
          </div>
          <div className="w-1/3 flex flex-col items-center">
            <h2>Gifty</h2>
            <img src="../../assets/img/Gifty.webp" alt="Gifty" className="w-[90%]"/>
          </div>
        </div>
      </div>
    </div>
  );
}
