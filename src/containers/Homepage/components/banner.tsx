import React, { memo, useEffect, useRef, useState } from "react";
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

const Banner = memo(() => {
  const { isXs, isSm, isMobile, isMd } = useMatchBreakpoints();
  // const frameRef = React.useRef(null);
  // const [iframeLoaded, onLoad] = React.useReducer(() => true, false);
  // React.useEffect(() => {
  //   const document = frameRef.current.contentDocument;
  //   if (document != null && document.readyState === "complete" && !iframeLoaded) {
  //   }
  // }, [iframeLoaded]);
  const isLoad = useRef<boolean | null>();
  const [showMp4, setShowMp4] = useState(false);
  useEffect(() => {
    isLoad.current = false;
    try {
      document.getElementById("ytplayer").onload = () => {
        isLoad.current = true;
        setShowMp4(false);
      };
    } catch (e) {
      setShowMp4(true);
    }
  }, []);
  useEffect(() => {
    if (isLoad.current) {
      setShowMp4(false);
    } else {
      setTimeout(() => {
        console.log(isLoad.current);
        if (!isLoad.current) {
          setShowMp4(true);
        }
      }, 3000);
    }
  }, [isLoad.current]);
  return (
    <BannerWrapDiv preLink={preLink} id="Home">
      {showMp4 ? (
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
      ) : null}
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

      {/*
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
              window.location.href = "/mint";
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
});
export default Banner;
