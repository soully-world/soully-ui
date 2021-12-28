import React from "react";
import styled from "styled-components";
import { LinkArr } from "appConfig/";

const LinkWrap = styled.div<{
  mr?: string;
}>`
  display: flex;
  padding: 40px;
  margin-right: 0;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-right: ${({ mr }) => mr || "0"};
    padding: 0;
    justify-content: start;
    align-items: start;
  }
`;
const Link = styled.a`
  display: block;
  padding-right: 0;
  img {
    width: 30px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding-right: 20px;
  }
`;
const ShareLink = ({ mr }: { mr?: string }) => {
  return (
    <LinkWrap mr={mr}>
      {LinkArr.map((v: { href: string; image: string; alt: string }, index: number) => {
        return (
          <Link key={index} href={v.href} target="_blank" rel="noreferrer">
            <img src={v.image} alt={v.alt} />
          </Link>
        );
      })}
    </LinkWrap>
  );
};
export default ShareLink;
