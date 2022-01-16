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
    title: "What’s an NFT?",
    context:
      "An NFT stands for “Non-fungible token” and is a fancy way of saying it’s a unique, one-of-a-kind digital item that users can buy, own, and trade. Some NFTs' main functions are to be digital art and look cool, some offer additional utility. Think of ours like a rare piece of art that can also act as a “members” card which gets you access to members-only perks.",
  },
  {
    title: "What is the total supply?",
    context: "A total of 10,000 unique Soully NFTs will be created.",
  },

  {
    title: "What Blockchain is the project hosted on?",
    context: "Soully NFT is on the Ethereum Blockchain.",
  },

  {
    title: "When will Soully NFT launch?",
    context: "The pre-sale will launch on January, 24th at 2 PM UTC, and our public sale on January, 26th at 2 PM UTC",
  },

  {
    title: "What inspired you to make the Soully NFT collection?",
    context:
      'The design of Soully World is inspired in large part by the "spirit", the most direct remembrance of human history, and the hero is the highest pantheon of the human spirit. We have been attracted to superheroes and legends since childhood. Heroism is not shameful, it is the source of meaningful existence and spiritual strength for every person.',
  },

  {
    title: "How to obtain A Soully?",
    context:
      "Initially, Soully NFT’s will be minted (created and bought) through the website on the launch date. After mint, you will be able to buy a Soully NFT on secondary marketplaces such as OpenSea.",
  },

  {
    title: "Can I trade my Soully NFT?",
    context: "Yes. You can buy/sell your NFT on secondary marketplaces such as OpenSea.",
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
        {FQAArr.map(
          (
            v: {
              title: String;
              context: String;
            },
            index: number,
          ) => {
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
                {showBol !== -1 ? <ContextText>{v.context}</ContextText> : null}
              </LiWrap>
            );
          },
        )}
      </UlWrap>
    </FAQInnerDiv>
  );
};
export default FAQ;
