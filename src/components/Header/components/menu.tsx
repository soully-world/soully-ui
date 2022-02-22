import React from "react";
import styled from "styled-components";
const HeaderLinkWarp = styled.div`
  display: block;
  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
  }
`;
const HeaderLink = styled.div`
  margin: 0 20px;
  display: block;
  line-height: 64px;
  height: 64px;
  font-weight: 800;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  white-space: nowrap;
  color: #fff;
  padding-right: 20px;
  margin: 0 3%;
  h2 {
    font-weight: 600;
    font-size: 18px;
  }
  &:first-child {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
  cursor: pointer;
  ${({ theme }) => theme.mediaQueries.xl} {
    margin: 0 3%;
    border: none;
    &:first-child {
      border-top: none;
    }
    h2 {
      font-size: 18px;
    }
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    margin: 0 1%;
    h2 {
      font-size: 18px;
    }
  }
`;

export default function Menu(props: { LinkArray: string[]; onKey: string; changeOnKey: any }) {
  const { LinkArray, onKey, changeOnKey } = props;
  return (
    <HeaderLinkWarp>
      {LinkArray.map((v: string) => {
        return (
          <HeaderLink
            key={v}
            title={v}
            className={v.replaceAll(" ", "") === onKey ? "on" : ""}
            onClick={() => changeOnKey(v)}
          >
            <h2>{v}</h2>
          </HeaderLink>
        );
      })}
    </HeaderLinkWarp>
  );
}
