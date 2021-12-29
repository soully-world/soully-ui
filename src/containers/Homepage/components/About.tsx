import React from "react";
import TitleH2 from "./components/TitleH2";
import ContextTextStyle from "components/ContextText";
import styled from "styled-components";
import { preLink } from "appConfig";
const AboutWrapDiv = styled.div`
  text-align: center;
`;
const AboutInnerDiv = styled.div`
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  ${({ theme }) => theme.mediaQueries.xxl} {
    max-width: 1320px;
    padding: 0;
  }
`;
const PicWrap = styled.div`
  height: 260px;
  overflow: hidden;
  width: 100%;
  margin-top: 26px;
  img {
    width: auto;
    height: 264px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    height: 400px;
    margin-top: 30px;
    img {
      height: 404px;
    }
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    height: 560px;
    margin-top: 56px;
    img {
      height: 564px;
    }
  }
`;
const About = () => {
  return (
    <AboutWrapDiv id="About">
      <AboutInnerDiv>
        <TitleH2 position="center">About</TitleH2>
        <ContextTextStyle>
          Soully World is a lovingly crafted NFT project by established artists 0xLambert. We have hand-drawn hundreds
          of traits to create a vast array of unique and appealing characters. We might possibly have more combinations
          than stars in the sky at this point! Yum Yum have been designing characters for high profile brands like XBox,
          Nickelodeon and Lyft since 2010. We are building a high-quality project that rewards our NFT holders.
          Animation, interactive content and other goodies to come! Let's go fam!
        </ContextTextStyle>
      </AboutInnerDiv>
      <PicWrap>
        <picture>
          <source type="image/jpg" srcSet={`${preLink}/images/about/about_bg.jpg`} />
          <source type="image/svg" srcSet={`${preLink}/images/about/about_bg.svg`} />
          <img src={`${preLink}/images/about/about_bg.svg`} />
        </picture>
      </PicWrap>
    </AboutWrapDiv>
  );
};
export default About;
