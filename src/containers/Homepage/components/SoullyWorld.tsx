import React from "react";
import styled from "styled-components";
import { Flex, Heading } from "uikit";
import ContextText from "components/ContextText";
import InnerDiv from "./components/InnerDiv";
import TitleH2 from "./components/TitleH2";
import Point from "./components/Point";
import { preLink } from "appConfig";
import { Link } from "react-router-dom";
import LinkSvg from "./svg/Link";
const SoullyWorldWrapDiv = styled(InnerDiv)`
  padding: 0 20px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0;
  }
`;
const UlWrap = styled.ul``;
const LinkSvgStyle = styled(LinkSvg)`
  width: 16px;
  margin-left: 4px;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 30px;
    margin-left: 8px;
  }
`;
const TitleH3 = styled(Heading)`
  color: ${({ theme }) => `${theme.colors.primary}`};
  font-size: 20px;
  line-height: 30px;
  padding-bottom: 10px;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 40px;
    line-height: 50px;
    padding-bottom: 20px;
  }
`;
const SoullyWorldContextText = styled(ContextText)`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 22px;
    line-height: 30px;
  }
`;
const LiWrap = styled.li<{ mb?: string }>`
  border-left: 4px solid ${({ theme }) => `${theme.colors.primaryDark}`};
  padding-left: 20px;
  margin-bottom: ${({ mb }) => mb || "40px"};
  ${({ theme }) => theme.mediaQueries.xxl} {
    margin-bottom: ${({ mb }) => mb || "80px"};
    border-left: 4px solid ${({ theme }) => `${theme.colors.primaryDark}`};
    padding-left: 44px;
  }
`;

const LongImgWrap = styled.div`
  overflow: hidden;
  margin-top: 30px;
  width: 98%;
  img {
    display: block;
    width: 101%;
  }
`;
const SmallImgWrap = styled(Flex)`
  margin-top: 30px;
`;

const SmallImgPicture = styled.div`
  width: 226px;
  margin-right: 24px;
  position: relative;
  border: 1px solid #000;
  picture {
    position: relative;
    z-index: 2;
  }
  &:hover{
    border-color: 1px solid rgba(244,6, 56,0.5);
    &:before,
      &:after  {
      content: "";
      opacity: 1;
    }
  }
  &:before {
    content: "";
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    animation: moveMiddle 1s infinite;
    background-color:rgba(56,19,28,.5);
}
  }
  &:after {
    content: "";
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    // border: 4px solid #2a0909;
    animation: moveBiggest 1s infinite;
    box-shadow: 0 0 4px #2a0909;
  }
`;
const SoullyWorld = () => {
  return (
    <SoullyWorldWrapDiv>
      <TitleH2 position="center">Soully World</TitleH2>
      <UlWrap>
        <LiWrap>
          <TitleH3 color="primary">Soully World V1</TitleH3>
          <SoullyWorldContextText
            // className="animate animate__slow animate__animated"
            data-animate="animate__fadeInRight"
          >
            Soully is a 3D NFT artwork hand-painted by 0xLambert, waiting for any dreamer with a whimsical mind to give
            it a soul, with a total of 10,000 pieces. Each Soully is an original design that not only has its own
            colors, but will also appear in the SoullyWorld meta-universe in the future, giving each Soully owner the
            opportunity to personally give them attributes and individual stories.
          </SoullyWorldContextText>
          <SmallImgWrap>
            {[1, 2, 3, 4, 5].map((v) => (
              <SmallImgPicture key={v}>
                <picture>
                  <img src={`${preLink}/images/soullyworld/solly ${v}.jpg`} />
                </picture>
              </SmallImgPicture>
            ))}
          </SmallImgWrap>
        </LiWrap>

        <LiWrap>
          <TitleH3 color="primary">Soully World V2</TitleH3>
          <SoullyWorldContextText
            // className="animate animate__slow animate__animated"
            data-animate="animate__fadeInRight"
          >
            Preparing Soully for the next stage of evolution, the V2 stage will meet everyone with cooler physical
            features and clearer resolution.
          </SoullyWorldContextText>
          <SoullyWorldContextText
            // className="animate animate__slow animate__animated"
            data-animate="animate__fadeInRight"
            mt={40}
          >
            V2 will continue the story background and racial classification of V1, and introduce combat mechs for all
            combat troops. The total number of V2 will be decided by the community, and the way to get V2 mainly comes
            from holding V1 and participating in the open whitelist pre-sale.
          </SoullyWorldContextText>
        </LiWrap>
        <LiWrap>
          <TitleH3 color="primary">Soully World Game</TitleH3>
          <SoullyWorldContextText
            // className="animate animate__slow animate__animated"
            data-animate="animate__fadeInRight"
          >
            After gaining some user base and start-up capital, SoullyWorld will develop a war chess game. (Find out
            what's different about the Soully in v1? They have unique professions, and any ten Soullys are completely
            free to combine as a battle group.)
          </SoullyWorldContextText>
          <LongImgWrap>
            <picture>
              <img src={`${preLink}/images/soullyworld/Soully World Game.jpg`} />
            </picture>
          </LongImgWrap>
          <SoullyWorldContextText mt={40}>
            Well, if and when GameFi is successfully completed, we'll have to find our next target. Although we have
            imagined many kinds of future, there are too many possibilities in the NFT and blockchain world for our team
            alone to decide the future course, so at the end of the V2 release, there will be a DAO organization with
            mainly community members to emerge and decide the next phase together.
          </SoullyWorldContextText>
        </LiWrap>
        <LiWrap mb="0">
          <Link to={preLink + "/Kriyan-Soully"}>
            <TitleH3 color="primary">
              Spirit Swap & Soully World co-branded
              <LinkSvgStyle />
            </TitleH3>
          </Link>
          <SoullyWorldContextText
            // className="animate animate__slow animate__animated"
            data-animate="animate__fadeInRight"
          >
            Kriyan-Soully is an NFT collection jointly launched by 0xlambert and SpiritSwap, which is completely
            handmade by 0xlambert and aims to inject more trendy elements and fresh creativity into SpiritSwap's brand
            image.
          </SoullyWorldContextText>
          <SoullyWorldContextText mt={40}>
            They will be sold as an auction on Fantom, and those who acquire any one of the Kriyan-Soully will receive a
            wealth of benefits granted by Soully World.(The auction has not started yet, please pay attention to
            Twitter/Discord for more information)
          </SoullyWorldContextText>
          <SoullyWorldContextText
            // className="animate animate__slow animate__animated"
            data-animate="animate__fadeInRight"
          >
            <Point></Point>Holders of the co-branded Kriyan-Soully will have direct access to the V1 whitelist.
          </SoullyWorldContextText>
          <SoullyWorldContextText
            // className="animate animate__slow animate__animated"
            data-animate="animate__fadeInRight"
          >
            <Point></Point>Kriyan-Soully recipients can mint up to 25 V1 Soullys at once.
          </SoullyWorldContextText>
          <SoullyWorldContextText
            // className="animate animate__slow animate__animated"
            data-animate="animate__fadeInRight"
          >
            <Point></Point>Kriyan-Soully recipients can get 1 V1 airdrop for free.
          </SoullyWorldContextText>
          <LongImgWrap>
            <picture>
              <img className="long" src={`${preLink}/images/soullyworld/Kriyan-Soully.jpg`} />
            </picture>
          </LongImgWrap>
        </LiWrap>
      </UlWrap>
    </SoullyWorldWrapDiv>
  );
};
export default SoullyWorld;
