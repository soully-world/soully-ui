import React from "react";
import styled from "styled-components";
import { LinkArr } from "appConfig/";

const LinkWrap = styled.div<{
  mr?: string;
}>`
  display: flex;
  margin-right: ${({ mr }) => mr || "0"};
`;
const Link = styled.a`
  display: block;
  padding-right: 20px;
  img {
    width: 30px;
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
