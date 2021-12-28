import React from "react";
import styled from "styled-components";
import { Text } from "uikit";
import InnerDiv from "./components/InnerDiv";
import TitleH2 from "./components/TitleH2";
import Point from "./components/Point";
const CommunityDrivenRoadmapInnerDiv = styled(InnerDiv)`
  position: relative;
`;

const UlWrapText = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  line-height: 38px;
  margin-bottom: 36px;
  padding-right: 5%;
`;
const LiWrapText = styled.li`
  position: relative;
  width: 30%;
  i {
    position: absolute;
    width: 100%;
    top: 18px;
    left: 0;
    border: 1px dashed rgba(255, 255, 255, 0.5);
  }
  h3 {
    display: inline-block;
    position: relative;
    font-weight: normal;
    font-size: 30px;
    padding: 0 40px;
    z-index: 2;
    color: rgba(255, 255, 255, 0.5);
    background-color: ${({ theme }) => theme.colors.background};
  }
`;
const CommunityDrivenRoadmapH4 = styled.h4`
  position: absolute;
  top: 50%;
  left: -75px;
  transform: rotate(180deg) translateY(-50%);

  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  writing-mode: vertical-rl; //垂直方向，从右向左
  // writing-mode: vertical-lr; //垂直方向，从左向右

  -webkit-writing-mode: vertical-lr;
  -ms-writing-mode: bt-lr;
`;
const UlWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-left: 4px solid #f40638;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: -30px;
    width: 60px;
    height: 50%;
    transform: skew(15deg, 0);
    border: 4px solid #f40638;
    border-bottom: none;
    // border-top: none;
    background: linear-gradient(146.71deg, rgb(67 9 17) 43.23%, rgb(23 3 6) 73.12%);
    z-index: 2;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: -30px;
    width: 60px;
    height: 50%;
    transform: skew(-15deg, 0);
    border: 4px solid #f40638;
    // border-bottom: none;
    border-top: none;
    background: linear-gradient(233deg, rgb(23 3 6) 43.23%, rgb(0 0 0) 73.12%);
    z-index: 2;
  }
`;
const LiWrap = styled.li`
  border-top: 4px solid #f40638;
  border-bottom: 4px solid #f40638;
  height: 380px;
  padding: 40px 0 40px 24px;
  position: relative;
  flex: 3;
  background: linear-gradient(262.52deg, rgba(244, 6, 56, 0.2) -167.84%, rgba(244, 6, 56, 0.04) 100%);
  &:nth-child(2) {
    flex: 4;
  }
  &:last-child {
    &:before,
    &:after {
      content: "";
      border-left: none;
      background-color: transparent;
    }
  }
  &:before {
    content: "";
    position: absolute;
    width: 20px;
    top: 0;
    right: -20px;
    width: 50px;
    height: 50%;
    transform: skew(15deg, 0);
    border-left: 4px solid #f40638;
    background-color: #000;
  }
  &:after {
    content: "";
    position: absolute;
    width: 20px;
    bottom: 0;
    right: -20px;
    width: 50px;
    height: 50%;
    transform: skew(-15deg, 0);
    border-left: 4px solid #f40638;
    background-color: #000;
  }
`;
const ContextText = styled(Text)`
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  width: 100%;

  p {
    display: inline-block;
    vertical-align: top;
    width: 80%;
  }
`;
const CommunityDrivenRoadmap = () => {
  return (
    <CommunityDrivenRoadmapInnerDiv id="Roadmap">
      <TitleH2 mt="120px" position="right">
        Community-Driven Roadmap
      </TitleH2>
      <UlWrapText>
        <LiWrapText>
          <h3>Phase 01</h3>
          <i></i>
        </LiWrapText>
        <LiWrapText>
          <h3>Phase 02</h3>
          <i></i>
        </LiWrapText>
        <LiWrapText>
          <h3>Phase 03</h3>
          <i></i>
        </LiWrapText>
      </UlWrapText>
      {/* YLLUOS SOULLY */}
      <CommunityDrivenRoadmapH4>SOULLY</CommunityDrivenRoadmapH4>
      <UlWrap>
        <LiWrap>
          <ContextText>
            <Point />
            <p>Soully World character creation</p>
          </ContextText>
          <ContextText>
            <Point />
            <p> Test chain deployment of smart contract in mint phase</p>
          </ContextText>
          <ContextText>
            <Point />
            <p> Discord community building and bot deployment</p>
          </ContextText>
          <ContextText>
            <Point />
            <p> Collaboration with other brands to create co-branded NFTs</p>
          </ContextText>
          <ContextText>
            <Point />
            <p>Joint marketing cooperation with other communities and kol</p>
          </ContextText>
          <ContextText>
            <Point />
            <p>Recruitment of team members</p>
          </ContextText>
          <ContextText>
            <Point />
            <p>Discord member invitation contest</p>
          </ContextText>
          <ContextText>
            <Point />
            <p>Launch of early member incentive program</p>
          </ContextText>
        </LiWrap>
        <LiWrap>
          <ContextText>
            <Point />
            <p>Giveaway events will be held when the number of mint reaches different stages</p>
          </ContextText>
          <ContextText>
            <Point />
            <p>Weekly Texas Hold'em tournaments will be held on Discord</p>
          </ContextText>
          <ContextText>
            <Point />
            <p>
              Story creation incentive program, create story lines for your own Soully and post them on designated
              Discord channels to receive rewards
            </p>
          </ContextText>
          <ContextText>
            <Point />
            <p>Fan art contest within the Soully World community</p>
          </ContextText>
          <ContextText>
            <Point />
            <p>Soully rarity system is available on the official website to check your Soully rarity in real time</p>
          </ContextText>
        </LiWrap>
        <LiWrap>
          <ContextText>
            <Point />
            <p>Upload Soully World Mall, get or buy the Soully products you want for free</p>
          </ContextText>
          <ContextText>
            <Point />
            <p>V2 Soully prototype mapping</p>
          </ContextText>
          <ContextText>
            <Point />
            <p>Build Soully World based DAO organization</p>
          </ContextText>
          <ContextText>
            <Point />
            <p>Develop Soully World game based on Unreal Engine 4</p>
          </ContextText>
          <ContextText>
            <Point />
            <p>Release Soully World eco-governance tokens</p>
          </ContextText>
        </LiWrap>
      </UlWrap>
    </CommunityDrivenRoadmapInnerDiv>
  );
};
export default CommunityDrivenRoadmap;
