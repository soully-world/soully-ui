import React from "react";
import styled from "styled-components";
import TitleH2 from "./components/TitleH2";

import InnerDiv from "./components/InnerDiv";
import { Text } from "uikit";
import { preLink } from "appConfig";
const UlWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-flow: wrap;
  padding-bottom: 60px;
  padding-left: 20px;
  padding-right: 20px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding-right: 0;
  }
`;
const LiWrap = styled.li`
  width: 48%;
  padding: 2px 2px 0;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 45%;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    width: 30%;
  }
  &:nth-child(1) {
    background: linear-gradient(180deg, #a2471a 0%, rgba(36, 17, 7, 0) 100%);
  }
  &:nth-child(2) {
    background: linear-gradient(180deg, #2d638b 0%, rgba(35, 46, 55, 0) 100%);
  }
  &:nth-child(3) {
    background: linear-gradient(180deg, #345fae 0%, rgba(63, 114, 196, 0) 100%);
  }
  &:nth-child(4) {
    background: linear-gradient(180deg, #a77a23 0%, rgba(78, 52, 17, 0) 100%);
  }
  &:nth-child(5) {
    background: linear-gradient(180deg, #bb7594 0%, rgba(89, 39, 66, 0) 100%);
  }
  &:nth-child(6) {
    background: linear-gradient(180deg, #8d3a80 0%, rgba(33, 14, 28, 0) 100%);
  }
  img {
    width: 100%;
  }
  .inner {
    padding: 20px;
    margin-bottom: 20px;
    background-color: ${({ theme }) => `${theme.colors.background}`};
    ${({ theme }) => theme.mediaQueries.md} {
      padding: 40px;
      margin-bottom: 0;
    }
  }
`;
const TitleH3 = styled.h3`
  font-weight: 700;
  font-size: 23px;
  line-height: 35px;
  padding: 12px 0 0;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 36px;
    line-height: 45px;
    padding: 32px 0 13px;
  }
`;
const LiContextText = styled.p`
  font-size: 14px;
  line-height: 18px;
  width: 70%;
  margin: 0 auto;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 18px;
    line-height: 22px;
  }
`;

const ContextText = styled(Text)`
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  width: 90%;
  margin: 0 auto;
  opacity: 0.5;
  margin-bottom: 56px;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 24px;
    line-height: 30px;
  }
`;
const MeetOurTeamInnerDiv = styled(InnerDiv)`
  text-align: center;
`;

const MeetOurTeamArr = [
  {
    image: "1",
    title: "0xLambert",
    context: "Freelance artist, Designer, Motocycle fan",
  },
  {
    image: "2",
    title: "0xAllen",
    context: "Painter, Graphic designer, Gambler",
  },
  {
    image: "3",
    title: "Ana Chen",
    context: "Community manager, Game fan, Independent woman",
  },
  {
    image: "4",
    title: "Leissner",
    context: "Blockchain geek, NFT collector",
  },
  {
    image: "5",
    title: "Siren",
    context: "Front-end developer, Mother of two",
  },
  {
    image: "6",
    title: "Typer",
    context: "NFT addict, Game company mastermind",
  },
];
const MeetOurTeam = () => {
  return (
    <MeetOurTeamInnerDiv id="Team">
      <TitleH2 position="center">Meet Our Team</TitleH2>
      <ContextText>
        Soully World is an NFT project jointly established by digital artist 0xLambert and his team. The founding team
        consists of six people.
      </ContextText>
      <UlWrap>
        {MeetOurTeamArr.map((v: { image: string; title: string; context: string }, index: number) => {
          return (
            <LiWrap key={index}>
              <div className="inner">
                <picture>
                  <img src={`${preLink}/images/meetourteam/${v.image}.jpg`} />
                </picture>
                <TitleH3>{v.title}</TitleH3>
                <LiContextText>{v.context}</LiContextText>
              </div>
            </LiWrap>
          );
        })}
      </UlWrap>
    </MeetOurTeamInnerDiv>
  );
};
export default MeetOurTeam;
