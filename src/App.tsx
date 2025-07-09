import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import LaunchPad from "./components/LaunchPad";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";
import { createMint } from "@solana/spl-token";

function App() {
  return (
    <>
      <ConnectionProvider endpoint={clusterApiUrl("devnet")}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className="flex justify-between m-5">
              <WalletMultiButton />
              <WalletDisconnectButton />
            </div>
            <div className="flex flex-col justify-center items-center p-4 m-4">
              <LaunchPad />
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
}

export default App;
