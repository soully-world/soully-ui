import React from "react";
import styled from "styled-components";
import { preLink } from "appConfig/index";
const LogoStyled = styled.a`
  img {
    width: 150px;
  }
  ${({ theme }) => theme.mediaQueries.xs} {
    img {
      width: 130px;
    }
  }
`;
const Logo = () => {
  return (
    <LogoStyled className="logo" href={preLink + "/"} title="0xcoinversation">
      <img src={`${preLink}/images/logo.svg`} alt="logo" />
    </LogoStyled>
  );
};
export default Logo;
