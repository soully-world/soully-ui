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
    title: "What is an NFT ?",
    context:
      "An NFT stands for “Non-fungible token” and is a fancy way of saying it’s a unique, one of a kind digital item that users can buy, own, and trade. Some NFTs main function are to be digital art and look cool, some offer additional utility like exclusive access to websites or participation in an event, think of it like a rare piece of art that can also act as a “members” card.",
  },
  {
    title: "What is an NFT ?",
    context:
      "An NFT stands for “Non-fungible token” and is a fancy way of saying it’s a unique, one of a kind digital item that users can buy, own, and trade. Some NFTs main function are to be digital art and look cool, some offer additional utility like exclusive access to websites or participation in an event, think of it like a rare piece of art that can also act as a “members” card.",
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
