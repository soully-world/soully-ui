import React from "react";
import styled from "styled-components";
const LoadingStyle = styled.div`
  @import url("@/styles/theme.less");
  .cssload-dots {
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    outline: 1px solid red;
    filter: url(#goo);
    -o-filter: url(#goo);
    -ms-filter: url(#goo);
    -webkit-filter: url(#goo);
    -moz-filter: url(#goo);
    display: none;
  }

  .cssload-dot {
    width: 0;
    height: 0;
    position: absolute;
    left: 0;
    top: 0;
  }
  .cssload-dot:before {
    content: "";
    width: 34px;
    height: 34px;
    border-radius: 49px;
    background: #efb2ea;
    position: absolute;
    left: 50%;
    transform: translateY(0);
    -o-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    margin-left: -17.5px;
    margin-top: -17.5px;
  }

  .cssload-dot:nth-child(5):before {
    z-index: 100;
    width: 44.5px;
    height: 44.5px;
    margin-left: -21.75px;
    margin-top: -21.75px;
    animation: cssload-dot-colors 3.6s ease infinite;
    -o-animation: cssload-dot-colors 3.6s ease infinite;
    -ms-animation: cssload-dot-colors 3.6s ease infinite;
    -webkit-animation: cssload-dot-colors 3.6s ease infinite;
    -moz-animation: cssload-dot-colors 3.6s ease infinite;
  }

  .cssload-dot:nth-child(1) {
    animation: cssload-dot-rotate-1 3.6s 0s linear infinite;
    -o-animation: cssload-dot-rotate-1 3.6s 0s linear infinite;
    -ms-animation: cssload-dot-rotate-1 3.6s 0s linear infinite;
    -webkit-animation: cssload-dot-rotate-1 3.6s 0s linear infinite;
    -moz-animation: cssload-dot-rotate-1 3.6s 0s linear infinite;
  }
  .cssload-dot:nth-child(1):before {
    background-color: rgb(255, 50, 112);
    animation: cssload-dot-move 3.6s 0s ease infinite;
    -o-animation: cssload-dot-move 3.6s 0s ease infinite;
    -ms-animation: cssload-dot-move 3.6s 0s ease infinite;
    -webkit-animation: cssload-dot-move 3.6s 0s ease infinite;
    -moz-animation: cssload-dot-move 3.6s 0s ease infinite;
  }

  .cssload-dot:nth-child(2) {
    animation: cssload-dot-rotate-2 3.6s 1.15s linear infinite;
    -o-animation: cssload-dot-rotate-2 3.6s 1.15s linear infinite;
    -ms-animation: cssload-dot-rotate-2 3.6s 1.15s linear infinite;
    -webkit-animation: cssload-dot-rotate-2 3.6s 1.15s linear infinite;
    -moz-animation: cssload-dot-rotate-2 3.6s 1.15s linear infinite;
  }
  .cssload-dot:nth-child(2):before {
    background-color: @bgyellow;
    animation: cssload-dot-move 3.6s 1.15s ease infinite;
    -o-animation: cssload-dot-move 3.6s 1.15s ease infinite;
    -ms-animation: cssload-dot-move 3.6s 1.15s ease infinite;
    -webkit-animation: cssload-dot-move 3.6s 1.15s ease infinite;
    -moz-animation: cssload-dot-move 3.6s 1.15s ease infinite;
  }

  .cssload-dot:nth-child(3) {
    animation: cssload-dot-rotate-3 3.6s 2.3s linear infinite;
    -o-animation: cssload-dot-rotate-3 3.6s 2.3s linear infinite;
    -ms-animation: cssload-dot-rotate-3 3.6s 2.3s linear infinite;
    -webkit-animation: cssload-dot-rotate-3 3.6s 2.3s linear infinite;
    -moz-animation: cssload-dot-rotate-3 3.6s 2.3s linear infinite;
  }
  .cssload-dot:nth-child(3):before {
    background-color: #b8c1c0;
    animation: cssload-dot-move 3.6s 2.3s ease infinite;
    -o-animation: cssload-dot-move 3.6s 2.3s ease infinite;
    -ms-animation: cssload-dot-move 3.6s 2.3s ease infinite;
    -webkit-animation: cssload-dot-move 3.6s 2.3s ease infinite;
    -moz-animation: cssload-dot-move 3.6s 2.3s ease infinite;
  }

  .cssload-dot:nth-child(4) {
    animation: cssload-dot-rotate-4 3.6s 3.45s linear infinite;
    -o-animation: cssload-dot-rotate-4 3.6s 3.45s linear infinite;
    -ms-animation: cssload-dot-rotate-4 3.6s 3.45s linear infinite;
    -webkit-animation: cssload-dot-rotate-4 3.6s 3.45s linear infinite;
    -moz-animation: cssload-dot-rotate-4 3.6s 3.45s linear infinite;
  }
  .cssload-dot:nth-child(4):before {
    background-color: #efb2ea;
    animation: cssload-dot-move 3.6s 3.45s ease infinite;
    -o-animation: cssload-dot-move 3.6s 3.45s ease infinite;
    -ms-animation: cssload-dot-move 3.6s 3.45s ease infinite;
    -webkit-animation: cssload-dot-move 3.6s 3.45s ease infinite;
    -moz-animation: cssload-dot-move 3.6s 3.45s ease infinite;
  }

  @keyframes cssload-dot-move {
    0% {
      transform: translateY(0);
    }
    18%,
    22% {
      transform: translateY(-68px);
    }
    40%,
    100% {
      transform: translateY(0);
    }
  }

  @-o-keyframes cssload-dot-move {
    0% {
      -o-transform: translateY(0);
    }
    18%,
    22% {
      -o-transform: translateY(-68px);
    }
    40%,
    100% {
      -o-transform: translateY(0);
    }
  }

  @-ms-keyframes cssload-dot-move {
    0% {
      -ms-transform: translateY(0);
    }
    18%,
    22% {
      -ms-transform: translateY(-68px);
    }
    40%,
    100% {
      -ms-transform: translateY(0);
    }
  }

  @-webkit-keyframes cssload-dot-move {
    0% {
      -webkit-transform: translateY(0);
    }
    18%,
    22% {
      -webkit-transform: translateY(-68px);
    }
    40%,
    100% {
      -webkit-transform: translateY(0);
    }
  }

  @-moz-keyframes cssload-dot-move {
    0% {
      -moz-transform: translateY(0);
    }
    18%,
    22% {
      -moz-transform: translateY(-68px);
    }
    40%,
    100% {
      -moz-transform: translateY(0);
    }
  }

  @keyframes cssload-dot-colors {
    0% {
      background-color: #efb2ea;
    }
    25% {
      background-color: rgb(255, 50, 112);
    }
    50% {
      background-color: @bgyellow;
    }
    75% {
      background-color: #b8c1c0;
    }
    100% {
      background-color: #efb2ea;
    }
  }

  @-o-keyframes cssload-dot-colors {
    0% {
      background-color: #efb2ea;
    }
    25% {
      background-color: rgb(255, 50, 112);
    }
    50% {
      background-color: @bgyellow;
    }
    75% {
      background-color: #b8c1c0;
    }
    100% {
      background-color: #efb2ea;
    }
  }

  @-ms-keyframes cssload-dot-colors {
    0% {
      background-color: #efb2ea;
    }
    25% {
      background-color: rgb(255, 50, 112);
    }
    50% {
      background-color: @bgyellow;
    }
    75% {
      background-color: #b8c1c0;
    }
    100% {
      background-color: #efb2ea;
    }
  }

  @-webkit-keyframes cssload-dot-colors {
    0% {
      background-color: #efb2ea;
    }
    25% {
      background-color: rgb(255, 50, 112);
    }
    50% {
      background-color: @bgyellow;
    }
    75% {
      background-color: #b8c1c0;
    }
    100% {
      background-color: #efb2ea;
    }
  }

  @-moz-keyframes cssload-dot-colors {
    0% {
      background-color: #efb2ea;
    }
    25% {
      background-color: rgb(255, 50, 112);
    }
    50% {
      background-color: @bgyellow;
    }
    75% {
      background-color: #b8c1c0;
    }
    100% {
      background-color: #efb2ea;
    }
  }

  @keyframes cssload-dot-rotate-1 {
    0% {
      transform: rotate(-105deg);
    }
    100% {
      transform: rotate(270deg);
    }
  }

  @-o-keyframes cssload-dot-rotate-1 {
    0% {
      -o-transform: rotate(-105deg);
    }
    100% {
      -o-transform: rotate(270deg);
    }
  }

  @-ms-keyframes cssload-dot-rotate-1 {
    0% {
      -ms-transform: rotate(-105deg);
    }
    100% {
      -ms-transform: rotate(270deg);
    }
  }

  @-webkit-keyframes cssload-dot-rotate-1 {
    0% {
      -webkit-transform: rotate(-105deg);
    }
    100% {
      -webkit-transform: rotate(270deg);
    }
  }

  @-moz-keyframes cssload-dot-rotate-1 {
    0% {
      -moz-transform: rotate(-105deg);
    }
    100% {
      -moz-transform: rotate(270deg);
    }
  }

  @keyframes cssload-dot-rotate-2 {
    0% {
      transform: rotate(165deg);
    }
    100% {
      transform: rotate(540deg);
    }
  }

  @-o-keyframes cssload-dot-rotate-2 {
    0% {
      -o-transform: rotate(165deg);
    }
    100% {
      -o-transform: rotate(540deg);
    }
  }

  @-ms-keyframes cssload-dot-rotate-2 {
    0% {
      -ms-transform: rotate(165deg);
    }
    100% {
      -ms-transform: rotate(540deg);
    }
  }

  @-webkit-keyframes cssload-dot-rotate-2 {
    0% {
      -webkit-transform: rotate(165deg);
    }
    100% {
      -webkit-transform: rotate(540deg);
    }
  }

  @-moz-keyframes cssload-dot-rotate-2 {
    0% {
      -moz-transform: rotate(165deg);
    }
    100% {
      -moz-transform: rotate(540deg);
    }
  }

  @keyframes cssload-dot-rotate-3 {
    0% {
      transform: rotate(435deg);
    }
    100% {
      transform: rotate(810deg);
    }
  }

  @-o-keyframes cssload-dot-rotate-3 {
    0% {
      -o-transform: rotate(435deg);
    }
    100% {
      -o-transform: rotate(810deg);
    }
  }

  @-ms-keyframes cssload-dot-rotate-3 {
    0% {
      -ms-transform: rotate(435deg);
    }
    100% {
      -ms-transform: rotate(810deg);
    }
  }

  @-webkit-keyframes cssload-dot-rotate-3 {
    0% {
      -webkit-transform: rotate(435deg);
    }
    100% {
      -webkit-transform: rotate(810deg);
    }
  }

  @-moz-keyframes cssload-dot-rotate-3 {
    0% {
      -moz-transform: rotate(435deg);
    }
    100% {
      -moz-transform: rotate(810deg);
    }
  }

  @keyframes cssload-dot-rotate-4 {
    0% {
      transform: rotate(705deg);
    }
    100% {
      transform: rotate(1080deg);
    }
  }

  @-o-keyframes cssload-dot-rotate-4 {
    0% {
      -o-transform: rotate(705deg);
    }
    100% {
      -o-transform: rotate(1080deg);
    }
  }

  @-ms-keyframes cssload-dot-rotate-4 {
    0% {
      -ms-transform: rotate(705deg);
    }
    100% {
      -ms-transform: rotate(1080deg);
    }
  }

  @-webkit-keyframes cssload-dot-rotate-4 {
    0% {
      -webkit-transform: rotate(705deg);
    }
    100% {
      -webkit-transform: rotate(1080deg);
    }
  }

  @-moz-keyframes cssload-dot-rotate-4 {
    0% {
      -moz-transform: rotate(705deg);
    }
    100% {
      -moz-transform: rotate(1080deg);
    }
  }

  #fountainTextG {
    margin: 0 auto;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, 50%);
  }

  .fountainTextG {
    color: #f59fee;
    font-size: 30px;
    text-decoration: none;
    font-weight: normal;
    font-style: normal;
    float: left;
    animation-name: bounce_fountainTextG;
    -o-animation-name: bounce_fountainTextG;
    -ms-animation-name: bounce_fountainTextG;
    -webkit-animation-name: bounce_fountainTextG;
    -moz-animation-name: bounce_fountainTextG;
    animation-duration: 2.09s;
    -o-animation-duration: 2.09s;
    -ms-animation-duration: 2.09s;
    -webkit-animation-duration: 2.09s;
    -moz-animation-duration: 2.09s;
    animation-iteration-count: infinite;
    -o-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    animation-direction: normal;
    -o-animation-direction: normal;
    -ms-animation-direction: normal;
    -webkit-animation-direction: normal;
    -moz-animation-direction: normal;
    transform: scale(0.5);
    -o-transform: scale(0.5);
    -ms-transform: scale(0.5);
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
  }
  #fountainTextG_1 {
    animation-delay: 0.75s;
    -o-animation-delay: 0.75s;
    -ms-animation-delay: 0.75s;
    -webkit-animation-delay: 0.75s;
    -moz-animation-delay: 0.75s;
  }
  #fountainTextG_2 {
    animation-delay: 0.9s;
    -o-animation-delay: 0.9s;
    -ms-animation-delay: 0.9s;
    -webkit-animation-delay: 0.9s;
    -moz-animation-delay: 0.9s;
  }
  #fountainTextG_3 {
    animation-delay: 1.05s;
    -o-animation-delay: 1.05s;
    -ms-animation-delay: 1.05s;
    -webkit-animation-delay: 1.05s;
    -moz-animation-delay: 1.05s;
  }
  #fountainTextG_4 {
    animation-delay: 1.2s;
    -o-animation-delay: 1.2s;
    -ms-animation-delay: 1.2s;
    -webkit-animation-delay: 1.2s;
    -moz-animation-delay: 1.2s;
  }
  #fountainTextG_5 {
    animation-delay: 1.35s;
    -o-animation-delay: 1.35s;
    -ms-animation-delay: 1.35s;
    -webkit-animation-delay: 1.35s;
    -moz-animation-delay: 1.35s;
  }
  #fountainTextG_6 {
    animation-delay: 1.5s;
    -o-animation-delay: 1.5s;
    -ms-animation-delay: 1.5s;
    -webkit-animation-delay: 1.5s;
    -moz-animation-delay: 1.5s;
  }
  #fountainTextG_7 {
    animation-delay: 1.64s;
    -o-animation-delay: 1.64s;
    -ms-animation-delay: 1.64s;
    -webkit-animation-delay: 1.64s;
    -moz-animation-delay: 1.64s;
  }

  @keyframes bounce_fountainTextG {
    0% {
      transform: scale(1);
      color: #f59fee;
    }

    100% {
      transform: scale(0.5);
      color: rgb(255, 255, 255);
    }
  }

  @-o-keyframes bounce_fountainTextG {
    0% {
      -o-transform: scale(1);
      color: #f59fee;
    }

    100% {
      -o-transform: scale(0.5);
      color: rgb(255, 255, 255);
    }
  }

  @-ms-keyframes bounce_fountainTextG {
    0% {
      -ms-transform: scale(1);
      color: #f59fee;
    }

    100% {
      -ms-transform: scale(0.5);
      color: rgb(255, 255, 255);
    }
  }

  @-webkit-keyframes bounce_fountainTextG {
    0% {
      -webkit-transform: scale(1);
      color: #f59fee;
    }

    100% {
      -webkit-transform: scale(0.5);
      color: rgb(255, 255, 255);
    }
  }

  @-moz-keyframes bounce_fountainTextG {
    0% {
      -moz-transform: scale(1);
      color: #f59fee;
    }

    100% {
      -moz-transform: scale(0.5);
      color: rgb(255, 255, 255);
    }
  }
`;
export const PageLoading = () => {
  return (
    <LoadingStyle>
      <div className="cssload-dots">
        <div className="cssload-dot"></div>
        <div className="cssload-dot"></div>
        <div className="cssload-dot"></div>
        <div className="cssload-dot"></div>
        <div className="cssload-dot"></div>
      </div>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="12"></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0	0 1 0 0 0	0 0 1 0 0	0 0 0 18 -7"
              result="goo"
            ></feColorMatrix>
          </filter>
        </defs>
      </svg>

      <div id="fountainTextG">
        <div id="fountainTextG_1" className="fountainTextG">
          L
        </div>
        <div id="fountainTextG_2" className="fountainTextG">
          o
        </div>
        <div id="fountainTextG_3" className="fountainTextG">
          a
        </div>
        <div id="fountainTextG_4" className="fountainTextG">
          d
        </div>
        <div id="fountainTextG_5" className="fountainTextG">
          i
        </div>
        <div id="fountainTextG_6" className="fountainTextG">
          n
        </div>
        <div id="fountainTextG_7" className="fountainTextG">
          g
        </div>
      </div>
    </LoadingStyle>
  );
};
