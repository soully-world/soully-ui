import styled from "styled-components";
import { Flex, Heading } from "uikit";
import ContextText from "components/ContextText";
export const MintpageWrapDiv = styled.div<{ preLink: string }>`
  padding-top: 240px;
  background: url("${({ preLink }) => preLink}/images/banner/bg.png");
  background-repeat: no-repeat;
  background-size: 2560px 1100px;
  background-position: center top;
  padding-bottom: 300px;
`;
export const MintpageInnerDiv = styled(Flex)`
  max-width: 1200px;
  margin: 0 auto;
`;
export const MintpageTitle = styled(Heading)`
  padding-bottom: 36px;
  font-weight: 600;
  font-size: 160px;
  line-height: 200px;
  color: ${({ theme }) => `${theme.colors.primary}`};
  background: linear-gradient(90deg, ${({ theme }) => `${theme.colors.primary}`}, #ff5ea1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const MintpageSubTitle = styled(Heading)`
  padding-bottom: 36px;
  font-weight: 400;
  font-size: 64px;
  line-height: 80px;
`;
export const MintpageContextText = styled(ContextText)`
  // width: 90%;
  margin: 0 auto;
  padding-bottom: 66px;
`;
export const MintpageBtn = styled(Flex)`
  justify-content: space-between;
  width: 40%;
  margin: 0 auto;
  button {
    height: 48px;
    width: 45%;
  }
`;
