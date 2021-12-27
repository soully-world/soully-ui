import React, { ReactNode } from "react";
import styled from "styled-components";
import { Heading } from "uikit";
const TitleWrapper = styled.div``;
const TitleH3 = ({ children, color }: { children: ReactNode | JSX.Element; color?: string }) => {
  return (
    <TitleWrapper>
      <Heading scale="md" mb="24px" color={color}>
        {children}
      </Heading>
    </TitleWrapper>
  );
};

export default TitleH3;
