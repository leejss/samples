"use client";
import type { ReactNode } from "react";
import { createConfig, configureChains, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import { INFURA_ID, WC_PROJECT_ID } from "../constants";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

// configure chains
// default chains,  providers, options
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai],
  [
    infuraProvider({
      apiKey: INFURA_ID!,
    }),
    publicProvider(),
  ],
);

// create config
const config = createConfig({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({
      chains,
      options: {
        projectId: WC_PROJECT_ID!,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

const WagmiProvider = ({ children }: { children: ReactNode }) => {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
};

export default WagmiProvider;
