import React from "react";
import { useHistory } from "react-router-dom";
import { useMatchBreakpoints } from "uikit";
import { preLink } from "appConfig";
import {
  BannerWrapDiv,
  IframeWrap,
  // BannerBtn,
  // BannerContextText,
  // BannerInnerDiv,
  // BannerTitle,
  // BannerSubTitle,
} from "./bannerStyle";
const Banner = () => {
  const history = useHistory();
  const { isXs, isSm, isMobile, isMd } = useMatchBreakpoints();
  return (
    <BannerWrapDiv preLink={preLink} id="Home">
      <IframeWrap>
        <iframe
          id="ytplayer"
          // type="text/html"
          width="100%"
          height={isXs || isSm || isMobile ? "400" : isMd ? "600" : "1000px"}
          // https://www.youtube.com/watch?v=mXgoJhJV-fg
          // ?autoplay=1&origin=https://www.soully.world/
          // ,mXgoJhJV-fg,mXgoJhJV-fg,mXgoJhJV-fg,mXgoJhJV-fg
          src="https://www.youtube.com/embed/mXgoJhJV-fg?color=white&mute=1&autoplay=1&controls=0&enablejsapi=1&loop=1&rel=0&playlist=mXgoJhJV-fg&origin=https://www.soully.world/"
          frameBorder="0"
        ></iframe>
      </IframeWrap>
      {/* <div className="videoWrap">
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
      </BannerInnerDiv> */}
    </BannerWrapDiv>
  );
};
export default Banner;
