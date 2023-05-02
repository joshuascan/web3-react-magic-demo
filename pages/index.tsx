import { useWeb3React } from "@web3-react/core";
import { Connector } from "@web3-react/types";
import { magicConnect } from "@/connectors/magicConnect";
import { MagicConnect } from "web3-react-magic";
import { useState, useEffect } from "react";
// useState and useEffect imports missing from guide

export default function Home() {
  const { connector, isActive } = useWeb3React();
  const [showButton, setShowButton] = useState(false);

  const handleConnect = async (connector: Connector) => {
    try {
      await connector.activate();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDisconnect = async () => {
    try {
      if (connector?.deactivate) {
        void connector.deactivate();
      } else {
        void connector.resetState();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenWallet = async () => {
    if (connector instanceof MagicConnect) {
      await connector.magic?.wallet.showUI();
    }
  };

  const checkWalletType = async () => {
    if (connector instanceof MagicConnect) {
      const walletInfo = await connector.magic?.wallet.getInfo();
      const isMagicWallet = walletInfo?.walletType === "magic";
      setShowButton(isMagicWallet);
    }
  };

  useEffect(() => {
    checkWalletType();
  }, [handleConnect]);

  return (
    <>
      {isActive ? (
        <>
          <button onClick={handleDisconnect}>Disconnect</button>
          {showButton ? (
            <button onClick={handleOpenWallet}>Wallet</button>
          ) : null}
        </>
      ) : (
        <button onClick={() => handleConnect(magicConnect)}>Connect</button>
      )}
    </>
  );
}
