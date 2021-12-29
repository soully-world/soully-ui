import styled from "styled-components";
import { Flex, Heading } from "uikit";

export const MintpageWrapDiv = styled.div<{ preLink: string }>`
  padding-top: 100px;
  background: url("${({ preLink }) => preLink}/images/banner/bg.png");
  background-repeat: no-repeat;
  background-size: 2560px 1100px;
  background-position: center top;
  padding-bottom: 300px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  .inner-Rule {
    display: none;
  }
  .wrap-Rule {
    width: 100%;
    margin: 40px auto;
    display: block;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 240px;
    text-align: left;
    .inner-Rule {
      display: block;
    }
    .wrap-Rule {
      display: none;
    }
  }
`;
export const MintpageInnerDiv = styled(Flex)`
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
export const MintpageTitle = styled(Heading)`
  font-weight: 700;
  font-size: 30px;
  line-height: 40px;
  padding-bottom: 16px;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 64px;
    line-height: 80px;
    padding-bottom: 6px;
  }
`;
export const MintpageSubTitle = styled(Heading)`
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  padding-bottom: 36px;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 24px;
    line-height: 30px;
    padding-bottom: 38px;
    padding-bottom: 18px;
  }
`;
export const MintpageContextText = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  text-align: left;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 20px;
    line-height: 25px;
    font-weight: 200;
  }
`;
export const MintpageContextTitle = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  padding-bottom: 10px;
  text-align: left;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 20px;
    line-height: 25px;
  }
`;
export const MintpageBtn = styled.div`
  text-align: center;
  line-height: 29px;
  ${({ theme }) => theme.mediaQueries.md} {
    line-height: 39px;
  }
  i {
    display: inline-block;
    vertical-align: top;
    transition: all 0.3s ease;
    em {
      display: block;
      width: 38px;
      height: 38px;
      background-color: #ff0100;
      font-size: 34px;
      font-weight: 900;
      ${({ theme }) => theme.mediaQueries.md} {
        height: 48px;
        width: 48px;
      }
    }
    &:hover {
      opacity: 0.8;
    }
  }
  button {
    width: 40%;
    margin: 0 20px;
    padding: 0;
    height: 38px;
    ${({ theme }) => theme.mediaQueries.md} {
      height: 48px;
    }
    em {
      display: block;
      width: 100%;
      height: 38px;
      line-height: 29px;
      font-weight: 900;
      font-size: 14px;
      border: 3px solid #ffffff;
      ${({ theme }) => theme.mediaQueries.md} {
        height: 48px;
        font-size: 24px;
        line-height: 39px;
      }
    }
  }
  i,
  button {
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
  }
`;
export const MintpageInnerDivFl = styled.div`
  width: 100%;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 40%;
  }
`;

export const MintpageInnerDivFr = styled.div`
  background-color: #101016;
  border: 1px solid rgba(255, 255, 255, 0.5);
  text-align: center;
  padding: 34px 20px 30px;
  width: 100%;
  margin: 0 auto;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 55%;
    padding: 64px 34px 80px;
    margin: 0;
  }
  h2 {
    font-weight: bold;
    font-size: 18px;
    line-height: 20px;
    ${({ theme }) => theme.mediaQueries.md} {
      font-size: 24px;
      line-height: 30px;
    }
  }
  h4 {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    ${({ theme }) => theme.mediaQueries.md} {
      font-size: 18px;
      line-height: 22px;
    }
  }
  h5 {
    padding-bottom: 20px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;
    ${({ theme }) => theme.mediaQueries.md} {
      font-size: 18px;
      line-height: 22px;
    }
  }
  h6 {
    padding-top: 30px;
    font-size: 14px;
    line-height: 18px;
    ${({ theme }) => theme.mediaQueries.md} {
      font-size: 18px;
      line-height: 22px;
    }
  }
  .line_bg {
    margin: 22px 0 12px;
    width: 100%;
    height: 10px;
    background-color: #820b27;
    position: relative;
    overflow: hidden;
    ${({ theme }) => theme.mediaQueries.md} {
      height: 20px;
    }
    i {
      position: absolute;
      top: 0;
      left: 0;
      width: 40px;
      height: 8px;
      ${({ theme }) => theme.mediaQueries.md} {
        height: 18px;
      }
      background-image: linear-gradient(
        74deg,
        transparent 0rem,
        transparent 0.8rem,
        #f00 0.8rem,
        #f00 1.6rem,
        transparent 1.6rem,
        transparent 2.4rem,
        #f00 2.4rem
      );
      background-color: #830b26;
      background-size: 20px 38px;
      // box-shadow: 1px 1px 5px rgba(0, 140, 213, 0.8);
      animation: process 800ms infinite linear;
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        background-image: linear-gradient(
          to bottom,
          rgb(131 11 38),
          rgb(131 11 38) 15%,
          transparent 60%,
          rgb(131 11 38)
        );
      }
    }
  }
`;
export const CostStyled = styled.div`
  clear: both;
  overflow: hidden;
  padding: 10px 0 14px;
  margin: 14px 0 26px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 20px 0 24px;
    margin: 30px 0 46px;
  }
  h4,
  h3 {
    float: left;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    ${({ theme }) => theme.mediaQueries.md} {
      font-size: 24px;
      line-height: 30px;
    }
    i {
      color: #f40638;
    }
  }
  h3 {
    float: right;
  }
`;
