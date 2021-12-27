import React from "react";
import TitleH2 from "./components/TitleH2";
import ContextTextStyle from "components/ContextText";
import styled from "styled-components";
import { preLink } from "appConfig";
const AboutWrapDiv = styled.div`
  text-align: center;
`;
const AboutInnerDiv = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;
const PicWrap = styled.div`
  height: 560px;
  overflow: hidden;
  width: 100%;
  margin-top: 56px;
  img {
    height: 564px;
  }
`;
const About = () => {
  return (
    <AboutWrapDiv>
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
