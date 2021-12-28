import React from "react";
import styled from "styled-components";
import InnerDiv from "containers/Homepage/components/components/InnerDiv";
import Logo from "../Header/components/logo";
import ShareLink from "components/SharaLink";
import WagmiSoullyBanner from "components/WagmiSoullyBanner";
const FooterWarp = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.3);
`;
const FooterInnerDiv = styled(InnerDiv)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 36px 0;
`;

const FooterWidget = () => {
  return (
    <FooterWarp>
      <WagmiSoullyBanner />
      <FooterInnerDiv>
        <Logo />
        <ShareLink />
        <h6>© 2022 Soully World</h6>
      </FooterInnerDiv>
    </FooterWarp>
  );
};
export default FooterWidget;
