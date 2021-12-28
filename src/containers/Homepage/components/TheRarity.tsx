import React, { useState } from "react";
import styled from "styled-components";
import { Flex } from "uikit";
import InnerDiv from "./components/InnerDiv";
import TitleH2 from "./components/TitleH2";
import ContextText from "components/ContextText";
import { preLink } from "appConfig";
const TheRarityWrapDiv = styled(InnerDiv)`
  margin-top: 40px;
  border-left: 4px solid ${({ theme }) => `${theme.colors.primaryDark}`};
  padding-left: 20px;
  ${({ theme }) => theme.mediaQueries.xxl} {
    padding-left: 44px;
    margin-top: 170px;
  }
`;
const TheRarityWrapFlex = styled(Flex)`
  justify-content: space-between;
  align-items: end;
  flex-wrap: wrap;
`;
const TheRarityTitle = styled.h3`
  padding-top: 20px;
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: ${({ theme }) => `${theme.colors.text}`};
  ${({ theme }) => theme.mediaQueries.xxl} {
    padding-top: 50px;
    padding-bottom: 20px;
    font-size: 28px;
    line-height: 35px;
  }
`;
const Fl = styled.div`
  width: 100%;
  ${({ theme }) => theme.mediaQueries.xxl} {
    width: 600px;
  }
`;
const Fr = styled.div`
  width: 300px;
  height: 230px;
  margin-left: 20px;
  margin-top: 20px;
  position: relative;
  ${({ theme }) => theme.mediaQueries.xxl} {
    width: 560px;
    height: 560px;
  }
`;
const ImgSize = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  ${({ theme }) => theme.mediaQueries.xxl} {
    width: 500px;
    height: 500px;
  }
`;
const Bg01 = styled(ImgSize)`
  top: 10px;
  left: 10px;
  z-index: 2;
  background-color: #490917;
  ${({ theme }) => theme.mediaQueries.xxl} {
    top: 30px;
    left: 30px;
  }
`;
const Bg02 = styled(ImgSize)`
  top: 20px;
  left: 20px;
  z-index: 1;
  opacity: 0.3;
  border: 1px solid #ffffff;
  ${({ theme }) => theme.mediaQueries.xxl} {
    top: 60px;
    left: 60px;
  }
`;
const FrPicture = styled(ImgSize)`
  z-index: 3;
  img {
    display: block;
    width: 100%;
  }
`;
const ListFlex = styled(Flex)`
  justify-content: space-between;
  align-items: end;
  img {
    width: 80px;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    img {
      width: 150px;
    }
  }
`;
const TheRarityArr = [
  {
    title: "The Pacifist",
    context:
      "EVOL, a 2000 year old Cherub, has been cast down to earth after a disagreement with the management. At first too proud to try and get back home, now, unable to remember what he has to do to get there.",
    img: "ThePacifist",
  },
  {
    title: "Free will Alliance",
    context:
      "EVOL, a 2000 year old Cherub, has been cast down to earth after a disagreement with the management. At first too proud to try and get back home, now, unable to remember what he has to do to get there.",
    img: "FreewillAlliance",
  },
  {
    title: "Phantom Federation",
    context:
      "EVOL, a 2000 year old Cherub, has been cast down to earth after a disagreement with the management. At first too proud to try and get back home, now, unable to remember what he has to do to get there.",
    img: "PhantomFederation",
  },
  {
    title: "Arora",
    context:
      "EVOL, a 2000 year old Cherub, has been cast down to earth after a disagreement with the management. At first too proud to try and get back home, now, unable to remember what he has to do to get there.",
    img: "Arora",
  },
];
const TheRarity = () => {
  const [showPic, setShowPic] = useState(1);
  const item = TheRarityArr[showPic];
  return (
    <TheRarityWrapDiv id="Rarity">
      <TheRarityWrapFlex>
        <Fl>
          <TitleH2 mt="0">The Rarity</TitleH2>
          <ListFlex>
            {[1, 2, 3, 4].map((v) => (
              <picture
                key={v}
                onClick={() => {
                  setShowPic(v);
                }}
              >
                <source type="image/jpg" srcSet={`${preLink}/images/therarity/${v}.jpg`} />
                <source type="image/svg" srcSet={`${preLink}/images/therarity/${v}.svg`} />
                <img src={`${preLink}/images/therarity/${v}.svg`} />
              </picture>
            ))}
          </ListFlex>
          <TheRarityTitle>{item.title}</TheRarityTitle>
          <ContextText>{item.context} </ContextText>
        </Fl>
        <Fr>
          <FrPicture>
            <picture>
              <source type="image/png" srcSet={`${preLink}/images/therarity/${item.img}.png`} />
              <source type="image/svg" srcSet={`${preLink}/images/therarity/${item.img}.svg`} />
              <img src={`${preLink}/images/therarity/${item.img}.svg`} />
            </picture>
          </FrPicture>
          <Bg01></Bg01>
          <Bg02></Bg02>
        </Fr>
      </TheRarityWrapFlex>
    </TheRarityWrapDiv>
  );
};
export default TheRarity;
