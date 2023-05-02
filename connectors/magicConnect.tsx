import { initializeConnector } from "@web3-react/core";
import { MagicConnect } from "web3-react-magic";

export const [magicConnect, hooks] = initializeConnector<MagicConnect>(
  (actions) =>
    new MagicConnect({
      actions,
      options: {
        apiKey: "pk_live_645E2FEEEF10DA19",
        networkOptions: {
          rpcUrl: "https://rpc2.sepolia.dev/",
          chainId: 11155111,
        },
      },
    })
);
