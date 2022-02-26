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
    href: "http://discord.gg/QTPmtnAkGx",
    image: `${preLink}/images/discord.svg`,
    alt: "discord",
  },
  {
    href: "https://twitter.com/SoullyWorld",
    image: `${preLink}/images/twitter.svg`,
    alt: "twitter",
  },
  {
    href: "/",
    image: `${preLink}/images/opensea.svg`,
    alt: "opensea",
  },
  {
    href: "https://medium.com/@SoullyWorld",
    image: `${preLink}/images/medium.svg`,
    alt: "medium",
  },
  {
    href: "https://soully-world.gitbook.io/whitepaper/",
    image: `${preLink}/images/gitbook.svg`,
    alt: "gitbook",
  },
];
export const CONTRACT_ADDRESS = {
  [ChainId.ETH_MAINNET]: "",
  [ChainId.ETH_ROPSTEN_TESTNET]: "0xf5c8d1991c9872fcd2e1e925700ec7a91dcb8ccd",
};
