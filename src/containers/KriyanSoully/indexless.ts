import styled from "styled-components";
export const KriyanSoullyStyle = styled.div`
  position: relative;
  .banner {
    background: url(images/KriyanSoully/bg.png) no-repeat;
    background-size: 1300px 800px;
    background-position: top center;
    padding-top: 100px;
    position: relative;
    ${({ theme }) => theme.mediaQueries.md} {
      padding-top: 200px;
    }
    ${({ theme }) => theme.mediaQueries.xl} {
      background-size: 1300px 800px;
    }

    ${({ theme }) => theme.mediaQueries.xxl} {
      background-size: 100%;
    }
    .logo {
      display: block;
      width: 68px;
      margin: 0 auto 14px;
      ${({ theme }) => theme.mediaQueries.md} {
        width: 128px;
      }
    }
    h2 {
      font-size: 24px;
      text-align: center;
      font-weight: bold;
      ${({ theme }) => theme.mediaQueries.md} {
        font-size: 100px;
      }
    }

    h4 {
      font-size: 18px;
      line-height: 22px;
      padding-top: 10px;
      padding-bottom: 120px;
      text-align: center;
      max-width: 90%;
      margin: 0 auto;
      ${({ theme }) => theme.mediaQueries.md} {
        font-size: 24px;
        padding-bottom: 340px;
        line-height: 28px;
      }
    }
  }
  .buttom {
    position: relative;
    z-index: 9;
    margin-top: -80px;
    padding-bottom: 90px;
    ${({ theme }) => theme.mediaQueries.md} {
      margin-top: -120px;
    }
    ul {
      text-align: center;
      li {
        display: inline-block;
        vertical-align: middle;
        margin-left: 20px;
        margin-top: 20px;

        &:first-child {
          margin-left: 0;
        }
        img {
          display: block;
          width: 100px;
          ${({ theme }) => theme.mediaQueries.md} {
            width: 225px;
          }
        }
      }
    }
    h3 {
      font-size: 20px;
      text-align: center;
      line-height: 46px;
      padding: 30px 20px;
      ${({ theme }) => theme.mediaQueries.md} {
        font-size: 40px;
        padding: 70px 40px;
      }
    }
    p {
      font-size: 12px;
      line-height: 18px;
      text-align: center;
      ${({ theme }) => theme.mediaQueries.md} {
        font-size: 18px;
        line-height: 31px;
      }
    }
  }
`;
