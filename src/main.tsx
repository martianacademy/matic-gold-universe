import {
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  ThemeConfig,
} from "@chakra-ui/react";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  BSCTestnet,
  CoinbaseWalletConnector,
  Config,
  DAppProvider,
  MetamaskConnector,
  Mumbai,
  Polygon,
} from "@usedapp/core";
import App from "./App";
import "./polyfills";
import { WalletConnectConnector } from "@usedapp/wallet-connect-connector";
import { SupportedChainIds } from "./constants/Data";
import {
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Swap } from "./pages/Swap";
import { ProtectedRoutes } from "./navigation";
import { UserDashboard } from "./pages/UserDashboard";
import { Dashboard } from "./pages/UserDashboard/Dashboard";
import { Team } from "./pages/UserDashboard/Team";
import { Staking } from "./pages/UserDashboard/Staking";
import { Analytics } from "./pages/UserDashboard/Analytics";
import { Transactions } from "./pages/UserDashboard/Transactions";
import { getDefaultProvider } from "ethers";

export const config: Config = {
  readOnlyUrls: {
    [BSCTestnet.chainId]: getDefaultProvider(
      "https://data-seed-prebsc-1-s3.binance.org:8545"
    ),
    [Polygon.chainId]: "https://rpc-mainnet.matic.quiknode.pro",
  },
  networks: [Polygon, BSCTestnet, Mumbai],
  connectors: {
    metamask: new MetamaskConnector(),
    coinbase: new CoinbaseWalletConnector(),
    walletConnect: new WalletConnectConnector({
      rpc: {
        97: "https://data-seed-prebsc-1-s3.binance.org:8545",
        [Polygon.chainId]: "https://rpc-mainnet.matic.quiknode.pro",
      },
      qrcodeModalOptions: {
        desktopLinks: [
          "metamask",
          "ledger",
          "tokenary",
          "wallet",
          "wallet 3",
          "secuX",
          "ambire",
          "wallet3",
          "apolloX",
          "zerion",
          "sequence",
          "punkWallet",
          "kryptoGO",
          "nft",
          "riceWallet",
          "vision",
          "keyring",
        ],
        mobileLinks: ["metamask", "trust"],
      },
    }),
  },
  refresh: "everyBlock",
};

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />}></Route>
      <Route
        path="swap"
        element={
          <ProtectedRoutes>
            <Swap />
          </ProtectedRoutes>
        }
      ></Route>
      <Route
        path="swap/:referrerAddress"
        element={
          <ProtectedRoutes>
            <Swap />
          </ProtectedRoutes>
        }
      ></Route>
      <Route
        path="user-dashboard"
        element={
          <ProtectedRoutes>
            <UserDashboard />
          </ProtectedRoutes>
        }
      >
        <Route index element={<Dashboard />}></Route>
        <Route path="staking" element={<Staking />}></Route>
        <Route path="team" element={<Team />}></Route>
        <Route path="team/:userAddress" element={<Team />}></Route>
        <Route path="analytics" element={<Analytics />}></Route>
        <Route path="transactions" element={<Transactions />}></Route>
      </Route>
    </Route>
  )
);

const chakraConfig: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ chakraConfig });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={""}>
      <ChakraProvider theme={theme}>
        <ColorModeScript
          initialColorMode={theme.chakraConfig.initialColorMode}
        />
        <DAppProvider config={config}>
          <RouterProvider router={router}></RouterProvider>
        </DAppProvider>
      </ChakraProvider>
    </Suspense>
  </React.StrictMode>
);
