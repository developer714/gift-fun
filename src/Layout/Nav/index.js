import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useAccountModal, useConnectModal } from "@rainbow-me/rainbowkit";
import { FiChevronDown } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

export default function Nav({ style }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();

  const { address: walletAddress, isConnected } = useAccount();
  const { connect } = useConnect({
    onError: (error) =>
      setErrorMessage("Failed to connect wallet: " + error.message),
  });
  const { disconnect } = useDisconnect();

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const handleConnectWallet = () => {
    openConnectModal();
    if (!isConnected) {
      connect();
    } else {
      setShowModal(true);
    }
  };

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
          <button
            onClick={handleConnectWallet}
            className="p-[6px] ml-[32px] hover:opacity-50 transition"
          >
            {isConnected
              ? `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}`
              : "CONNECT WALLET"}
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
              className="w-6 h-6"
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
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200 absolute w-[170px] right-[90px] bg-gray-500 rounded-lg"
                aria-labelledby="dropdownHoverButton"
              >
                <li className="mt-[20px]">
                  <Link
                    to="/"
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
                  <button
                    onClick={handleConnectWallet}
                    className="p-[6px] ml-[32px] hover:opacity-50 transition"
                  >
                    {isConnected && walletAddress
                      ? openAccountModal && (
                          <button
                            // walletAddress
                            className="connect-wallet-btn"
                            onClick={openAccountModal}
                          >
                            <span>{walletAddress}</span>
                            <span className="short-address">
                              {walletAddress.slice(0, 4)}...$
                              {walletAddress.slice(-4)}
                            </span>
                            <FiChevronDown />
                          </button>
                        )
                      : "CONNECT WALLET"}
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {openAccountModal && variant === "v7" && (
        <button className="custom-btn" onClick={openAccountModal}>
          <img src={IconImg1} alt="icon" className="icon" />
          <span className="name">Wallet</span>
          <span className="icon-text">
            <FaPlus />
          </span>
          <span className="url">
            {walletAddress.slice(0, 4)}...$
            {walletAddress.slice(-4)} <FiChevronDown />
          </span>
        </button>
      )}
      {errorMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
            <h2 className="text-xl font-semibold text-red-600">Error</h2>
            <p className="mt-2 text-gray-700">{errorMessage}</p>
            <button
              onClick={() => setErrorMessage(null)}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
