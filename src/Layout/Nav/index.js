import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav({ style }) {
  const [isOpen, setIsOpen] = useState(false);

  // Functions to handle mouse enter and leave events
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div
      className="Nav bg-[rgba(0,191,255,0.25)] flex justify-center fixed mt-0 w-full z-10"
      style={style}
    >
      <div className="pt-4 pb-4 flex flex-row justify-between items-center container">
        <Link to="/">
          <img src="//img1.wsimg.com/isteam/ip/89191bfb-d627-4799-9fd2-3dda9471074f/Gift_Logo-removebg-preview-vmake.png/:/rs=h:42,cg:true,m/qt=q:95" />
        </Link>

        <div className="menu text-[18px] hidden md:block">
          <Link
            to="/"
            className="p-[6px] ml-[32px] hover:opacity-50 transition"
          >
            HOME
          </Link>
          <Link
            to="/live-on-raydium"
            className="p-[6px] ml-[32px] hover:opacity-50 transition"
          >
            LIVE ON RAYDIUM
          </Link>
          <Link
            to="/gift-nft"
            className="p-[6px] ml-[32px] hover:opacity-50 transition"
          >
            GIFT NFT
          </Link>
          <Link
            to="/staking"
            className="p-[6px] ml-[32px] hover:opacity-50 transition"
          >
            STACKING
          </Link>
          <Link
            target={"true"}
            to="/#aboutUs"
            className="p-[6px] ml-[32px] hover:opacity-50 transition"
          >
            ABOUT US
          </Link>
          <button className="p-[6px] ml-[32px] hover:opacity-50 transition">
            CONNECT WALLET
          </button>
        </div>
        <div className="relative inline-block text-left block md:hidden">
          {/* Dropdown Button */}
          <button
            id="dropdownHoverButton"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="text-white px-5 py-2.5 text-center inline-flex items-center hover:text-gray-700"
            type="button"
          >
            <svg
              className="w-6 h-6" // Adjust the size as needed
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div
              id="dropdownHover"
              className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              onMouseEnter={handleMouseEnter} // Keep dropdown open while hovering
              onMouseLeave={handleMouseLeave} // Close dropdown when not hovering
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200 absolute w-[170px] right-[90px] bg-gray-500 rounded-lg"
                aria-labelledby="dropdownHoverButton"
              >
                <li className="mt-[20px]">
                  <Link
                    to="/home"
                    className="p-[6px] ml-[26px] hover:opacity-50 transition"
                  >
                    HOME
                  </Link>
                </li>
                <li className="mt-[20px]">
                  <Link
                    to="/live-on-raydium"
                    className="p-[6px] ml-[26px] hover:opacity-50 transition"
                  >
                    LIVE ON RAYDIUM
                  </Link>
                </li>
                <li className="mt-[20px]">
                  <Link
                    to="/staking"
                    className="p-[6px] ml-[26px] hover:opacity-50 transition"
                  >
                    STACKING
                  </Link>
                </li>
                <li className="mt-[20px]">
                  <Link
                    target={"true"}
                    to="/home#aboutUs"
                    className="p-[6px] ml-[26px] hover:opacity-50 transition"
                  >
                    ABOUT US
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
