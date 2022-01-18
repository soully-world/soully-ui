import React, { useState } from "react";
import styled from "styled-components";
import { Flex, useMatchBreakpoints } from "uikit";
import InnerDiv from "./components/InnerDiv";
import TitleH2 from "./components/TitleH2";
import ContextText from "components/ContextText";
import { preLink } from "appConfig";
const TheRarityWrapDiv = styled(InnerDiv)`
  margin-top: 40px;
  border-left: none;
  margin-left: 20px;
  padding-left: 20px;
  padding-right: 20px;
  .fr {
    display: none;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding-left: 44px;
    // margin-top: 170px;
    // margin-left: 0;
    // padding-right: 0;
    margin: 170px auto 0;
    border-left: 4px solid ${({ theme }) => `${theme.colors.primaryDark}`};
    .fr {
      display: block;
    }
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
  word-break: break-all;
  color: ${({ theme }) => `${theme.colors.text}`};
  display: none;
  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
    padding-top: 30px;
    padding-bottom: 16px;
    font-size: 23px;
    line-height: 28px;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    padding-top: 50px;
    padding-bottom: 20px;
    font-size: 28px;
    line-height: 35px;
  }
`;
const Fl = styled.div`
  width: 100%;
  .fr {
    display: block;
    margin: 10px auto 20px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    width: 50%;
    .fr {
      display: none;
    }
  }
`;
const Fr = styled.div`
  width: 290px;
  height: 320px;
  margin-left: 20px;
  margin-top: 20px;
  position: relative;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 40%;
    height: 400px;
    display: block;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    width: 560px;
    height: 560px;
  }
`;
const ImgSize = styled.div`
  position: absolute;
  width: 280px;
  height: 280px;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 70%;
    height: 70%;
    margin-left: 15%;
    margin-top: 15%;
  }
`;
const Bg01 = styled(ImgSize)`
  top: 10px;
  left: 10px;
  z-index: 2;
  background-color: #490917;
  ${({ theme }) => theme.mediaQueries.md} {
    top: 20px;
    left: 20px;
  }
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
  ${({ theme }) => theme.mediaQueries.md} {
    top: 40px;
    left: 40px;
  }
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
  align-items: start;
  div {
    width: 25%;
    opacity: 0.7;
    transition: all 0.3s ease;
    h3 {
      display: block;
      padding: 10px 4px 30px;
      font-size: 16px;
      line-height: 20px;
      // white-space: nowrap;
    }
    &:hover {
      opacity: 1;
      img {
        border-color: #fff;
        width: 97%;
      }
    }
    ${({ theme }) => theme.mediaQueries.md} {
      h3 {
        display: none;
      }
    }
  }
  img {
    width: 100%;
    transition: all 0.3s ease;
    border: 4px solid #000;
  }
  .on {
    opacity: 1;
    img {
      width: 97%;
      border-color: #fff;
    }
  }
  ${({ theme }) => theme.mediaQueries.md} {
    justify-content: start;
    img {
      width: 110px;
    }
    div {
      &:hover {
        img {
          width: 102px;
        }
      }
    }
    .on {
      img {
        width: 102px;
        border-color: #fff;
      }
    }
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    justify-content: start;
    img {
      width: 150px;
    }
    div {
      &:hover {
        img {
          width: 142px;
        }
      }
    }
    .on {
      img {
        width: 142px;
        border-color: #fff;
      }
    }
  }
`;
const TheRarityArr = [
  {
    title: "The Pacifist",
    context:
      "Each race can be considered as a legion with its own troop type, mechanical battle armor type, and code name",
    img: "1-1",
    smallImg: 1,
  },
  {
    title: "Freewill Alliance",
    context:
      "Each race can be considered as a legion with its own troop type, mechanical battle armor type, and code name",
    img: "2-1",
    smallImg: 2,
  },
  {
    title: "Phantom Federation",
    context:
      "Each race can be considered as a legion with its own troop type, mechanical battle armor type, and code name",
    img: "3-1",
    smallImg: 3,
  },
  {
    title: "Arora",
    context:
      "Each race can be considered as a legion with its own troop type, mechanical battle armor type, and code name",
    img: "4-1",
    smallImg: 4,
  },
];
const TheRarity = () => {
  const [showPic, setShowPic] = useState(1);
  const { isMd, isXl, isXxl } = useMatchBreakpoints();
  const item = TheRarityArr[showPic - 1];
  return (
    <TheRarityWrapDiv id="Rarity">
      <TheRarityWrapFlex>
        <Fl>
          <TitleH2 mt={2} position={isMd || isXl || isXxl ? "left" : "center"}>
            The Rarity
          </TitleH2>
          <Fr className="fr">
            <FrPicture>
              <picture>
                <img src={`${preLink}/images/therarity/${item.img}.jpg`} />
              </picture>
            </FrPicture>
            <Bg01></Bg01>
            <Bg02></Bg02>
          </Fr>
          <ListFlex>
            {TheRarityArr.map((v, index) => (
              <div key={index} className={v.smallImg === showPic ? "on" : ""}>
                <picture
                  onClick={() => {
                    setShowPic(v.smallImg);
                  }}
                >
                  <img src={`${preLink}/images/therarity/${v.smallImg}.jpg`} />
                </picture>
                <TheRarityTitle>{isXxl ? item.title : v.title}</TheRarityTitle>
              </div>
            ))}
          </ListFlex>
          <TheRarityTitle>{item.title}</TheRarityTitle>
          <ContextText>{item.context} </ContextText>
        </Fl>
        <Fr className="fr">
          <FrPicture>
            <picture>
              <img src={`${preLink}/images/therarity/${item.img}.jpg`} />
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
