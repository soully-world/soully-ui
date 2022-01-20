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
    <BannerWrapDiv preLink={preLink} id="Home">
      <div className="videoWrap">
        <video
          muted
          autoPlay={true}
          loop={true}
          playsInline={true}
          disablePictureInPicture={true}
          disableRemotePlayback={true}
        >
          <source src="soully.mp4" type="video/mp4" />
        </video>
      </div>
      <BannerInnerDiv>
        <Flex flex={1} flexDirection="column">
          <BannerTitle>Soully World</BannerTitle>
          <BannerSubTitle>Who Need Protector</BannerSubTitle>
          <BannerContextText>
            Soully World is an NFT open-world made up of 10,000 completely original characters and a separate story of
            overhead history.
          </BannerContextText>
        </Flex>
        <BannerBtn>
          <Button
            variant="primary"
            className="primary"
            onClick={() => {
              window.location.href = "/get";
            }}
          >
            <em>Mint a Soully</em>
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              window.open("http://discord.gg/QTPmtnAkGx");
            }}
          >
            Join Our Discord
          </Button>
        </BannerBtn>
      </BannerInnerDiv>
    </BannerWrapDiv>
  );
};
export default Banner;
