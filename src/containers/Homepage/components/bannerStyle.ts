import styled from "styled-components";
import { Flex, Heading } from "uikit";
import ContextText from "components/ContextText";
export const IframeWrap = styled.div`
  margin-top: -100px;
  height: 320px;
  overflow: hidden;
  ${({ theme }) => theme.mediaQueries.sm} {
    height: 420px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    height: 920px;
  }
`;
export const BannerWrapDiv = styled.div<{ preLink: string }>`
  background: url("${({ preLink }) => preLink}/images/banner/bg.png");
  background-repeat: no-repeat;
  background-size: 3355px 1440px;
  background-position: center top;
  padding-top: 100px;
  padding-bottom: 140px;
  position: relative;
  overflow: hidden;

  ${({ theme }) => theme.mediaQueries.md} {
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    padding-top: 240px;
    background-size: 2560px 1100px;
    padding-bottom: 300px;
  }
  .videoWrap {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    width: 4000px;
    height: 100%;
    video {
      display: block;
      margin: 0 auto;
      height: 100%;
    }
  }
`;
export const BannerInnerDiv = styled.div`
  position: relative;
  z-index: 2;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  ${({ theme }) => theme.mediaQueries.md} {
    max-width: 1200px;
    padding: 0;
  }
`;
export const BannerTitle = styled(Heading)`
  padding-bottom: 43px;
  font-size: 88px;
  line-height: 110px;
  font-weight: 700;
  color: ${({ theme }) => `${theme.colors.primary}`};
  background: linear-gradient(90deg, ${({ theme }) => `${theme.colors.primary}`}, #ff5ea1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${({ theme }) => theme.mediaQueries.xs} {
    font-size: 50px;
    line-height: 70px;
    padding-bottom: 20px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 68px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding-bottom: 36px;
    font-size: 120px;
    line-height: 140px;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    padding-bottom: 36px;
    font-size: 160px;
    line-height: 200px;
  }
`;
export const BannerSubTitle = styled(Heading)`
  padding-bottom: 20px;
  font-weight: 700;
  font-size: 34px;
  line-height: 60px;

  ${({ theme }) => theme.mediaQueries.xs} {
    font-size: 20px;
    line-height: 30px;
    padding-bottom: 10px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-weight: 400;
    padding-bottom: 36px;
    font-size: 44px;
    line-height: 80px;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    font-weight: 400;
    padding-bottom: 36px;
    font-size: 64px;
    line-height: 80px;
  }
`;
export const BannerContextText = styled(ContextText)`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 66px;
  ${({ theme }) => theme.mediaQueries.xxl} {
    width: 100%;
  }
`;
export const BannerBtn = styled(Flex)`
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  button {
    height: 48px;
    width: 100%;
    margin-top: 20px;
  }
  button.primary {
    padding: 0;
    position: relative;
    cursor: pointer;
    em {
      position: relative;
      z-index: 2;
    }
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 8px;
      left: 8px;
      background-color: #f40638;
      opacity: 0.5;
    }
    em {
      display: block;
      width: 100%;
      height: 48px;
      line-height: 39px;
      font-weight: 900;
      font-size: 24px;
      border: 3px solid #ffffff;
    }
  }
  ${({ theme }) => theme.mediaQueries.md} {
    width: 60%;
    button {
      width: 45%;
      margin-top: 0;
    }
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    width: 40%;
    button {
      width: 45%;
      margin-top: 0;
    }
  }
`;
