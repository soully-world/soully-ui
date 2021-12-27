import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Flex } from "uikit";
import { preLink } from "appConfig";
import {
  BannerWrapDiv,
  BannerBtn,
  BannerContextText,
  BannerInnerDiv,
  BannerTitle,
  BannerSubTitle,
} from "./bannerStyle";
const Banner = () => {
  const history = useHistory();
  return (
    <BannerWrapDiv preLink={preLink}>
      <BannerInnerDiv>
        <Flex flex={1} flexDirection="column">
          <BannerTitle>Soully World</BannerTitle>
          <BannerSubTitle>Who Need Protector</BannerSubTitle>
          <BannerContextText>
            Join this ultra-exclusive NFT project featuring not only authentic art, but unmatched utility! Gambling Ape
            owners co-own a Casino in the Metaverse, are invited to exclusive meetups & weekly competitions, and much
            more!
          </BannerContextText>
        </Flex>
        <BannerBtn>
          <Button
            variant="primary"
            onClick={() => {
              window.location.href = "/get";
            }}
          >
            Mint a Soully
          </Button>
          <Button variant="secondary">Join Our Discord</Button>
        </BannerBtn>
      </BannerInnerDiv>
    </BannerWrapDiv>
  );
};
export default Banner;
