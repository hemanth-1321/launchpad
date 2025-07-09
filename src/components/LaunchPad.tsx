import React, { useState } from "react";

const LaunchPad: React.FC = () => {
  const [tokenName, setTokenName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [initialSupply, setInitialSupply] = useState("");
  const [decimals, setDecimals] = useState("");

  const handleLaunch = () => {
    console.log("Launching Token with details:");
    console.log("🪙 Token Name:", tokenName);
    console.log("💠 Symbol:", symbol);
    console.log("📦 Initial Supply:", initialSupply);
    console.log("🔢 Decimals:", decimals);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white px-6 py-12 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-center text-green-400 mb-10">
        🚀 Token LaunchPad
      </h1>

      <div className="w-full max-w-md space-y-6 bg-[#121212] p-8 rounded-2xl shadow-xl">
        <div>
          <label className="block text-sm mb-1">Token Name</label>
          <input
            type="text"
            placeholder="Solana Rocket"
            value={tokenName}
            onChange={(e) => setTokenName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#1E1E1E] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Symbol</label>
          <input
            type="text"
            placeholder="ROCK"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#1E1E1E] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Initial Supply</label>
          <input
            type="number"
            placeholder="1000000"
            value={initialSupply}
            onChange={(e) => setInitialSupply(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#1E1E1E] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Decimals</label>
          <input
            type="number"
            placeholder="9"
            value={decimals}
            onChange={(e) => setDecimals(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#1E1E1E] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <button
          onClick={handleLaunch}
          className="cursor-pointer w-full mt-6 bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-4 rounded-lg transition-all duration-200"
        >
          Launch Token 🚀
        </button>
      </div>
    </div>
  );
};

export default LaunchPad;
