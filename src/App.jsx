import React from "react";
import "./App.css";
import { Container } from "@mui/material";
import Navbar from "./Components/Navbar/Navbar";
import TabMenu from "./Components/Main/Tabs/TabMenu";
import "@fontsource/roboto/400.css";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";

const chains = [arbitrum, mainnet, polygon];
const projectId = process.env.CONNECT_WALLET_PROJECT_ID;

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);

const App = () => {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <WagmiConfig client={wagmiClient}>
          <Navbar />
          <TabMenu />
        </WagmiConfig>

        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </Container>
    </React.Fragment>
  );
};

export default App;
