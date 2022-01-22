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
  margin: 26px auto 0;
  img {
    width: auto;
    height: 264px;
    display: inline-block;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    height: 400px;
    margin: 30px auto 0;
    img {
      height: 404px;
    }
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    height: 560px;
    margin: 56px auto 0;
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
          Soully is a 3D NFT artwork hand-painted by 0xLambert, waiting for any dreamer with a whimsical mind to give it
          a soul, with a total of 10,000 pieces. Each Soully is an original design that not only has its own colors, but
          will also appear in the SoullyWorld meta-universe in the future, giving each Soully owner the opportunity to
          personally give them attributes and individual stories.
        </ContextTextStyle>
      </AboutInnerDiv>
      <PicWrap>
        <picture>
          <source type="image/jpg" srcSet={`${preLink}/images/about/about_bg.png`} />
          <img src={`${preLink}/images/about/about_bg.png`} />
        </picture>
      </PicWrap>
    </AboutWrapDiv>
  );
};
export default About;
