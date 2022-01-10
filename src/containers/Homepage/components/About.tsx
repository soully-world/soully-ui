import React from "react";
import TitleH2 from "./components/TitleH2";
import ContextTextStyle from "./components/ContextText";
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
        Soully is a 3D NFT artwork hand-painted by 0xLambert, waiting for any dreamer with a whimsical mind to give it a soul, with a total of 10,000 pieces. Each Soully is an original design that not only has its own colors, but will also appear in the SoullyWorld meta-universe in the future, giving each Soully owner the opportunity to personally give them attributes and individual stories.
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
