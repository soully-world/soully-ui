import React, { ReactNode } from "react";
import styled from "styled-components";
const Wrapper = styled.div``;
const WrapDiv = ({ children }: { children: ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default WrapDiv;
