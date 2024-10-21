import React, {useEffect} from "react";
import "./index.css";

export default function Body() {

  useEffect(() => {
    // Scroll to the specific section if there's a hash in the URL
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // Remove the '#' and find the element
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  return (
    <div className="Body bg-[rgb(0,191,255)] px-[20vw] pt-[100px] flex flex-col">
      <h1 className="text-[24px]" id="aboutUs">About us</h1>
      <ul className="list-disc list-inside">
        <li className="text-[18px] mt-[32px]">
          Community-Centric: Gift is a community-based token designed to give
          back to crypto enthusiasts.
        </li>
        <li className="text-[18px] mt-[32px]">
          Airdrops: Utilize Gift NFTs for crypto-related airdrops, enhancing
          engagement and reward distribution.
        </li>
        <li className="text-[18px] mt-[32px]">
          Publicity for Projects: Gift will serve as a platform to promote and
          showcase other projects, fostering visibility and collaboration.
        </li>
        <li className="text-[18px] mt-[32px]">
          Collaboration for Wealth: Facilitate cooperation among projects to
          achieve collective success and growth.
        </li>
        <li className="text-[18px] mt-[32px] list-inside">
          Voting and Staking Integration:
          <ul className="list-disc list-inside ml-10">
            <li>
              A new website will feature a voting platform and staking
              functionality.
            </li>
            <li>
              Staked Gift tokens will represent voting power in community
              decisions.
            </li>
          </ul>
        </li>
        <li className="text-[18px] mt-[32px]">
          Quarterly Rewards:
          <ul className="list-disc list-inside ml-10">
            <li>
              Every three months, the Gift community will vote on a reward,
              which will be distributed to NFT owners.
            </li>
          </ul>
        </li>
        <li className="text-[18px] mt-[32px]">
          Building Networks: Create a network that supports both big and small
          projects, helping them gain recognition and achieve their goals.
        </li>
      </ul>
      <div className="w-full flex lg:flex-row flex-col justify-between mt-[100px]">
        <div className="lg:w-[48%] w-[90%] flex flex-col mb-[100px] justify-center items-center">
          <div>
            <img src="../../assets/img/tokenomics.jpg" />
          </div>
          <div>
            <h1 className="text-[24px] mt-[32px]">Tokenomics</h1>
            <h1 className="text-[18px] mt-[32px]">
              Total supply : 1,000,000,000,000 $GIFT
            </h1>
            <>
              <h1 className="text-[18px] mt-[64px]">Liquidity pool: 25%</h1>
              <ul className="list-disc list-inside text-[18px]">
                <li className="ml-10">Amount: 250,000,000,000 Tokens</li>
                <li className="ml-10">
                  Purpose: Raise initial funds and attract early investors.
                </li>
              </ul>
            </>

            <>
              <h1 className="text-[18px] mt-[32px]">Dex/Cex: 20%</h1>
              <ul className="list-disc list-inside text-[18px]">
                <li className="ml-10">Amount: 200,000,000,000 Tokens</li>
                <li className="ml-10">
                  Purpose: Provide liquidity on exchanges to facilitate trading
                  and market stability.
                </li>
              </ul>
            </>

            <>
              <h1 className="text-[18px] mt-[32px]">Staking Rewards: 15%</h1>
              <ul className="list-disc list-inside text-[18px]">
                <li className="ml-10">Amount: 150,000,000,000 Tokens</li>
                <li className="ml-10">
                  Purpose: Reward users who stake their tokens, incentivizing
                  long-term holding.
                </li>
              </ul>
            </>

            <>
              <h1 className="text-[18px] mt-[32px]">Ecosystem: 10%</h1>
              <ul className="list-disc list-inside text-[18px]">
                <li className="ml-10">Amount: 100,000,000,000 Tokens</li>
                <li className="ml-10">
                  Purpose: Support ongoing development, partnerships, and
                  ecosystem growth.
                </li>
              </ul>
            </>

            <>
              <h1 className="text-[18px] mt-[32px]">Airdrop: 10%</h1>
              <ul className="list-disc list-inside text-[18px]">
                <li className="ml-10">Amount: 100,000,000,000 Tokens</li>
                <li className="ml-10">
                  Purpose: Build community engagement and reward early
                  supporters.
                </li>
              </ul>
            </>

            <>
              <h1 className="text-[18px] mt-[32px]">Marketing: 10%</h1>
              <ul className="list-disc list-inside text-[18px]">
                <li className="ml-10">Amount: 100,000,000,000 Tokens</li>
                <li className="ml-10">
                  Purpose: Fund marketing and promotional activities to build
                  visibility and attract users.
                </li>
              </ul>
            </>

            <>
              <h1 className="text-[18px] mt-[32px]">Token address:</h1>
              <h1 className="text-[18px] font-bold overflow-hidden whitespace-pre-line break-all">
                8A1pZQGEFJbhesVKuhPKY347jWf3sogGHBwTrnvgu4tM
              </h1>
            </>
          </div>
        </div>
        <div className="lg:w-[48%] w-[90%] flex flex-col">
          <div>
            <img src="../../assets/img/roadmap.jpg" />
          </div>
          <div>
            <h1 className="text-[24px] mt-[32px]">ROADMAP</h1>
            <>
              <h1 className="text-[24px] mt-[24px] font-bold">
                Phase 1: Initial Setup and Community Building
              </h1>
              <ul className="list-disc list-inside text-[18px]">
                <li className="ml-10">
                  <strong>Token Creation</strong>: Develop and finalize the Gift
                  token.
                </li>
                <li className="ml-10">
                  <strong>Airdrop Campaign</strong>: Distribute tokens to the
                  community to build initial community engagement.
                </li>
              </ul>
            </>
            <>
              <h1 className="text-[24px] mt-[24px] font-bold">
              Phase 2: Launch Preparations
              </h1>
              <ul className="list-disc list-inside text-[18px]">
                <li className="ml-10">
                  <strong>Token Listing</strong>: List Gift token on major exchanges for trading and liquidity.
                </li>
                <li className="ml-10">
                  <strong>Rewards Distribution</strong>: Distribute rewards to presale buyers as a token of appreciation.
                </li>
              </ul>
            </>
            <>
              <h1 className="text-[24px] mt-[24px] font-bold">
              Phase 4: Platform Expansion and Community Engagement
              </h1>
              <ul className="list-disc list-inside text-[18px]">
                <li className="ml-10">
                  <strong>Website Launch</strong>: Roll out the official Gift website with full functionality.
                </li>
                <li className="ml-10">
                  <strong>Staking Feature</strong>: Implement staking options for Gift tokens, integrating voting power.
                </li>
                <li className="ml-10">
                  <strong>NFT Rewards</strong>: Introduce NFT-based rewards to incentivize community participation.
                </li>
                <li className="ml-10">
                  <strong>Fidelity Points System</strong>: Launch a points system for NFT holders to earn and redeem benefits.
                </li>
                <li className="ml-10">
                  <strong>Meme Community Integration</strong>: Strategically engage with and grow within the meme community to enhance visibility and influence.
                </li>
              </ul>
            </>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-[150px] h-[300px] flex-col">
        <h1 className="text-[24px]">COTACT</h1>
        <a href="info@gift2u.fun" className="text-[18px] mt-[24px]">info@gift2u.fun</a>
      </div>
    </div>
  );
}
