import React from "react";
import "./index.css";

import imageUrl from "./Gift.jpg";

import { Button } from "../../Components";

export default function Header() {
  return (
    <div
      className="Header h-[1000px] lg:h-[800px]"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="flex justify-center pt-[450px] flex-col w-full">
        <div className="px-[20vw]">
          <p className="text-[64px] max-w-[1000px] tracking-[4px]">
            GIFT...BECAUSE YOU DESERVE IT.
          </p>
        </div>
        <div className="btn-group px-[20vw] flex flex-col lg:flex-row justify-center items-center">
          <Button className={"ml-10"}>
            <a
              href="https://presale.magiceden.io/pay/66e6f3c115739fad3b74be7a"
              target="_blank"
              rel="noopener noreferrer"
            >
              NFT PRESALE
            </a>
          </Button>
          <Button className={"ml-10"}>
            <a
              href="https://t.me/Gift_official_community"
              target="_blank"
              rel="noopener noreferrer"
            >
              JOIN THE COMMUNITY
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
