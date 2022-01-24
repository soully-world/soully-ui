import React, { useState } from "react";
import styled from "styled-components";
import TitleH2 from "./components/TitleH2";
import InnerDiv from "./components/InnerDiv";
import { Text } from "uikit";
const FAQInnerDiv = styled(InnerDiv)`
  padding: 0 20px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0;
  }
`;
const UlWrap = styled.ul``;
const LiWrap = styled.li`
  padding-bottom: 12px;
`;
const TitleWrap = styled.div`
  background-color: #20212d;
  line-height: 32px;
  padding: 16px;
  h3 {
    display: inline-block;
    vertical-align: top;
    width: 80%;
    font-weight: 700;
    font-size: 20px;
  }
`;
const Icon = styled.i`
  color: ${({ theme }) => theme.colors.text};
  line-height: 28px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.primary};
  display: inline-block;
  vertical-align: middle;
  width: 32px;
  height: 32px;
  margin-right: 14px;
  font-style: normal;
`;
const ContextText = styled(Text)`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  padding: 24px;
  background-color: #101016;
`;
const FQAArr = [
  {
    title: "Is there a presale and how do you get it? If it's over, how did you go about it?",
    context: [
      "- We have white list pre-sale",
      "- Access: reach a certain level in the dc and meet the conditions of the number of invitations",
      "- We have invitation contest and level requirements, need to meet the conditions before mint",
      "- After the presale, we will continue to expand our influence and have launched v2 version of nft",
    ],
  },
  {
    title: "Why is SOULLY different from the 100 projects that launch everyday?",
    context: [
      "Although this may sound a bit arrogant, our projects are of a very high artistic level, each nft is a handmade 3D model that took a year to make alone, and a co-branded nft has been released with the top DEX spirit swap on the Fantom chain. we are not a knock-off plate of any one project and have been insisting on building an independent NFT based domain IP.",
    ],
  },

  {
    title: "What are the benefits of holding soully?",
    context: [
      "After the sale, we will establish a soully-based treasury, similar to a DAO organization, with funds to expand the reach, such as: co-branding with top ip brands in other traditional industries; holders enjoy a share of the copyright revenue.",
    ],
  },

  {
    title: "Are the team members completely anonymous?",
    context: [
      "All of our team members are anonymous except for the head of marketing. The reason for this anonymity is that we are all currently employed by companies in the traditional industry, and we have chosen to remain anonymous because of some contractual issues that exist in reality. However, there are still some of our partners who know who we really are.",
    ],
  },

  {
    title: "Where do the team members come from and what have they done?",
    context: [
      "Our developers come from the blockchain space and have worked and are working on building technical frameworks for exchanges and blockchains, among other things. Our artists have supported brand design for Mercedes-Benz, Fendi and P&G.",
    ],
  },

  {
    title: "A year later, why would anyone buy his first nft when choosing soully?",
    context: ["Because he learned about Soully not because of NFT, also because Soully wanted to learn about NFT."],
  },

  {
    title: "What happens if a sale fails? What is the number of sales needed to start the plan in the roadmap?",
    context: [
      "If we are unable to sell the current version of nft, we will go ahead and launch v2 and give a close equity relationship between the two. However, a failed sale will definitely affect this process and take more time.",
      "We have to sell at least 30% before we can start achieving the goals in the roadmap.",
    ],
  },
];

const FAQ = () => {
  const [show, setShow] = useState([]);
  return (
    <FAQInnerDiv id="FAQ">
      <TitleH2 mt={70} position="center">
        FAQ
      </TitleH2>
      <UlWrap>
        {FQAArr.map((v, index: number) => {
          const showBol = show.indexOf(index);
          return (
            <LiWrap key={index}>
              <TitleWrap
                onClick={() => {
                  if (showBol !== -1) {
                    setShow((preState) => {
                      const st = preState.slice();
                      st.splice(showBol, 1);
                      return st;
                    });
                  } else {
                    setShow([...show, index]);
                  }
                }}
              >
                <Icon>{showBol !== -1 ? "-" : "+"}</Icon>
                <h3>{v.title}</h3>
              </TitleWrap>
              {showBol !== -1 ? (
                <ContextText>
                  {v.context.map((vv, vvindex) => (
                    <p key={vvindex}> {vv}</p>
                  ))}
                </ContextText>
              ) : null}
            </LiWrap>
          );
        })}
      </UlWrap>
    </FAQInnerDiv>
  );
};
export default FAQ;
