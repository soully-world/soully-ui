import React from "react";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { chainId } from "config/constants/tokens";
const NoChainStyle = styled.div`
  background: linear-gradient(90.75deg, #ff0000 0%, #ff5ea1 100%);
  font-weight: bold;
  font-size: 18px;
  line-height: 30px;
  padding: 4px 0;
  text-align: center;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 22px;
    padding: 12px 0;
  }
`;
// declare global {
//   interface Window {
//     ethereum: any;
//   }
// }
const NoChain = () => {
  //  @ts-ignore
  const _chainId = window?.ethereum?.chainId;

  return `${_chainId}` === `0x${chainId.toString(16)}` ? null : (
    <NoChainStyle>
      <p>YOU'RE CURRENTLY CONNECTED TO A DIFFERENT NETWORK. ( Please change your MetaMask network to mainnet. )</p>
    </NoChainStyle>
  );
};
export default NoChain;
