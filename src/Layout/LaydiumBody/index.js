import React from "react";
import "./index.css";

import { Button } from "../../Components";

export default function LaydiumBody() {
  return (
    <div className="LaydiumBody px-[15vw] py-[100px] flex flex-col">
      <div className="mb-[100px] w-full flex justify-center">
        <span className="text-[24px] tracking-[2px]">
          be part of this amazing new project
        </span>
      </div>
      <div className="w-full flex lg:flex-row flex-col items-center justify-center">
        <div className="lg:w-1/3 w-full flex justify-center">
          <img src="../../assets/img/Gift.jpg" alt="GIFT IMAGE" />
        </div>
        <div className="lg:w-2/3 pl-[40px] w-full flex justify-center items-center flex-col mt-[50px]">
          <div className="w-full flex justify-start">
            <Button
              backgroundColor={"white"}
              className={"mb-[100px] radium-button"}
            >
              <a
                href="https://raydium.io/swap/?inputMint=sol&outputMint=HYcEy4qpXss1Jme2sixZRTJKJ4s1iv5GLktVJKdubZnP"
                target="_blank"
                rel="noopener noreferrer"
              >
                BUY ON RAYDIUM
              </a>
            </Button>
          </div>
          <div className="flex w-full lg:justify-start justify-center">
            <div className="flex flex-col text-[24px] token-info">
              <h1>Token address:</h1>
              <span className="whitespace-pre-line break-all">
                8A1pZQGEFJbhesVKuhPKY347jWf3sogGHBwTrnvgu4tM
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
