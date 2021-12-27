import React from "react";
import styled from "styled-components";
const HeaderLinkWarp = styled.div`
  display: flex;
`;
const HeaderLink = styled.div`
  color: #fff;
  padding-right: 20px;
  margin: 0 3%;
  h2 {
    font-weight: 600;
    font-size: 20px;
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
