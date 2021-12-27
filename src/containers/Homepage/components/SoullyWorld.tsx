import React from "react";
import styled from "styled-components";
import { Flex, Heading } from "uikit";
import ContextText from "components/ContextText";
import InnerDiv from "./components/InnerDiv";
import TitleH2 from "./components/TitleH2";
import Point from "./components/Point";
import { preLink } from "appConfig";
const SoullyWorldWrapDiv = styled(InnerDiv)``;
const UlWrap = styled.ul``;
const TitleH3 = styled(Heading)`
  color: ${({ theme }) => `${theme.colors.primary}`};
  font-size: 40px;
  line-height: 50px;
  padding-bottom: 20px;
`;
const SoullyWorldContextText = styled(ContextText)`
  font-size: 22px;
  line-height: 30px;
  font-weight: 400;
`;
const LiWrap = styled.li<{ mb?: string }>`
  border-left: 4px solid ${({ theme }) => `${theme.colors.primaryDark}`};
  padding-left: 44px;
  margin-bottom: ${({ mb }) => mb || "80px"};
`;

const LongImgWrap = styled.div`
  overflow: hidden;
  margin-top: 30px;
  width: 1224px;
`;
const SmallImgWrap = styled(Flex)`
  height: 226px;
  overflow: hidden;
  margin-top: 30px;
`;
const SmallImgPicture = styled.picture`
  height: 226px;
  width: 226px;
  overflow: hidden;
  margin-right: 24px;
`;
const SoullyWorld = () => {
  return (
    <SoullyWorldWrapDiv>
      <TitleH2 position="center">Soully World</TitleH2>
      <UlWrap>
        <LiWrap>
          <TitleH3 color="primary">Kriyan-Soully</TitleH3>
          <SoullyWorldContextText>
            Kriyan-Soully is an NFT collection jointly launched by 0xlambert and SpiritSwap, which is completely
            handmade by 0xlambert and aims to inject more trendy elements and fresh creativity into SpiritSwap's brand
            image.
          </SoullyWorldContextText>
          <SoullyWorldContextText mt="28px">
            They will be sold as an auction on Fantom, and those who acquire any one of the Kriyan-Soully will receive a
            wealth of benefits granted by Soully World.
          </SoullyWorldContextText>
          <SoullyWorldContextText>
            <Point></Point>Holders of the co-branded Kriyan-Soully will have direct access to the V1 whitelist.
          </SoullyWorldContextText>
          <SoullyWorldContextText>
            <Point></Point>Kriyan-Soully recipients can mint up to 25 V1 Soullys at once.
          </SoullyWorldContextText>
          <SoullyWorldContextText>
            <Point></Point>Kriyan-Soully recipients can get 1 V1 airdrop for free.
          </SoullyWorldContextText>
          <LongImgWrap>
            <picture>
              <source type="image/svg" srcSet={`${preLink}/images/soullyworld/Kriyan-Soully.svg`} />
              <source type="image/jpg" srcSet={`${preLink}/images/soullyworld/Kriyan-Soully.jpg`} />
              <img className="long" src={`${preLink}/images/soullyworld/Kriyan-Soully.jpg`} />
            </picture>
          </LongImgWrap>
        </LiWrap>

        <LiWrap>
          <TitleH3 color="primary">Soully World V1</TitleH3>
          <SoullyWorldContextText>
            Soully is a 3D NFT artwork hand-painted by 0xLambert, waiting for any dreamer with a whimsical mind to give
            it a soul, with a total of 10,000 pieces. Each Soully is an original design that not only has its own
            colors, but will also appear in the SoullyWorld meta-universe in the future, giving each Soully owner the
            opportunity to personally give them attributes and individual stories.
          </SoullyWorldContextText>
          <SmallImgWrap>
            {[1, 2, 3, 4, 5].map((v) => (
              <SmallImgPicture key={v}>
                <source type="image/jpg" srcSet={`${preLink}/images/soullyworld/solly ${v}.jpg`} />
                <source type="image/svg" srcSet={`${preLink}/images/soullyworld/solly ${v}.svg`} />
                <img src={`${preLink}/images/soullyworld/solly ${v}.svg`} />
              </SmallImgPicture>
            ))}
          </SmallImgWrap>
        </LiWrap>

        <LiWrap>
          <TitleH3 color="primary">Soully World V2</TitleH3>
          <SoullyWorldContextText>
            Preparing Soully for the next stage of evolution, the V2 stage will meet everyone with cooler physical
            features and clearer resolution.
          </SoullyWorldContextText>
          <SoullyWorldContextText mt="28px">
            V2 will continue the story background and racial classification of V1, and introduce combat mechs for all
            combat troops. The total number of V2 will be decided by the community, and the way to get V2 mainly comes
            from holding V1 and participating in the open whitelist pre-sale.
          </SoullyWorldContextText>
        </LiWrap>

        <LiWrap mb="0">
          <TitleH3 color="primary">Soully World Game</TitleH3>
          <SoullyWorldContextText>
            After gaining some user base and start-up capital, SoullyWorld will develop a war chess game. (Find out
            what's different about the Soully in v1? They have unique professions, and any ten Soullys are completely
            free to combine as a battle group.)
          </SoullyWorldContextText>
          <LongImgWrap>
            <picture>
              <source type="image/jpg" srcSet={`${preLink}/images/soullyworld/Soully World Game.jpg`} />
              <source type="image/svg" srcSet={`${preLink}/images/soullyworld/Soully World Game.svg`} />
              <img src={`${preLink}/images/soullyworld/Soully World Game.svg`} />
            </picture>
          </LongImgWrap>
          <SoullyWorldContextText mt="28px">
            Well, if and when GameFi is successfully completed, we'll have to find our next target. Although we have
            imagined many kinds of future, there are too many possibilities in the NFT and blockchain world for our team
            alone to decide the future course, so at the end of the V2 release, there will be a DAO organization with
            mainly community members to emerge and decide the next phase together.
          </SoullyWorldContextText>
        </LiWrap>
      </UlWrap>
    </SoullyWorldWrapDiv>
  );
};
export default SoullyWorld;
