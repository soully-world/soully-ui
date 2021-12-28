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
  justify-content: space-between;
  align-items: center;
`;
export const MintpageTitle = styled(Heading)`
  font-weight: 700;
  font-size: 64px;
  line-height: 80px;
  padding-bottom: 6px;
`;
export const MintpageSubTitle = styled(Heading)`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  padding-bottom: 38px;
`;
export const MintpageContextText = styled.p`
  font-size: 20px;
  line-height: 25px;
  font-weight: 200;
`;
export const MintpageContextTitle = styled.p`
  font-size: 20px;
  line-height: 25px;
  font-weight: 400;
  padding-bottom: 10px;
`;
export const MintpageBtn = styled.div`
  text-align: center;
  line-height: 39px;
  i {
    display: inline-block;
    vertical-align: top;
    transition: all 0.3s ease;
    em {
      display: block;
      width: 48px;
      height: 48px;
      background-color: #ff0100;
      font-size: 34px;
      font-weight: 900;
    }
    &:hover {
      opacity: 0.8;
    }
  }
  button {
    width: 40%;
    margin: 0 20px;
    padding: 0;
    height: 48px;
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
  width: 40%;
`;

export const MintpageInnerDivFr = styled.div`
  width: 55%;
  background-color: #101016;
  border: 1px solid rgba(255, 255, 255, 0.5);
  text-align: center;
  padding: 64px 34px 80px;
  h2 {
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
  }
  h4 {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
  h5 {
    padding-bottom: 20px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
  }
  h6 {
    padding-top: 30px;
  }
  .line_bg {
    margin: 22px 0 12px;
    width: 100%;
    height: 20px;
    background-color: #820b27;
    position: relative;
    overflow: hidden;
    i {
      position: absolute;
      top: 0;
      left: 0;
      width: 40px;
      height: 18px;
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
  padding: 20px 0 24px;
  margin: 30px 0 46px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  h4,
  h3 {
    float: left;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    i {
      color: #f40638;
    }
  }
  h3 {
    float: right;
  }
`;
