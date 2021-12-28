import React from "react";
import styled from "styled-components";
import { Flex, Heading } from "uikit";

const WagmiSoullyBannerStyle = styled(Flex)`
  justify-content: space-between;
  height: 64px;
  padding: 14px 0;
  overflow: hidden;
`;
const TextHeading = styled(Heading)`
  width: 120px;
  text-align: center;
  line-height: 36px;
  font-size: 24px;
  font-wight: 900px;
`;
const SOULLYHeading = styled(TextHeading)`
  background-color: ${({ theme }) => `${theme.colors.text}`};
  color: ${({ theme }) => `${theme.colors.background}`};
`;
const WAGMIHeading = styled(TextHeading)`
  margin: 0 8px;
`;
const WagmiSoullyBanner = () => {
  return (
    <WagmiSoullyBannerStyle>
      {new Array(10).fill("").map((v, index) => (
        <Flex flexDirection="row" justifyContent="space-between" key={index}>
          <SOULLYHeading scale="md">SOULLY</SOULLYHeading>
          <WAGMIHeading scale="md">#WAGMI</WAGMIHeading>
        </Flex>
      ))}
    </WagmiSoullyBannerStyle>
  );
};

export default WagmiSoullyBanner;
