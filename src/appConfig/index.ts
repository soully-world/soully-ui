import { ChainId } from "config/constants/tokens";
export const preLink = "";
export enum CONTRACT_STATE {
  paused,
  preSale,
  live,
  finish,
}
export const MAX_Soully = 10000;

export const LinkArr = [
  {
    href: "https://discord.gg/YUTe8uCYft",
    image: `${preLink}/images/discord.svg`,
    alt: "discord",
  },
  {
    href: "https://twitter.com/KacOFinance",
    image: `${preLink}/images/twitter.svg`,
    alt: "twitter",
  },
  {
    href: "https://t.me/coinversationofficial",
    image: `${preLink}/images/opensea.svg`,
    alt: "opensea",
  },
  {
    href: "https://github.com/Coinversation",
    image: `${preLink}/images/medium.svg`,
    alt: "medium",
  },
];
export const CONTRACT_ADDRESS = {
  [ChainId.ETH_MAINNET]: "",
  [ChainId.ETH_ROPSTEN_TESTNET]: "0x40822E097CE773D42dB371BdC0Ae802331BC9912",
};
