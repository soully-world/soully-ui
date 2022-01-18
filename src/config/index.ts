import { ChainId } from "config/constants/tokens";

export const SCAN_URLS = {
  [ChainId.BINANCE_MAINNET]: "https://bscscan.com",
  [ChainId.BINANCE_TESTNET]: "https://testnet.bscscan.com",
  [ChainId.ETH_MAINNET]: "https://etherscan.io/",
  [ChainId.ETH_ROPSTEN_TESTNET]: "https://ropsten.etherscan.io/",
};

export const BASE_NETWORK_CONFIG = {
  // BNB 主网\_Smart Chain
  "56": {
    chainId: `0x${ChainId.BINANCE_MAINNET.toString(16)}`,
    chainName: "binance-smart-chain",
    nativeCurrency: {
      name: "BNB",
      symbol: "bnb",
      decimals: 18,
    },
    rpcUrls: [
      "https://bsc-dataseed.binance.org",
      "https://bsc-dataseed1.ninicoin.io",
      "https://bsc-dataseed1.defibit.io",
      "https://bsc-dataseed2.defibit.io",
      "https://bsc-dataseed3.defibit.io",
      "https://bsc-dataseed4.defibit.io",
    ],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  // BNB 测试网\_Smart Chain - Testnet
  "97": {
    chainId: `0x${ChainId.BINANCE_TESTNET.toString(16)}`,
    chainName: "binance-smart-chain Testnet",
    nativeCurrency: {
      name: "BNB",
      symbol: "bnb",
      decimals: 18,
    },
    rpcUrls: [
      "https://data-seed-prebsc-1-s1.binance.org:8545",
      "https://data-seed-prebsc-2-s1.binance.org:8545",
      "https://data-seed-prebsc-1-s2.binance.org:8545/",
      "https://data-seed-prebsc-2-s2.binance.org:8545/",
      "https://data-seed-prebsc-1-s3.binance.org:8545/",
      "https://data-seed-prebsc-2-s3.binance.org:8545/",
    ],
    blockExplorerUrls: ["https://testnet.bscscan.com"],
  },

  "1": {
    chainId: `0x${ChainId.ETH_MAINNET.toString(16)}`,
    chainName: "Ethereum Mainnet",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
    blockExplorerUrls: ["https://etherscan.io/"],
  },
  // Ropsten Test Network
  "3": {
    chainId: `0x${ChainId.ETH_ROPSTEN_TESTNET.toString(16)}`,
    chainName: "Ethereum Testnet Ropsten",
    rpcUrls: ["https://ropsten.infura.io/v3/834fa434e4e84e63a0ef276c3e9ab674"],
    nativeCurrency: {
      name: "Ropsten Ether",
      symbol: "ROP",
      decimals: 18,
    },
    blockExplorerUrls: ["https://ropsten.etherscan.io/"],
  },

  // FTM
  "250": {
    chainId: `0x${ChainId.FANTOM_MAINNET.toString(16)}`,
    chainName: "Fantom Opera",
    nativeCurrency: {
      name: "ftm",
      symbol: "FTM",
      decimals: 18,
    },
    rpcUrls: ["https://rpcapi.fantom.network"],
    blockExplorerUrls: ["https://ftmscan.com"],
  },
  "4002": {
    chainId: `0x${ChainId.FANTOM_TESTNET.toString(16)}`,
    chainName: "Fantom testnet",
    nativeCurrency: {
      name: "ftm",
      symbol: "FTM",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.testnet.fantom.network/"],
    blockExplorerUrls: ["https://testnet.ftmscan.com"],
  },
};

export const BASE_URL = "https://www.kaco.finance";

export const CONTRACT_ADDRESS = {
  [ChainId.ETH_MAINNET]: "",
  [ChainId.ETH_ROPSTEN_TESTNET]: "0x6738204142cb9174046c98472f199675c31aa90d",
};
export const GAS_FEE = 3000;
