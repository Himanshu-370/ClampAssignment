import React from "react";
import "./App.css";
import { Container } from "@mui/material";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { alchemyProvider } from "@wagmi/core/providers/alchemy";
import { publicProvider } from "@wagmi/core/providers/public";

import Navbar from "./Components/Navbar/Navbar";
import TabMenu from "./Components/Main/Tabs/TabMenu";

import "@fontsource/roboto/400.css";
import "@rainbow-me/rainbowkit/styles.css";

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [alchemyProvider({ apiKey: import.meta.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Clamp Assignment",
  projectId: import.meta.env.CONNECT_WALLET_PROJECT_ID,
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const App = () => {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains} modalSize="compact">
            <Navbar />
            <TabMenu />
          </RainbowKitProvider>
        </WagmiConfig>
      </Container>
    </React.Fragment>
  );
};

export default App;
