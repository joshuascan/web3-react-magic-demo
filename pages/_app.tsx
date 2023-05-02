import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Web3ReactHooks, Web3ReactProvider } from "@web3-react/core";
import { MagicConnect } from "web3-react-magic";
import {
  hooks as magicConnectHooks,
  magicConnect,
} from "../connectors/magicConnect";

const connectors: [MagicConnect, Web3ReactHooks][] = [
  [magicConnect, magicConnectHooks],
];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider connectors={connectors}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}
