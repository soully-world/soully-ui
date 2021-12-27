export enum ChainId {
  BINANCE_MAINNET = 56,
  BINANCE_TESTNET = 97,
  ETH_MAINNET = 1,
  ETH_ROPSTEN_TESTNET = 3,
  FANTOM_MAINNET = 250,
  FANTOM_TESTNET = 4002,
  SOLANA_MAINNET = 4,
}

export const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10);
