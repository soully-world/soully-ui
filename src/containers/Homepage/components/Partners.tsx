import { preLink } from "appConfig";
import TitleH2 from "./components/TitleH2";
import styled from "styled-components";
import { InnerMax } from "./components/InnerDiv";

const partnersArr = [
  {
    name: "@0xuezhang|985.eth",
    image: "01.png",
  },
  {
    name: "@0xXiaozhu",
    image: "02.png",
  },
  {
    name: "@K18NftClub",
    image: "K18NftClub.png",
  },
  {
    name: "@SlothverseNFT",
    image: "04.png",
  },

  {
    name: "@Xinyii.eth",
    image: "Xinyii.eth.png",
  },
  {
    name: "@MetaC1ub",
    image: "MetaC1ub.png",
  },
  {
    name: "@TheDefiantsNFT",
    image: "07.png",
  },
  {
    name: "@cryptorussians",
    image: "08.png",
  },
  {
    name: "@AquaHeadNFTclub",
    image: "09.png",
  },
  {
    name: "@monzterminions",
    image: "10.png",
  },
  {
    name: "@ShibaVikingsNFT",
    image: "11.png",
  },
  {
    name: "@bitfrenchies",
    image: "12.png",
  },

  {
    name: "@NFT_cyberpunk",
    image: "NFT_cyberpunk.png",
  },
  {
    name: "@longkuiclub",
    image: "longkuiclub.png",
  },
  {
    name: "@Coinhub_Wallet",
    image: "Coinhub_Wallet.png",
  },
  {
    name: "@spacey2025",
    image: "06.png",
  },
  {
    name: "@TimeVillainsNFT",
    image: "TimeVillainsNFT.png",
  },
  {
    name: "@BrainDanceNFT",
    image: "BrainDanceNFT.png",
  },
];
const Partners = () => {
  return (
    <PartnerInnerDiv id="Team">
      <TitleH2 position="center" mt={120}>
        Soully Partners
      </TitleH2>
      <UlWrap>
        {partnersArr.map((v: { image: string; name: string }, index: number) => {
          return (
            <LiWrap key={index}>
              <div className="inner">
                <picture>
                  <img src={`${preLink}/images/partners/${v.image}`} />
                </picture>
                <LiContextText>{v.name}</LiContextText>
              </div>
            </LiWrap>
          );
        })}
      </UlWrap>
    </PartnerInnerDiv>
  );
};
const UlWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-flow: wrap;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 20px;
  padding-right: 20px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding-right: 0;
    padding-top: 80px;
    padding-bottom: 200px;
  }
`;
const LiWrap = styled.li`
  width: 33%;
  padding: 2px;
  margin-bottom: -2px;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 33%;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    width: 16%;
  }
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5),
  &:nth-child(6),
  &:nth-child(13),
  &:nth-child(14),
  &:nth-child(15),
  &:nth-child(16),
  &:nth-child(17),
  &:nth-child(18) {
    background: linear-gradient(90deg, #f40638 0%, rgba(36, 17, 7, 0) 100%);
  }

  &:nth-child(7),
  &:nth-child(8),
  &:nth-child(9),
  &:nth-child(10),
  &:nth-child(11),
  &:nth-child(12) {
    background: linear-gradient(90deg, #345fae 0%, rgba(63, 114, 196, 0) 100%);
  }
  img {
    width: 80%;
    margin: 0 auto;
    ${({ theme }) => theme.mediaQueries.md} {
      width: 50%;
    }
  }
  .inner {
    padding: 10px 0;
    text-align: center;
    background-color: ${({ theme }) => `${theme.colors.background}`};
    ${({ theme }) => theme.mediaQueries.md} {
      padding: 20px 0;
    }
  }
`;
const LiContextText = styled.p`
  font-size: 14px;
  line-height: 18px;
  padding-top: 14px;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 18px;
    line-height: 22px;
  }
`;

const PartnerInnerDiv = styled(InnerMax)`
  text-align: center;
`;

export default Partners;
