import { useWallet } from "@solana/wallet-adapter-react";
import React, { useEffect } from "react";

const AppBar: React.FC = () => {
  const { publicKey } = useWallet();

  useEffect(() => {
    if (publicKey) {
      console.log("Wallet connected with public key:", publicKey.toBase58());
    }
  }, [publicKey]);

  return (
    <nav className="w-full h-16 bg-gray-900 px-6 flex items-center justify-between shadow-md">
      <span className="text-white text-2xl font-bold tracking-wide">
        Launchpad
      </span>
      <div className="flex items-center space-x-3"></div>
    </nav>
  );
};

export default AppBar;
